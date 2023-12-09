import { useState, useEffect, useContext } from 'react';
import * as bucketService from '../../services/bucketService'
import { AuthContext } from '../contexts/authContext'


import './destinationModal.modules.css';
import { useNavigate } from "react-router-dom";


export default function DestinationModal({ isOpen, onClose, destinationName, places }) {

  const {isAuthenticated} = useContext(AuthContext)

  const navigate = useNavigate()
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

  async function checkBucketList(){
    let user = JSON.parse(localStorage.getItem('user'))

    if(user){
      let email = user.email
      await bucketService.getAllItemsPerUser(email)
    }


  }
  checkBucketList()

  async function handleBucketList(){ 
    let user = JSON.parse(localStorage.getItem('user'))
    await bucketService.addToBucket({currentPlace, user});
    navigate(-1)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
        &#10005;
        </span>
        <p className='paragraphName'>{currentPlace.name}</p>
        <div className='line' />
        <img src={currentPlace.image} alt="article-cover" className='imagePlace'/>
        <div className='modal-description-content'>
          <p className='paragraphDescription'>{currentPlace.description}</p>
          {isAuthenticated && (
            <>
            <input type="button" value="Add to my bucket list" className='bucketList-btn' onClick={handleBucketList}></input>
            </>
          )}
        </div>
      </div>
    </div>
  );
}