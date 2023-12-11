import "./destinations.modules.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as destinationService from '../../services/destinationService'

export default function Destinations() {

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await destinationService.getAll();
        setDestinations(response);

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
                <div className="article-card" key={destination.country}>
                <div className="content">
                  <p className="title">{destination.country}</p>
                  <Link to={{ pathname: `/destinations/${destination._id}`}}>View places<i className="arrow right"></i></Link>
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