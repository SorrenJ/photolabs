import React from 'react';

import TopNavigationBar from "../components/TopNavigationBar"
import PhotoList from "../components/PhotoList"
import "../styles/HomeRoute.scss"


import { useState } from "react";
import PhotoFavButton from "../components/TopNavigationBar"
import photos from "../mocks/photos";
import topics from "../mocks/topics";

const HomeRoute = () => {
  
  //const [favorite, setFavorite] = useState('off');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) =>{
    console.log("Toggle favorites", photoId)
if (favorites.includes(photoId)){
 setFavorites(favorites.filter((id) => id !== photoId)) //removes existing favorite, not match is kept
} else { // if its not in favorites
  setFavorites( [...favorites, photoId]); // adding photoId to favorites array
}

  };
  return (
    <div className="home-route">
<TopNavigationBar topics={topics}/>
<PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite}/>
</div>
  );
};

export default HomeRoute;