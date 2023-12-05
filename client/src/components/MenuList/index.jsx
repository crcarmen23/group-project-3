/* eslint-disable react/prop-types */
/* eslint-disabUPDATE_MENU_ITEMSle react/no-unescaped-entities */
import { useEffect } from 'react';
import MenuItem from '../MenuItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_DISHES } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_DISHES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function MenuList(props) {
  console.log(props);
  const [state, dispatch] = useStoreContext();

  const { currentMenu } = state;

  const { loading, data } = useQuery(QUERY_DISHES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_DISHES,
        dishes: data.dishes,
      });
      data.dishes.forEach((dish) => {
        idbPromise('dishes', 'put', dish);
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
    if(props.recommended) {
      return state.dishes.filter(
        (dish) => dish.recommend === true
      );
    }

    if (!currentMenu) {
      return state.dishes;
    }
    
    
    return state.dishes.filter(
      (dish) => dish.menu._id === currentMenu
    );
  }

  return (
    <div className="my-2">
      <h2>Our Dishes:</h2>
      {state.dishes.length ? (
        <div className="flex-row">
          {filterDishes().map((dish) => (
            <MenuItem
              key={dish._id}
              _id={dish._id}
              image={dish.image}
              name={dish.name}
              price={dish.price}
              recommend={dish.recommend}
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
