import { Link } from "react-router-dom";

export default function PlaylistVideoCard({ video }) {
  return (
    <Link to={`/video/${video?.id}`}>
      <div className="flex mb-3 items-center">
        <div className="relative flex items-center h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-primary overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumb}
            alt={video?.title}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-2 top-2 text-textPrimary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            title="Drag and drop to reorder"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-textPrimary">
            {video?.title}
          </span>
          <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-textSecondary flex items-center">
            {video?.subtitle}
          </span>
        </div>
      </div>
    </Link>
  );
}
