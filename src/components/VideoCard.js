import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <Link to={`/video/${video?.id}`}>
      <div className="flex flex-col mb-8">
        <div className="video-container relative h-48 md:h-40 rounded-xl overflow-hidden">
          <img
            className="video-thumb h-full w-full object-cover"
            src={video?.thumb}
            alt={video?.title}
          />
          <div className="play-icon-container absolute inset-0 flex justify-center items-center opacity-0">
            <svg
              viewBox="0 0 24 24"
              className="play-icon h-12 w-12"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 4l15 8-15 8V4z"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col ml-3 text-textPrimary mt-3 overflow-hidden">
          <span className="text-sm font-bold line-clamp-2">{video?.title}</span>
          <span className="text-[12px] font-semibold mt-2 text-textSecondary">
            {video?.subtitle}
          </span>
        </div>
      </div>
    </Link>
  );
}
