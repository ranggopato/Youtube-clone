import React from "react";
import VideosItem from "./VideosItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideosItem key={video.id.videoId} video={video} />;
  });

  return (
    <div className="grid grid-cols-1  min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 px-4">
      {renderedList}
    </div>
  );
};

export default VideoList;
