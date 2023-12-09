import { useEffect, useState } from "react";
import "./profile.modules.css";

import * as bucketService from '../../services/bucketService'


export default function Profile() {
    const user = JSON.parse(localStorage.getItem('user'))

    const [bucketList, setBucketList] = useState([])
    const [visited, setVisited] = useState([])
    const [documentID, setDocumentId] = useState('')

    useEffect(() => {
        const fetchBucketList = async () => {
          try {
            const response = await bucketService.getAllItemsPerUser(user.email);
            setBucketList(response.bucketList)
            setVisited(response.visited)
            setDocumentId(response._id)
          } catch (error) {
            console.error("Error fetching destination:", error);
          }
        };
    
        fetchBucketList();
      }, []);

      async function addToVisitedHandler(name) {
        const itemClicked = bucketList.find((v) => v.name === name);
        
        setVisited((prevVisited) => [...prevVisited, itemClicked]);
        setBucketList((prevBucketList) => prevBucketList.filter((value) => value.name !== name));

        await bucketService.addToVisited({currentPlace: itemClicked, user});
        await bucketService.removeFromBucket({name, documentID})
      }

      async function removeFromBucketList(name){
        setBucketList((prevBucketList) => prevBucketList.filter((value) => value.name !== name));

        await bucketService.removeFromBucket({name, documentID})

      }

      async function removeFromVisited(name){
        const itemClicked = visited.find((v) => v.name === name);

        setBucketList((prevVisited) => [...prevVisited, itemClicked]);
        setVisited((prevBucketList) => prevBucketList.filter((value) => value.name !== name));

        await bucketService.removeFromVisited({name, documentID})
        await bucketService.addToBucket({currentPlace: itemClicked, user});
      }

    return (
        <>
        <div className="profile">
            <h1>Welcome back, <p className="welcomeUser">{user.firstName} &#9995;</p></h1>
            <div className="welcome">
              <p> I hope you are excited as we are! <br /> Here will find all of the destinations you want to visit and the ones you have already been to!</p>
            </div>
            <h2>Destinations you've visited &#128522;</h2>
            <div className="centerBucketList">
        {visited.length > 0 ? (
          visited.map((list) => {
            const destinationTitle = list.name;
            return (
              <>
              <div className="bucketList-card" key={destinationTitle}>
                <div className="bucketList-content">
                  <p className="bucketList-title">{destinationTitle}</p>
                </div>
                <img src={list.image} alt="article-cover" />
              </div>
              <button className="button-1" role="button" onClick={() => removeFromVisited(destinationTitle)}>REMOVE</button>
              </>
            );
          })
        ) : (
          <div className="noDestinations">
            <img src="./homeImages/sad-suitcase.png" className="imagesuitcase"/>
            <p>You have not visited any destinations!</p>
          </div>
        )}
      </div>
        </div>
        <div className="bucketList">
  <h1 className="paragraphNameBucket">Your bucket list</h1>
  <div className="centerBucketList">
    {bucketList.length > 0 ? (
      bucketList.map((list) => {
        const destinationTitle = list.name;
        return (
          <div className="bucketList-item" key={destinationTitle}>
            <div className="bucketList-card">
              <div className="bucketList-content">
                <p className="bucketList-title">{destinationTitle}</p>
              </div>
              <img src={list.image} alt="article-cover" />
            </div>
            <div className="weather">
              
            </div>
            <div className="button-container">
              <button
                className="button-1"
                role="button"
                onClick={() => addToVisitedHandler(destinationTitle)}
              >
                ADD TO VISITED
              </button>
              <button
                className="button-2"
                role="button"
                onClick={() => removeFromBucketList(destinationTitle)}
              >
                REMOVE
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <div className="noDestinations">
        <img src="./homeImages/sad-suitcase.png" alt="Sad suitcase" className="imagesuitcase"/>
        <p>No destinations added to your bucket list!</p>
      </div>
    )}
  </div>
</div>
        </>
    )
}