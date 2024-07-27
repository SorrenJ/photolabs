import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({photo, onClose}) => {
  console.log("User name: "+ photo.user.name);
  console.log("User city: "+ photo.location.city);
  console.log("User country: "+ photo.location.country);
  

  const similarPhotos = photo.similar_photos;
  console.log("Similar photo 2 ID: " + similarPhotos.photo2.id);
  console.log("Similar photo 3 ID: " + similarPhotos.photo3.id);
  console.log("Similar photo 4 ID: " + similarPhotos.photo4.id);
  console.log("Similar photo 5 ID: " + similarPhotos.photo5.id);
 
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
  
    </div>
    
  );

};

export default PhotoDetailsModal;
