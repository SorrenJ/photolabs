import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

  

function PhotoFavButton({ favorited, toggleFavorite, photoId }) {

// handler for user favoriting 
const handleClick = () => {
toggleFavorite(photoId);

 };
 
return (
// Fav button start
 <div className="photo-list__fav-icon"> 

 {/* // heart icon start */}
 <div className="photo-list__fav-icon-svg" onClick={handleClick}>
 <FavIcon selected={favorited} />
 </div>

</div>
// Fav button end
 );

}

  

export default PhotoFavButton;
