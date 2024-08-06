import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
 
  // Topic select handling
  const handleClick = () => {
    props.setTopic(props.topic.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span> {props.topic.title}</span>
    </div>
  );

};

export default TopicListItem;
