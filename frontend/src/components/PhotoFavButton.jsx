import React, { useCallback, useState } from 'react';
// import { useState } from "react";


import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
 
  const { favorite, switchFavorite } = props;



  const handleClick = () => {
    switchFavorite();
   
  };

 
  return (
    <div className="photo-list__fav-icon">
    <div className="photo-list__fav-icon-svg" onClick={switchFavorite}>
    <FavIcon selected={favorite === 'on'} />
  </div>
  </div>
  );
}

export default PhotoFavButton;