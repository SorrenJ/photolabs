import React from 'react';
import { useState } from "react";
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from "./components/TopicList";
import TopNavigationBar from './components/TopNavigationBar';
import PhotoFavButton from './components/PhotoFavButton';
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal"
import HomeRoute from './routes/HomeRoute'
import './App.scss';

  
  
  

const App = () => {

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


 return (

<div className="App">
 <HomeRoute photos={photos} topics={topics} favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} />

{displayModal && selectedPhoto && ( <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} favorites={favorites} toggleFavorite={toggleFavorite} />)};
</div>
);

};

  

export default App;