import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import useVideos from "../hooks/useVideos";
import VideoList from "./VideoList";
const Homepage = () => {
  const [videos, search] = useVideos("indonesia");

  return (
    <div className="">
      <Navbar onFormSubmit={search} />
      <div className=" sm:pl-[5rem] lg:pl-[12rem] mt-16 w-full bg-white ">
        <VideoList videos={videos} />
      </div>
    </div>
  );
};

export default Homepage;
