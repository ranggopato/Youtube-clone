import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import useVideos from "../hooks/useVideos";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Test from "./test";
const Videopage = ({ video }) => {
  const a = "indonesia";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos(a);

  useEffect(() => {
    setSelectedVideo(video);
  }, [videos]);

  return (
    <div className="">
      <Navbar onFormSubmit={search} />
      <div className="flex mt-16 w-full bg-white ">
        <VideoDetail
          video={selectedVideo}
          onVideoSelect={setSelectedVideo}
          videos={videos}
        />
      </div>
    </div>
  );
};

export default Videopage;
