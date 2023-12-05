import { useState, useEffect } from 'react';

import './destinationModal.modules.css';

export default function DestinationModal({ isOpen, onClose, destinationName, places }) {
  const [currentPlace, setCurrentPlace] = useState(null);

  useEffect(() => {
    if (Array.isArray(places) && places.find) {
      const foundPlace = places.find((place) => place.name === destinationName);
      setCurrentPlace(foundPlace);
    } else {
      setCurrentPlace(null);
    }
  }, [destinationName, places]);

  if (!isOpen || !currentPlace) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          [Close]
        </span>
        <p className='paragraphName'>{currentPlace.name}</p>
        <img src={currentPlace.image} alt="article-cover" className='imagePlace'/>
        <p className='paragraphDescription'>Description: {currentPlace.description}</p>
      </div>
    </div>
  );
}