import "./destinations.modules.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Destinations() {

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/destinations');

        if(!response.ok){
          throw new Error(`Internal server error!`)
        }

        const data = await response.json()
        console.log(data)
        setDestinations(data);

      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <>
      <div className="center">
        {destinations.map((destination) => 
                <div className="article-card">
                <div className="content">
                  <p className="title">{destination.country}</p>
                  <Link to="/">View places<i className="arrow right"></i></Link>
                </div>
                <img
                  src={destination.imageUrl}
                  alt="article-cover"
                />
              </div>
        )}
      </div>
    </>
  );
}