import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onClose, favorites, toggleFavorite }) => {
  const similarPhotos = photo && photo.similar_photos ? Object.values(photo.similar_photos) : [];

  return (

    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
      <PhotoFavButton
         favorited={favorites.includes(photo.id)}
         toggleFavorite={toggleFavorite}
         photoId={photo.id}
 />
        <img
          className="photo-details-modal__image"
          src={photo.urls.regular}
          alt={`Photo by ${photo.user.name}`}
        />

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`Profile of ${photo.user.username}`}
          />

          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.name}</p>
            <p className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </p>

          </div>
        </div>
      </div>

      <div>
        <span className='photo-details-modal__top-bar '>
          <div className="photo-details-modal__header">
            Similar Photos</div>
        </span>
      </div>

      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotos}
          favorites={favorites}
          toggleFavorite={toggleFavorite} />
      </div>
    </div>
  );

};


export default PhotoDetailsModal;