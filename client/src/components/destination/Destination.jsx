import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import * as destinationService from "../../services/destinationService";
import DestinationModal from "../destinationModal/DestinationModal";

export default function Destination() {
  const [destination, setDestination] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [destinationName, setDestinationName] = useState("");
  const [places, setPlaces] = useState({});
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await destinationService.getOne(pathName);
        setDestination(response);
      } catch (error) {
        console.error("Error fetching destination:", error);
      }
    };

    fetchDestinations();
  }, [pathName]);

  const currentDestinationPlaces = Array.isArray(destination.places)
    ? destination.places
    : [];

  const openModal = (destinationTitle) => {
    setDestinationName(destinationTitle)
    setPlaces(destination.places);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="center">
        {currentDestinationPlaces.length > 0 ? (
          currentDestinationPlaces.map((currentDestination) => {
            const destinationTitle = currentDestination.name;
            return (
              <div className="article-card" key={destinationTitle}>
                <div className="content">
                  <p className="title">{destinationTitle}</p>
                  <Link onClick={() => openModal(destinationTitle)}>View description<i className="arrow right"></i></Link>
                </div>
                <img src={currentDestination.image} alt="article-cover" />
              </div>
            );
          })
        ) : (
          <p>No places found for this country.</p>
        )}
      </div>
      <DestinationModal isOpen={isModalOpen} onClose={closeModal} places={places} destinationName={destinationName} />
    </>
  );
}