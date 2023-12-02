import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as destinationService from "../../services/destinationService";

export default function Destination() {
  const [destination, setDestination] = useState({});
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await destinationService.getOne(pathName);
        setDestination(response);
      } catch (error) {
        console.error('Error fetching destination:', error);
      }
    };

    fetchDestinations();
  }, [pathName]);

  // Check if currentDestinationPlaces is an array before mapping
  const currentDestinationPlaces = Array.isArray(destination.places)
    ? destination.places
    : [];

  return (
    <>
      <div className="center">
        {currentDestinationPlaces.length > 0 ? (
          currentDestinationPlaces.map((currentDestination) => (
            <div className="article-card" key={currentDestination.name}>
              <div className="content">
                <p className="title">{currentDestination.name}</p>
                <Link to={{ pathname: `/comments` }}>
                  View comments<i className="arrow right"></i>
                </Link>
              </div>
              <img src={currentDestination.image} alt="article-cover" />
            </div>
          ))
        ) : (
          <p>No places found for this country.</p> 
        )}
      </div>
    </>
  );
}