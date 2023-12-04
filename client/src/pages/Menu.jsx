import MenuList from "../components/MenuList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Menu = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <MenuList />
      <Cart />
    </div>
  );
};
export default Menu;