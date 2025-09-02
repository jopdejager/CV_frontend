import { Link, NavLink } from "react-router-dom";
import MenuSvg from '../assets/Menu.svg';

function Header() {
  return (
    <>
      <nav className='navbar'>

        <div className="col-10"></div>

        <div className="col-15">
          <div className="nav_name">
            <p><strong>Meul</strong>meester</p>
          </div>
        </div>

        <div className="col-25 nav-left-links">
          <div className="nav_links right-align">
            <NavLink className="home_button_link" to="/">Home</NavLink>
            <NavLink className="Defauld_button_link" to="/menu">My work</NavLink>
          </div>
        </div>

        <div className="col-25 nav-right-links">
          <div className="nav_links left-align">
            <NavLink className="Defauld_button_link" to="/menu">Experience</NavLink>
            <NavLink className="Defauld_button_link" to="/menu">About me</NavLink>
          </div>
        </div>

        <div className="col-25 nav-login">
          <img className="menu_logo" src={MenuSvg} alt="Menu" />
          <Link className="home_button_link" to="/">Login</Link>
        </div>

      </nav>

    </>
  );
}
export default Header;
