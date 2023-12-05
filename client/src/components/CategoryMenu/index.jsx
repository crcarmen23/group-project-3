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

  console.log(menuData)


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

  const handleClick = (categoryId) => {
    dispatch({
      type: UPDATE_CURRENT_MENU,
      currentMenu: categoryId,
    });
  }

  console.log(menuItems)



  return (
    <div>
      <h2>Choose a Menu Item:</h2>
      {menuItems.map((category) => (

        <button key={category._id}onClick={() => handleClick(category._id)}>

          {category.name}
          
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
