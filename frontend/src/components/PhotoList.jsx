import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import displayModal from "../routes/HomeRoute"
import { useState } from "react";


const PhotoList = (props) => {

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    // console.log("you clicked on a photo", photo.id);
    setSelectedPhoto(photo);
    // displayModal=true;
  };

  // sets the useState back to the default
  const closeModal = () => {
    setSelectedPhoto(null);
    // displayModal=false;
  };

  return (
    <div>
    <ul className="photo-list">
      {props.photos.map(photo => (
        <PhotoListItem key={photo.id} 
        photo={photo} 
        favorited={props.favorites.includes(photo.id)} 
        toggleFavorite={props.toggleFavorite}
        onClick={handlePhotoClick}
        displayModal={displayModal}
        />
      ))}
    </ul>

    {selectedPhoto && (
        <PhotoDetailsModal 
          photo={selectedPhoto}
          onClose={closeModal}
        />
      )}

    </div>
  );
};

export default PhotoList;
 