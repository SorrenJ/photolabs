import React, { useState } from "react";
import TopNavigationBar  from "../components/TopNavigationBar"
import PhotoList  from "../components/PhotoList"
import photos from "../mocks/photos";
import topics from "../mocks/topics";
import displayModal from "App"

  

const HomeRoute = ({ photos, topics, favorites, toggleFavorite, openModal }) => {

 return ( 
 <div className="home-route">

<TopNavigationBar 
topics={topics} 
favorites={favorites} 
toggleFavorite={toggleFavorite} 
isFavPhotoExist={favorites.length > 0}/>

<PhotoList 
photos={photos} 
favorites={favorites} 
toggleFavorite={toggleFavorite} 
onPhotoClick={openModal}/>

</div>
 );
};


export default HomeRoute;
