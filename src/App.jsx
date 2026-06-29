import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="src/ChatGPT Image Jun 2, 2026, 09_03_24 AM.png" alt="Logo" />
          <h2>Rajput Web Solution</h2>
        </div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="src/WhatsApp Image 2026-06-05 at 01.03.45.jpeg" alt="Ather" className="profile-img" />

          <h1>Hi, I'm Ather</h1>
      <br />
          <h3>Founder of Rajput Web Solution</h3>

          <p>
            We build modern, responsive and high-quality websites
            for businesses worldwide.
          </p>

          <a href="https://rajput-web-solution.netlify.app/">
  <button>Hire Us</button>
</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Us</h2>

        <p>
          Rajput Web Solution is a web development company specializing in
          business websites, hotel websites, real estate websites,
          e-commerce stores and custom web applications.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="cards">

          <div className="card">
            <h3>Web Development</h3>
            <p>Modern responsive websites.</p>
          </div>

          <div className="card">
            <h3>E-Commerce</h3>
            <p>Online stores with modern UI.</p>
          </div>

          <div className="card">
            <h3>Chatbot Development</h3>
            <p>Business automation solutions.</p>
          </div>

        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section">
        <h2>Our Projects</h2>

        <div className="cards">

          <div className="card">
            <a href="https://hottel-app.netlify.app/">
            <h3>Hotel Website</h3>
            </a>
          </div>

          <div className="card">
             <a href="https://my-potfolio-ap.netlify.app/">
            <h3>My Portfolio</h3>
            </a>
          </div>

          <div className="card">
            <a href="https://mobile-shop3.netlify.app/">
            <h3>Mobil  Website</h3>
            </a>
          </div>

            <div className="card">
            <a href="https://rajput-web-solution.netlify.app/">
            <h3>My Company Web site</h3>
            </a>
          </div>


        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <p>Email: a.ngaming102734@gmail.com</p>
        <p>Phone: +923232831959</p>

        <div className="socials">
          <a href="https://www.linkedin.com/in/rajput-web-solutions-51710b388/">LinkedIn</a>
          <a href="https://www.instagram.com/atherali552/?hl=en">Instagram</a>
          <a href="www.youtube.com/@RajputWebSolution">Youtube</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Rajput Web Solution. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;