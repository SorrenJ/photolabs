import React from 'react';
import FavIcon from "./FavIcon"
import FavBadge from "./FavBadge"
import '../styles/TopNavigationBar.scss'
import TopicList from "./TopicList";
import topics from "../mocks/topics";

const TopNavigationBar = (props, {isFavPhotoExist}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>.
   
    </div>
  )
}

export default TopNavigationBar;