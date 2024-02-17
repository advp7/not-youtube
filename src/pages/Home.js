import React from "react";
import { videosList } from "../data";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-gradientHome">
        <div className="grid w-full max-w-[1280px] justify-center m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {videosList?.map((video) => {
            return <VideoCard key={video?.id} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
}
