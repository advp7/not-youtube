import PlaylistVideoCard from "./PlaylistVideoCard";

export default function Playlist({
  items,
  currentVideo,
  draggedItemId,
  overItemId,
  handleDragStart,
  handleDragEnter,
  handleDragEnd,
}) {
  return (
    <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
      <div className="bg-black p-2 rounded-t-xl flex justify-center items-center text-textPrimary">
        Playlist
      </div>

      <div className="relative h-full p-4 rounded-b-xl bg-primary overflow-hidden">
        {items?.map((video, index) => {
          if (video.source === currentVideo?.source) return false;
          return (
            <div
              key={video.id}
              className={`item ${
                draggedItemId === video.id ? "dragging" : ""
              } ${overItemId === video.id ? "over" : ""}`}
              draggable
              onDragStart={() => handleDragStart(video.id, index)}
              onDragEnter={() => handleDragEnter(video.id, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={handleDragEnd}
            >
              <PlaylistVideoCard key={video.id} video={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
