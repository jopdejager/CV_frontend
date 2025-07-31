import Header from "../components/header";
import Jop from '../assets/jopv4.png';
function Home() {
  return (
    <>
      <Header />
      <div className='container_home_page'>

        <div className="col-10"></div>
        <div className="col-40 col-content">
          <div className="qoute">
            <h1>Skilled IT specialist solving complex problems</h1>
          </div>
          <div className="home_page_"></div>
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