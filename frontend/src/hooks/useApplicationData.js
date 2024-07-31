import React from 'react';
import { useState } from "react";


// Our useApplicationData Hook will return an object with four keys representing the following items:

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.


const useApplicationData = () => {
    const [favorites, setFavorites] = useState([]);
    const [displayModal, setDisplayModal] = useState(false); 
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    
    
    const toggleFavorite = (photoId) => { 
    if (favorites.includes(photoId)) { 
    setFavorites(favorites.filter((id) => id !== photoId)); // Remove existing favorite 
    } else { setFavorites([...favorites, photoId]); // Add photoId to favorites 
    } 
    }; 
    const openModal = (photo) => { 
    setSelectedPhoto(photo); 
    setDisplayModal(true);
    }; 
    const closeModal = () => { 
    setSelectedPhoto(null); 
    setDisplayModal(false);
    };
  


    return { favorites, toggleFavorite, openModal, closeModal, selectedPhoto, displayModal }
};

export default useApplicationData;