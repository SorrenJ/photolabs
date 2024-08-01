import React, { useReducer } from 'react';

const initialState = {
  favorites: [],
  displayModal: false,
  selectedPhoto: null,
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
    favorites: state.favorites,
    toggleFavorite,
    openModal,
    closeModal,
    selectedPhoto: state.selectedPhoto,
    displayModal: state.displayModal,
  };
};

export default useApplicationData;
