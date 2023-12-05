import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_MENU_ITEMS,
  UPDATE_CURRENT_MENU,
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
      menuData.menuItems.forEach((menu) => {
        idbPromise('menuItems', 'put', menu);
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

  const handleClick = (categoryName) => {
    dispatch({
      type: UPDATE_CURRENT_MENU,
      currentMenu: categoryName,
    });
  };

  const uniqueCategories = Array.from(new Set(menuItems.map(item => item.name)));


  return (
    <div>
      <h2>Choose a Menu Item:</h2>
      {uniqueCategories.map((category) => (
        <button
          key={category._id}
          onClick={() => handleClick(category._id)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
