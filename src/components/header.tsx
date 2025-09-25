import { Link, NavLink } from "react-router-dom";
import MenuSvg from '../assets/Menu.svg';

function Header() {
  return (
    <>
      <nav className="navbar container navbar-grid-12">
        <div className="nav-brand">
          <div className="nav_name">
            <p><strong>Meul</strong>meester</p>
          </div>
        </div>

        <div className="nav-left">
          <div className="nav_links cluster" style={{ ['--gap' as any]: 'var(--space-5)' }}>
            <NavLink className="home_button_link" to="/">Home</NavLink>
            <NavLink className="Defauld_button_link" to="/menu">My work</NavLink>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav_links cluster" style={{ ['--gap' as any]: 'var(--space-5)' }}>
            <NavLink className="Defauld_button_link" to="/menu">Experience</NavLink>
            <NavLink className="Defauld_button_link" to="/menu">About me</NavLink>
          </div>
        </div>

        <div className="nav-actions">
          <img className="menu_logo" src={MenuSvg} alt="Menu" />
          <Link className="home_button_link" to="/dashboard">Login</Link>
        </div>
      </nav>
    </>
  );
}       
export default Header;
