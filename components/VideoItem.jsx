import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="flex space-x-2">
      <img
        alt={video.snippet.title}
        className="rounded-lg w-[10rem]"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="">
        <p className="text-sm font-roboto font-bold line-clamp-2">
          {video.snippet.title}
        </p>
      </div>
    </div>
  );
};

export default VideoItem;
