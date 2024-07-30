import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

  

function PhotoFavButton({ favorited, toggleFavorite, photoId }) {



const handleClick = () => {
toggleFavorite(photoId);

 };

  
return (

 <div className="photo-list__fav-icon"> 
 <div className="photo-list__fav-icon-svg" onClick={handleClick}>
 <FavIcon selected={favorited} />

 </div>
</div>

 );

}

  

export default PhotoFavButton;
