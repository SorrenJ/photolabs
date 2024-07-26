import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist  = false  }) => {
  return (
    <div className='fav-badge'>
      {/* <FavIcon displayAlert={!!isFavPhotoExist}/> */}
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavPhotoExist}/>
    </div>
  ) 
};


export default FavBadge;