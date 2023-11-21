import './home.modules.css'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">Travel </span>
          <span className="logo">Advisor.</span>
        </h1>
      </div>

      <div className="home">
        <img src="1.png" />
      </div>
     
    </>
  );
}
