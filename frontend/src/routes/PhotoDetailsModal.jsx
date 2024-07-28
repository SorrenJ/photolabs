import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import photos from "../mocks/photos";
import { useState } from "react";
import PhotoFavButton from 'components/PhotoFavButton';
const PhotoDetailsModal = ({ photo, onClose }) => {

  // const similarPhotos = photo?.similar_photos;
  // const valuesArray = Object?.values(similarPhotos)|| []; 

  // const similarPhotos = Object.values(photo.similar_photos);
 
  const similarPhotos = photo && photo.similar_photos ? Object.values(photo.similar_photos) : [];
  const [favorites, setFavorites] = useState([]); 

  // const toggleFavorite = (valuesArray) => {
  //   if (favorites.includes(valuesArray)) {
  //     setFavorites(favorites.filter((id) => id !== valuesArray)); // Remove existing favorite
  //   } else {
  //     setFavorites([...favorites, valuesArray]); // Add photoId to favorites
  //   }
  // };

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter((id) => id !== photoId)); // Remove existing favorite
    } else {
      setFavorites([...favorites, photoId]); // Add photoId to favorites
    }
  };
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
  <div className="photo-details-modal__images">


      <img
          className="photo-details-modal__image"
          src={photo.urls.regular}
          alt={`Photo by ${photo.user.name}`}
        />
      <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`Profile of ${photo.user.username}`}
          />
        <div className="photo-details-modal__photographer-info">
          <p>{photo.user.name}</p>
          <p className="photo-details-modal__photographer-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
   
    </div>
    <div>
        <span className='photo-details-modal__top-bar '>
          <div className ="photo-details-modal__header">
            Similar Photos</div>
        </span>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList photos={similarPhotos} favorites={favorites} toggleFavorite={toggleFavorite}/>
        </div>
      
  </div>
  
    
  );

};

export default PhotoDetailsModal;
