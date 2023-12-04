const typeDefs = `
  type Menu {
    _id: ID
    name: String
  }

  type Dish {
    _id: ID
    name: String
    description: String
    image: String
    recommend: Boolean
    price: Float
    menu: Menu
  }

  type Order {
    _id: ID
    purchaseDate: String
    dishes: [Dish]
  }

  type User {
    _id: ID
    userName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input DishInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    menuItems: [Menu]
    dishes(menu: ID, name: String): [Dish]
    dish(_id: ID!): Dish
    user: User
    order(_id: ID!): Order
    checkout(dishes: [DishInput]): Checkout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addOrder(dishes: [ID]!): Order
    updateUser(userName: String, email: String, password: String): User
    updateDish(_id: ID!, quantity: Int!): Dish
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
