const db = require('./connection');
const { User, Dish, Menu } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Menu', 'menuItems');
  await cleanDB('Dish', 'dishes');
  await cleanDB('User', 'users');

  const menuItems = await Menu.insertMany([
    { name: 'Appetizers' },
    { name: 'Entrees' },
    { name: 'Vegeterian' },
    { name: 'Desserts' },
    { name: 'Sides' },
  ]);

  console.log('menuItems seeded');

  const dishes = await Dish.insertMany([
    {
      name: 'Marinated Olives',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'marinated-olives.jpg',
      menu: menuItems[0]._id,
      price: 7.99,
      recommend: false
    },
    {
      name: 'Flatbread Mini Pizzas',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'flatbread-pizzas.jpg',
      menu: menuItems[0]._id,
      price: 12.99,
      recommend: false
    },
    {
      name: 'Antipasto Skewers',
      menu: menuItems[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'antipasto-skewers.jpg',
      price: 8.99,
      recommend: false
    },
    {
      name: 'Ultimate Cheese Board',
      menu: menuItems[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'cheese-board.jpg',
      price: 19.99,
      recommend: false
    },
    {
      name: 'Stuffed Mushrooms',
      menu: menuItems[0]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'stuffed-mushrooms.jpg',
      price: 7.99,
      recommend: false
    },
    {
      name: 'Marinated Steak',
      menu: menuItems[1]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'marinated-steak.jpg',
      price: 29.99,
      recommend: false
    },
    {
      name: 'Spaghetti',
      menu: menuItems[1]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'spaghetti.jpg',
      price: 21.99,
      recommend: false
    },
    {
      name: 'Penne Alla Vodka',
      menu: menuItems[1]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'pasta.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Chicken Parmesan',
      menu: menuItems[1]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      recommend: false
    },
    {
      name: 'Carbonara',
      menu: menuItems[1]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      recommend: false
    },
    {
      name: 'Mediterranean Salad',
      menu: menuItems[2]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      recommend: false
    },
    {
      name: 'Summer Zucchini Pasta',
      menu: menuItems[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Vegan',
      menu: menuItems[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Veggie',
      menu: menuItems[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Salad',
      menu: menuItems[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Dessert1',
      menu: menuItems[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Dessert2',
      menu: menuItems[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Dessert3',
      menu: menuItems[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Dessert4',
      menu: menuItems[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Dessert5',
      menu: menuItems[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Sides1',
      menu: menuItems[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Sides2',
      menu: menuItems[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Sides3',
      menu: menuItems[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Sides4',
      menu: menuItems[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Sides5',
      menu: menuItems[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      recommend: false
    },
  ]);

  console.log('dishes seeded');

  await User.create({
    userName: 'Pammy',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        dishess: [dishes[0]._id, dishes[0]._id, dishes[1]._id]
      }
    ]
  });

  await User.create({
    userName: 'Eli',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
