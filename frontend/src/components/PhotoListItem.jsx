import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, favorited, toggleFavorite, onClick }) => {

return (
 <li className="photo-list__item" >

{/* // fav button for each photo */}
 <PhotoFavButton
 favorited={favorited}
 toggleFavorite={toggleFavorite}
 photoId={photo.id} />
 {/* // fav button end*/}

 <img className="photo-list__image" src={photo.urls.regular} alt={`Photo by ${photo.user.name}`} onClick={() => onClick(photo)}/>
 <div className="photo-list__user-details">
 <img className="photo-list__user-profile" src={photo.user.profile} alt={`Profile of ${photo.user.name}`} />
 <div className="photo-list__user-info">
 <p>{photo.user.name}</p>
  <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
 </div>
 </div>
 </li>

 );
};

export default PhotoListItem;

