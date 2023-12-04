/* eslint-disabUPDATE_MENU_ITEMSle react/no-unescaped-entities */
import { useEffect } from 'react';
import MenuItem from '../MenuItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_DISHES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_DISHES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function MenuList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_DISHES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_DISHES,
        dishes: data.dishes,
      });
      data.dishes.forEach((product) => {
        idbPromise('dishes', 'put', product);
      });
    } else if (!loading) {
      idbPromise('dishes', 'get').then((dishes) => {
        dispatch({
          type: UPDATE_DISHES,
          dishes: dishes,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterDishes() {
    if (!currentCategory) {
      return state.dishes;
    }

    return state.dishes.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Dishes:</h2>
      {state.dishes.length ? (
        <div className="flex-row">
          {filterDishes().map((product) => (
            <MenuItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any dishes yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default MenuList;
