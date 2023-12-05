const db = require('./connection');
const { User, Dish, Menu } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Menu', 'menus');
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
        'A Mediterranean fusion of Kalamata and green olives immersed in a zesty blend of herbs, citrus, and garlic.',
      image: 'marinated-olives.jpg',
      menu: menuItems[0]._id,
      price: 7.99,
      recommend: false
    },
    {
      name: 'Flatbread Pizza',
      description:
        'A delightful fusion of crisp flatbread topped with savory tomato sauce and diced tomatoes, melted cheese, fresh basil, and topped with a balsamic glaze drizzle.',
      image: 'flatbread-pizza.jpg',
      menu: menuItems[0]._id,
      price: 15.99,
      recommend: false
    },
    {
      name: 'Antipasto Skewers',
      menu: menuItems[0]._id,
      description:
        'A selection of cured meats, fresh mozzarella, olives, and veggies, skillfully threaded for a flavorful appetizer experience.',
      image: 'antipasto-skewers.jpg',
      price: 8.99,
      recommend: false
    },
    {
      name: 'Ultimate Cheese Board',
      menu: menuItems[0]._id,
      description:
        'A curated selection of artisanal cheeses, paired with complementary nuts, fruits, and crackers.',
      image: 'cheese-board.jpg',
      price: 19.99,
      recommend: false
    },
    {
      name: 'Stuffed Mushrooms',
      menu: menuItems[0]._id,
      description:
        'Plump mushrooms filled with a savory mixture of Italian herbs, garlic, breadcrumbs, and melted cheese.',
      image: 'stuffed-mushrooms.jpg',
      price: 8.99,
      recommend: false
    },
    {
      name: 'Marinated Steak',
      menu: menuItems[1]._id,
      description:
        'A succulent cut of premium beef soaked in a flavorful blend of herbs, garlic, and spices, grilled to perfection.',
      image: 'marinated-steak.jpg',
      price: 29.99,
      recommend: false
    },
    {
      name: 'Spaghetti and Meatballs',
      menu: menuItems[1]._id,
      description:
        'A classic Italian comfort dish featuring al dente spaghetti smothered in rich tomato sauce, topped with perfectly seasoned meatballs, delivering a hearty and satisfying taste of tradition.',
      image: 'spaghetti.jpg',
      price: 21.99,
      recommend: false
    },
    {
      name: 'Penne Alla Vodka',
      menu: menuItems[1]._id,
      description:
        'A creamy and indulgent pasta dish where al dente penne is bathed in a luscious vodka-infused tomato cream sauce, creating a delightful harmony of richness and warmth.',
      image: 'penne-vodka.jpg',
      price: 21.99,
      recommend: false
    },
    {
      name: 'Chicken Parmesan',
      menu: menuItems[1]._id,
      description: 'Tender chicken cutlets coated in crispy breadcrumbs, topped with marinara sauce, melted mozzarella, and Parmesan cheese, baked to golden perfection for a mouthwatering Italian favorite.',
      image: 'chicken-parmesan.jpg',
      price: 26.99,
      recommend: false
    },
    {
      name: 'Carbonara',
      menu: menuItems[1]._id,
      description:
        'Perfectly cooked spaghetti tossed in a velvety sauce of eggs, Parmesan cheese, crispy pancetta, and black pepper.',
      image: 'carbonara.jpg',
      price: 21.99,
      recommend: false
    },
    {
      name: 'Mediterranean Salad',
      menu: menuItems[2]._id,
      description:
        'A vibrant blend of crisp greens, juicy tomatoes, cucumber, Kalamata olives, and feta cheese, drizzled with a lemon-oregano vinaigrette.',
      image: 'med-salad.jpg',
      price: 17.99,
      recommend: false
    },
    {
      name: 'Summer Zucchini Pasta',
      menu: menuItems[2]._id,
      description:
        'A light and refreshing dish featuring spiralized zucchini noodles tossed with cherry tomatoes, basil, garlic, and a hint of lemon.',
      image: 'zucchini-pasta.jpg',
      price: 21.99,
      recommend: false
    },
    {
      name: 'Egg Plant Pizza',
      menu: menuItems[2]._id,
      description:
        'Ecco un delizioso finger food a base di tenere melanzane e condito con una gustosa salsa di pomodoro e formaggio fuso.',
      image: 'eggplant.jpg',
      price: 19.99,
      recommend: false
    },
    {
      name: 'Zucchinni Fritters',
      menu: menuItems[2]._id,
      description:
        'Le frittelle di zucchine sono ricche di sapore e sono un ottimo pasto vegetariano per tutta la famiglia.',
      image: 'fritter.jpg',
      price: 15.99,
      recommend: false
    },
    {
      name: 'Rice Salad',
      menu: menuItems[2]._id,
      description:
        'Un piatto delizioso con riso, verdure fresche e un condimento delizioso.',
      image: 'rice-salad.jpg',
      price: 15.99,
      recommend: false
    },
    {
      name: 'Italian Butter Cookies',
      menu: menuItems[3]._id,
      description:
        'Un incrocio tra biscotti di pasta frolla e di zucchero, sono perfetti per ogni occasione.',
      image: 'butter-cookie.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Lemon Riccota Cake With Almonds',
      menu: menuItems[3]._id,
      description:
        'Limone e ricotta sono un abbinamento perfetto per le torte: piccante, cremoso, piccante e perfetto con alcune mandorle tostate.',
      image: 'riccota.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Tiramisu',
      menu: menuItems[3]._id,
      description:
        'Pan di spagna tenero, caffè ricco, ripieno dolce e cremoso e tanto cioccolato! Oh, ed è anche popolare aggiungere alcolici!',
      image: 'tiramisu.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Cannoli',
      menu: menuItems[3]._id,
      description:
        'Un rotolo di pasta fritta con un dolce ripieno cremoso.',
      image: 'cannoli.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Zeppole',
      menu: menuItems[3]._id,
      description:
        'Queste ciambelle italiane sono leggere, soffici e si sciolgono in bocca.',
      image: 'zeppole.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Grilled Asparagus',
      menu: menuItems[4]._id,
      description:
        'Spolverate con sale, pepe e un po di parmigiano',
      image: 'asparagus.jpg',
      price: 5.99,
      recommend: false
    },
    {
      name: 'Roasted Brussell Sprouts',
      menu: menuItems[4]._id,
      description:
        'I cavoletti di Bruxelles arrostiti al forno hanno un esterno perfettamente croccante e un centro che si scioglie in bocca.',
      image: 'brussell.jpg',
      price: 5.99,
      recommend: false
    },
    {
      name: 'Garlic Knots',
      menu: menuItems[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'garlic-knots.jpg',
      price: 4.99,
      recommend: false
    },
    {
      name: 'Caprese Stuffed Avocados',
      menu: menuItems[4]._id,
      description:
        'Gli avocado ripieni caprese semplici e freschi sono una svolta sui sapori classici. Questo è un antipasto o un contorno perfetto per qualsiasi pasto!',
      image: 'caprese.jpg',
      price: 9.99,
      recommend: false
    },
    {
      name: 'Zucchini Chips ',
      menu: menuItems[4]._id,
      description:
        'Tagliate di zucchine cotte al punto giusto con una crosta di parmigiano e pangrattato.',
      image: 'chips.jpg',
      price: 5.99,
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
