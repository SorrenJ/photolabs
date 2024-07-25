import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";
import "../styles/PhotoListItem.scss";


// const sampleDataForPhotoListphoto = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = ({photo, favorited, toggleFavorite}) => {

  // const [favorite, setFavorite] = useState('off');
  // const switchFavorite = () => setFavorite((favorite === "on") ? "off" : "on");

  return (
    <li className="photo-list__item">
      <div className="photo-list__photo">
        <PhotoFavButton favorited={favorited} toggleFavorite={toggleFavorite} photoId={photo.id}/>
       
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
