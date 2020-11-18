import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {

  const videoRendererList = videos.map((video) => {
    return (
      <div className="ui relaxed divided list" key={video.id.videoId}>
        <VideoItem video={video} onVideoSelect={onVideoSelect} />
      </div>
    );
  });

  return <div>{videoRendererList}</div>;
};

export default VideoList;
