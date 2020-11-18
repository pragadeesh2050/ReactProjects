import './VideoItem.css'
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  const { url, height, width } = video.snippet.thumbnails.medium;
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={url} alt={video.snippet.channelTitle} width={width} height={height}></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
