import Header from "../components/header";
import { Link } from "react-router-dom";
import Jop from '../assets/jopv4.png';
function Home() {
  return (
    <>
      <Header />
      <div className='container_home_page'>

        <div className="col-10"></div>
        <div className="col-40 col-content">
          <div className="qoute">
            <h1 className="qoute_text">Skilled IT specialist solving complex problems</h1>
          </div>
          <div className="text_vlak_home_page">
            <a>My name is Jop Meulmeester, and I’m </a>
            <a> starting my career as a System Engineer.</a>
          </div>
          <div className="checkout">
            <Link className="checkout_button" to="/menu">Check out my work</Link>
            </div>
            <div className="info_experience row"></div>
            <h1>1+</h1>
          </div>

        <div className='col_50_home_image'>
          <div className="circle-bg">
            <h1 className="big-text">Meulmeester</h1>
              <img className="logo_jop" src={Jop} alt="Menu"/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;