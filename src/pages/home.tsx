import '../styles/home.css'
import JopImg from '../assets/Jopv4.png'

function Home() {
	return (
		<main className="container-full">
			<section className="fullscreen hero-section">
				<div className="container grid hero-grid" style={{ ['--cols' as any]: 12 }}>
					<div className="hero-left">
					<div className="qoute">
						<h1 className="qoute_text">Skilled IT specialist solving complex problems</h1>
					</div>
					<div className="text_vlak_home_page">
						<span>My name is Jop Meulmeester, and I’m </span>
						<span> starting my career as a System Engineer.</span>
					</div>
					<div className="checkout">
						<a className="checkout_button" href="#work">Check out my work</a>
					</div>
					<div className="container_experience">
						<div className="blok_job_experience">
							<div className="getal_job_experience">
								<h1>1+</h1>
							</div>
							<div className="text_job_experience">
								<h1>Job experience</h1>
							</div>
						</div>
						<div className="blok_job_experience">
							<div className="getal_job_experience">
								<h1>5+</h1>
							</div>
							<div className="text_job_experience">
								<h1>Years practicing IT</h1>
							</div>
						</div>
						<div className="blok_job_experience">
							<div className="getal_job_experience">
								<h1>3+</h1>
							</div>
							<div className="text_job_experience">
								<h1>Years Experience</h1>
							</div>
						</div>
					</div>
					</div>
					<div className="hero-right">
						<div className="circle-bg" />
						<h1 className="big-text">Meulme</h1>
						<img className="logo_jop" src={JopImg} alt="Jop Meulmeester" />
					</div>
        	</div>
			</section>
		</main>
	)
}

export default Home
