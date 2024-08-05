import React from "react";
import TopicList from "./TopicList";
import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {

  const handleClick = () => {
    props.setTopic(props.topic.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>

      <span> {props.topic.title} </span>
    </div>
  );




};

export default TopicListItem;
