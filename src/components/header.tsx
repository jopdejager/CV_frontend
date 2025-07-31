import { Link } from "react-router-dom";
import MenuSvg from '../assets/Menu.svg';

function Header() {
  return (
    <>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      </head>
      <nav className='navbar'>

        <div className="col-10"></div>

        <div className="col-15">
          <div className="nav_name">
            <p><strong>Meul</strong>meester</p>
          </div>
        </div>

        <div className="col-25 nav-left-links">
          <div className="nav_links right-align">
            <Link className="home_button_link" to="/">Home</Link>
            <Link className="Defauld_button_link" to="/menu">My work</Link>
          </div>
        </div>

        <div className="col-25 nav-right-links">
          <div className="nav_links left-align">
            <Link className="Defauld_button_link" to="/menu">Experience</Link>
            <Link className="Defauld_button_link" to="/menu">About me</Link>
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
