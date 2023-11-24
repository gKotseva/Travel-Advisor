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
            <p className="title">Bulgaria</p>
            <Link to="/">View places<i className="arrow right"></i></Link>
          </div>
          <img
            src="https://media.istockphoto.com/id/1182393363/photo/alexander-nevsky-cathedral-in-sofia-bulgaria-taken-in-may-2019-taken-in-hdr.jpg?s=612x612&w=0&k=20&c=pxdKXGCg5wnU1cpK-0em0FAISx0aV5o18l2FaU5u94M="
            alt="article-cover"
          />
        </div>
        <div className="article-card">
          <div className="content">
            <p className="title">Spain</p>
            <Link to="/">View places<i className="arrow right"></i></Link>
          </div>
          <img
            src="https://media.istockphoto.com/id/464975554/photo/toledo-spain.jpg?s=612x612&w=0&k=20&c=MlWOs6-Gn0W8BbKBewRAEE_T01-KCDMa5JhH5sfBIiw="
            alt="article-cover"
          />
        </div>
      </div>
    </>
  );
}
