import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className='navbar'>
          <div className='col-30, col'>
            <div className='nav_name'>
              <p> meulmeester </p>
            </div>
          </div>
          <div className='col-40 col'>
            </div>
          <div className='col-30, col'>
            <div className='nav_links'>
              <ul className='nav_link'>
                <li>
                  <a className="test" href="https://panel.jopus.me" >panel</a>
                </li>
                <li>
                  <Link to="/menu">menu</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  );
}
export default Header;