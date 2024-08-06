import React, { useReducer, useEffect } from 'react';

// Actions for reducer cases
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'

}

// Intitial setStates for reducer
const initialState = {
  favorites: [],
  displayModal: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  topicId: null

};

// Reducer function begins
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


    case 'GET_PHOTOS_BY_TOPICS':
      return {
        ...state,
        topicId: action.topicId,

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
// Reducer function ends

// UseApplicationData function begins
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photos and topics for the selected topicId (default is null)
  useEffect(() => {
    Promise.all([
      fetch('/api/photos').then(res => res.json()),
      fetch('/api/topics').then(res => res.json())
    ])
      .then(([photoData, topicData]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, []); // [] ensures it only runs once

  // Fetches the photos based on the current topicId
  useEffect(() => {
    if (state.topicId) {
      fetch(`/api/topics/photos/${state.topicId}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }
  }, [state.topicId]); // ensures it only runs once when topicId is selected


  // Helper functions begins 

  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };


  const openModal = (photo) => {
    dispatch({ type: 'OPEN_MODAL', payload: photo });

  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });

  };

  const setTopic = (topicId) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, topicId: topicId });
  };



  return {
    state,
    favorites: state.favorites,
    toggleFavorite,
    openModal,
    closeModal,
    selectedPhoto: state.selectedPhoto,
    displayModal: state.displayModal,
    setTopic
  };

};


export default useApplicationData;