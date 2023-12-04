import { gql } from '@apollo/client';

export const QUERY_DISHES = gql`
  query getDishes($menu: ID) {
    dishes(menu: $menu) {
      _id
      name
      description
      price
      recommend
      image
      menu {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($dishes: [DishInput]) {
    checkout(dishes: $dishes) {
      session
    }
  }
`;

export const QUERY_ALL_DISHES = gql`
  {
    dishes {
      _id
      name
      description
      price
      recommend
      menu {
        name
      }
    }
  }
`;

export const QUERY_MENU_ITEMS = gql`
query queryMenuItems {
  menuItems {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
  {
    user {
      userName
      orders {
        _id
        purchaseDate
        dishes {
          _id
          name
          description
          price
          recommend
          image
        }
      }
    }
  }
`;
