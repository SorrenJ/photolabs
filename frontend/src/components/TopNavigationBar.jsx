import React from 'react';
import FavBadge from "./FavBadge"
import '../styles/TopNavigationBar.scss'
import TopicList from "./TopicList";


const TopNavigationBar = ({ topics, isFavPhotoExist, setTopic }) => {
  return (

    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setTopic={setTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />.
    </div>

  )

}
export default TopNavigationBar;