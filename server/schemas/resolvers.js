require("dotenv").config()
const { User, Dish, Menu, Order } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE_KEY);

const resolvers = {
  Query: {
    menuItems: async () => {
      return await Menu.find();
    },
    dishes: async (parent, { menu, name }) => {
      const params = {};

      if (menu) {
        params.menu = menu;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Dish.find(params);
    },
    dish: async (parent, { _id }) => {
      return await Dish.findById(_id);
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        .populate({
          path: 'orders.dishes',
          populate: 'menu' 
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw AuthenticationError;
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        .populate({
          path: 'orders.dishes',
          populate: 'menu'
        });

        return user.orders.id(_id);
      }

      throw AuthenticationError;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      await Order.create({ dishes: args.dishes.map(({ _id }) => _id) });
      // eslint-disable-next-line camelcase
      const line_items = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const dish of args.dishes) {

        const unit_amount = Math.round(dish.price * 100)

        line_items.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: dish.name,
              description: dish.description,
              images: [`${url}/images/${dish.image}`]
            },
            unit_amount: unit_amount,
          },
          quantity: dish.purchaseQuantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { dishes }, context) => {
      if (context.user) {
        const order = new Order({ dishes });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
    updateDish: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Dish.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
