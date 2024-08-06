import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, favorites, toggleFavorite, onPhotoClick }) => {


    return (

        <ul className="photo-list">

            {/* allows photo array to be null */}
            {photos && photos.map(photo => (

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
