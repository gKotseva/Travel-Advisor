import "./destinations.modules.css";
import { Link } from "react-router-dom";

export default function Destinations() {
  return (
    <>
      <div className="center">
        <div className="article-card">
          <div className="content">
            <p className="title">Iceland</p>
            <Link to="/">View places<i className="arrow right"></i></Link>
          </div>
          <img
            src="https://www.nationsonline.org/gallery/World/island-countries.jpg"
            alt="article-cover"
          />
        </div>
        <div className="article-card">
          <div className="content">
            <p className="title">Iceland</p>
            <Link to="/">View places<i className="arrow right"></i></Link>
          </div>
          <img
            src="https://www.nationsonline.org/gallery/World/island-countries.jpg"
            alt="article-cover"
          />
        </div>
        <div className="article-card">
          <div className="content">
            <p className="title">Iceland</p>
            <Link to="/">View places<i className="arrow right"></i></Link>
          </div>
          <img
            src="https://www.nationsonline.org/gallery/World/island-countries.jpg"
            alt="article-cover"
          />
        </div>
      </div>
    </>
  );
}
