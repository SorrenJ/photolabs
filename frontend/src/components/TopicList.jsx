import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "../mocks/topics";




const TopicList = ({ topics, setTopic }) => {
  const topicListArr = topics.map(topic => <TopicListItem key={topic.id} topic={topic} setTopic={setTopic} />);
  return (
    <div className="top-nav-bar__topic-list">
  
  {topicListArr}



    </div>
  );
};

export default TopicList;
