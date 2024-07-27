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
 
  const [displayModal, setDisplayModal] = useState(false);
 
  return (
    <div className="App">
  <HomeRoute photos={photos} topics={topics} displayModal={displayModal}/>
  {displayModal && <PhotoDetailsModal onClose={() => setDisplayModal(false)} />}
    </div>
  );
};

export default App;
