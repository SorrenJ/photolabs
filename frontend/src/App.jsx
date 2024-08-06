import React from 'react';
import PhotoDetailsModal from "./routes/PhotoDetailsModal"
import HomeRoute from './routes/HomeRoute'
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {

    // Import the useApplicationData function
    const { state, favorites, toggleFavorite, openModal, closeModal, selectedPhoto, displayModal, setTopic } = useApplicationData();

// Declare new variables from the state object
    const photos = state && state.photoData; // state allows for null values
    const topics = state && state.topicData;

    return (

        <div className="App">
            <HomeRoute photos={photos} topics={topics} favorites={favorites} toggleFavorite={toggleFavorite} openModal={openModal} setTopic={setTopic} />
            {displayModal && selectedPhoto && (<PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} favorites={favorites} toggleFavorite={toggleFavorite} />)};
        </div>
    );
};


export default App;