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
            <div className="container_experience">
            <div className="blok_job_experience">
              <div className="getal_job_experience">
                <h1>1+</h1>
            </div>
              <div className="text_job_experience">
                <h1>job experience</h1>
              </div>
          </div>  
          <div className="blok_job_experience">
            <div className="getal_job_experience">
              <h1>5+</h1>
            </div>
            <div className="text_job_experience">
              <h1>Years Experience</h1>
            </div>
          </div>
          <div className="blok_job_experience">
            <div className="getal_job_experience">
              <h1>3+</h1>
            </div>
            <div className="text_job_experience">
              <h1>Years of IT experience</h1>
            </div>
          </div>
          </div>
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