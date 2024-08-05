import React from 'react';
import FavIcon from "./FavIcon"
import FavBadge from "./FavBadge"
import '../styles/TopNavigationBar.scss'
import TopicList from "./TopicList";
import topics from "../mocks/topics";
import { useState } from "react";

const TopNavigationBar = ({ topics, isFavPhotoExist, setTopic }) => {
  // const isFavPhotoExist = true; // or false based on your logic
  // const [isFavPhotoExist] = useState(false);
  return (

    <div className="top-nav-bar">

      <span className="top-nav-bar__logo">PhotoLabs</span>

      <TopicList topics={topics} setTopic={setTopic} />

      <FavBadge isFavPhotoExist={isFavPhotoExist} />.

    </div>

  )

}
export default TopNavigationBar;