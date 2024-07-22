import React from 'react';
import FavIcon from "./FavIcon"
import '../styles/TopNavigationBar.scss'
import TopicList from "./TopicList";
const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList/>
   <FavIcon/>
   
    </div>
  )
}

export default TopNavigation;