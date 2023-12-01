import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-end">
          <li className="mx-1 navbar-item is-size-3">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 navbar-item is-size-3">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1 navbar-item is-size-3">
            <Link to="/menu">
              Menu
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 className="headerTitle ml-5">
        <Link to="/">
          La Dolce Vita
        </Link>
      </h1>

      <nav className="navbar-end navBar">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
