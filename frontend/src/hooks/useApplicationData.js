import React, { useReducer, useEffect } from 'react';



export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {

  favorites: [],
  displayModal: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []



};


const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      if (state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.payload),
        };

      } else {

        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }


    case 'SET_PHOTO_DATA':
      return {
        ...state,

        photoData: action.payload,

      };

    case 'SET_TOPIC_DATA':
      return {
        ...state,
        topicData: action.payload,

      };


    case 'OPEN_MODAL':
      return {
        ...state,

        selectedPhoto: action.payload,
        displayModal: true,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        selectedPhoto: null,
        displayModal: false,

      };

    default:
      return state;

  }

};



const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);





  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        console.log("Photo Data Updated", data);
      })
      .catch((error) => {
        console.error('Error fetching photo data:', error.message);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topic data:', error.message);
      });
  }, []); // Empty dependency array ensures this effect runs only once




  const toggleFavorite = (photoId) => {

    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });

  };



  const openModal = (photo) => {

    dispatch({ type: 'OPEN_MODAL', payload: photo });

  };



  const closeModal = () => {

    dispatch({ type: 'CLOSE_MODAL' });

  };



  return {

    state,

    favorites: state.favorites,

    toggleFavorite,

    openModal,

    closeModal,

    selectedPhoto: state.selectedPhoto,

    displayModal: state.displayModal,

  };

};



export default useApplicationData;