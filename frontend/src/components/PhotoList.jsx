import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import displayModal from "../routes/HomeRoute"
import { useState } from "react";

  
  
const PhotoList = ({ photos, favorites, toggleFavorite, onPhotoClick }) => {


 return (

 
<ul className="photo-list">
 {photos.map(photo => (
 <PhotoListItem 
key={photo.id}
photo={photo}
favorited={favorites.includes(photo.id)}
toggleFavorite={toggleFavorite}
onClick={onPhotoClick}
 />

 ))}

 </ul>


 );

};

  

export default PhotoList;
 