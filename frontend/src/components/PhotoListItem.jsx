import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({photo, favorited, toggleFavorite, onClick, displayModal}) => {

  return (
    <li className="photo-list__item" onClick={() => onClick(photo)}> 
      <div className="photo-list__photo">
        <PhotoFavButton 
        favorited={favorited} 
        toggleFavorite={toggleFavorite} 
        photoId={photo.id} />
       
        <img className="photo-list__image" src={photo.urls.regular} alt={`Photo by ${photo.user.name}`} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photo.user.profile} alt={`Profile of ${photo.user.name}`} />
          <div className="photo-list__user-info">
            <p>{photo.user.name}</p>
            <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default PhotoListItem;
