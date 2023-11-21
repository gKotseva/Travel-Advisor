import './home.modules.css'


export default function Home() {

  return (
    <>
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">Travel </span>
          <span className="logo">Advisor.</span>
        </h1>
      </div>

      <div>
      <header>
        <div className="navMenu">
          <a href="#">Home</a>
          <a href="#">Destinations</a>
          <a href="#">My destinations</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">Logout</a>
          <div className="dot"></div>
        </div>
      </header>
      </div>

      <div className="home">
        <img src="1.png" />
      </div>
     
    </>
  );
}
