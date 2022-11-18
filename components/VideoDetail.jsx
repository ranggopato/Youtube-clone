import React from "react";
import VideoItem from "./VideoItem";

const VideoDetail = ({ video, videos, onVideoSelect }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="px-8 grid grid-cols-10 gap-4">
      <div className="col-span-7">
        <div className="w-[100%]">
          <iframe
            title="video player"
            src={videoSrc}
            className="w-[100%] h-[25rem]"
          />
        </div>
        <div className="">
          <h4 className="">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
      <div className="col-span-3 flex flex-col space-y-4">
        {videos.map((vid) => {
          return (
            <VideoItem
              key={vid.id.videoId}
              onVideoSelect={onVideoSelect}
              video={vid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
