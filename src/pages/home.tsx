import Header from "../components/header";
function Home() {
  return (
    <>
      <Header />
      <div className='container_home_page'>
        <div className='col-50 background-red'>
          <div className="Main_name">
            <h1> jop</h1>
            <h1> meulmeester</h1>
          </div>
        </div>
        <div className='col-50 background-green'>
          <p>This is the home page of my websit.</p>
        </div>
      </div>
    </>
  );
}
export default Home;