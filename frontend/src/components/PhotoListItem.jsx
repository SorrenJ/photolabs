import React from "react";

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

  return (
    <div>
      <h1>{username}</h1>
      <p>ID: {id}</p>
      <p>Location: {location.city}, {location.country}</p>
      <img src={imageSource} alt="Sample" />
      <img src={profile} alt="Profile" />
    </div>
  );
};

export default PhotoListItem;
