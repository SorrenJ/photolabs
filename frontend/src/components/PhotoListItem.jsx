import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";
import "../styles/PhotoListItem.scss";


// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;
  const [favorite, setfavorite] = useState('off');
  const switchfavorite = () => setfavorite((favorite === "on") ? "off" : "on");

  return (
    <div>
 
    <div className="photo-list__item">
    <PhotoFavButton favorite={favorite} switchfavorite={switchfavorite} />
     
      <img className="photo-list__image" src={imageSource} alt="Sample" />
     
      <div className="photo-list__user-details">
     
        <img className="photo-list__user-profile" src={profile} alt="Profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PhotoListItem;
