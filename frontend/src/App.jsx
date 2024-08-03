import React from 'react';
import { useState } from "react";
 import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from "./components/TopicList";
import TopNavigationBar from './components/TopNavigationBar';
import PhotoFavButton from './components/PhotoFavButton';
// import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal"
import HomeRoute from './routes/HomeRoute'
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
  
const App = () => {

const { state, favorites, toggleFavorite, openModal, closeModal, selectedPhoto, displayModal } = useApplicationData();
 

const photos = state && state.photoData;
// const topics = state.topicData;
return (

<div className="App">
 <HomeRoute photos={photos} topics={topics} favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} />

{displayModal && selectedPhoto && ( <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} favorites={favorites} toggleFavorite={toggleFavorite} />)};
</div>
);

};

export default App;