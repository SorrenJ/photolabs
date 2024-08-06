import React, { useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar"
import PhotoList from "../components/PhotoList"


const HomeRoute = ({ photos, topics, favorites, toggleFavorite, openModal, setTopic }) => {

    return (
        <div className="home-route">
            <TopNavigationBar
                topics={topics}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                isFavPhotoExist={favorites.length > 0}
                setTopic={setTopic}
            />

            <PhotoList
                photos={photos}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                onPhotoClick={openModal} />
        </div>
    );
};

export default HomeRoute;
