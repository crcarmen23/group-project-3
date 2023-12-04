import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_MENU_ITEMS,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_MENU_ITEMS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { menuItems } = state;

  const { loading, data: menuData, error } = useQuery(QUERY_MENU_ITEMS);
  if(error) {
    console.log('ERRORRRR '+error);
  }

  useEffect(() => {
    if (menuData) {
      dispatch({
        type: UPDATE_MENU_ITEMS,
        menuItems: menuData.menuItems,
      });
      menuData.menuItems.forEach((category) => {
        idbPromise('menuItems', 'put', category);
      });
    } else if (!loading) {
      idbPromise('menuItems', 'get').then((menuItems) => {
        dispatch({
          type: UPDATE_MENU_ITEMS,
          menuItems: menuItems,
        });
      });
    }
  }, [menuData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Menu Item:</h2>
      {/* {menuItems.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))} */}
      <button onClick={() => { handleClick('') }}>
        All
      </button>
    </div>
  );
}

export default CategoryMenu;
