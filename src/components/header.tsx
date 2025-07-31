import { Link } from "react-router-dom";
import MenuSvg from '../assets/Menu.svg';
function Header() {
  return (
    <>
    <head>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
    </head>
      <nav className='navbar'>
        <div className='col-10'>
          </div>
          <div className='col-15'>
            <div className='nav_name'>
              <p><strong>Meul</strong>meester</p>
            </div>
          </div>
          <div className='col-50'>
            <div className='col'>
              <Link className="home_button_link" to="/">Home</Link>
              <Link className="Defauld_button_link" to="/menu">My work</Link>
              <Link className="Defauld_button_link" to="/menu">Experience</Link>
              <Link className="Defauld_button_link" to="/menu">About me</Link>
              </div>

            </div>
          <div className='col-25'>
            <div className='col'>
              <img className="Menu_logo" src={MenuSvg} alt="Menu"/>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M3.5 7H27.5C27.8978 7 28.2794 6.84196 28.5607 6.56066C28.842 6.27936 29 5.89782 29 5.5C29 5.10218 28.842 4.72064 28.5607 4.43934C28.2794 4.15804 27.8978 4 27.5 4H3.5C3.10217 4 2.72065 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5C2 5.89782 2.15804 6.27936 2.43934 6.56066C2.72065 6.84196 3.10217 7 3.5 7ZM13.5 16H27.5C27.8978 16 28.2794 15.842 28.5607 15.5607C28.842 15.2794 29 14.8978 29 14.5C29 14.1022 28.842 13.7206 28.5607 13.4393C28.2794 13.158 27.8978 13 27.5 13H13.5C13.1022 13 12.7206 13.158 12.4393 13.4393C12.158 13.7206 12 14.1022 12 14.5C12 14.8978 12.158 15.2794 12.4393 15.5607C12.7206 15.842 13.1022 16 13.5 16Z" fill="#424241"/>
            </svg> */}
              <Link className="home_button_link" to="/">login</Link>
              </div>
            {/* <div className='nav_links'>
              <ul className='nav_link'>
                <li>
                  <a className="test" href="https://panel.jopus.me" >panel</a>
                </li>
                <li>
                  <Link to="/menu">menu</Link>
                </li>
              </ul>
            </div> */}
          </div>
      </nav>
    </>
  );
}
export default Header;