import React from "react";
import Link from "next/link";

const VideosItem = ({ video }) => {
  return (
    <div className="flex flex-col">
      <Link
        href={{ pathname: "/video", query: { object: JSON.stringify(video) } }}
        as={`video/${video.id.videoId}`}
      >
        <img
          alt={video.snippet.title}
          className="rounded-lg w-[20rem]"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="">
          <p className="text-sm font-roboto font-bold line-clamp-2">
            {video.snippet.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideosItem;
