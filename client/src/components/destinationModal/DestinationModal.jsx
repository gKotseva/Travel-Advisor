import { useState, useEffect } from 'react';
import * as bucketService from '../../services/bucketService'


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

  async function handleBucketList(){ 
    let user = JSON.parse(localStorage.getItem('user'))
    let response = await bucketService.addToBucket({currentPlace, user});
    console.log(response)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          CLOSE
        </span>
        <p className='paragraphName'>{currentPlace.name}</p>
        <div className='line' />
        <img src={currentPlace.image} alt="article-cover" className='imagePlace'/>
        <div className='modal-description-content'>
          <p className='paragraphDescription'>{currentPlace.description}</p>
          <input type="button" value="Add to my bucket list" className='bucketList-btn' onClick={handleBucketList}></input>
        </div>
      </div>
    </div>
  );
}