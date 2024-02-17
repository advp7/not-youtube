import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import { videosList } from "../data";
import { useNavigate, useParams } from "react-router";
import { VideoContext } from "../context/videoState";
import Toggle from "../components/Toggle";
import Playlist from "../components/Playlist";

export default function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLoading } = useContext(VideoContext);
  const draggingPos = useRef(null);
  const dragOverPos = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplay, setAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [overItemId, setOverItemId] = useState(null);
  const [items, setItems] = useState(videosList);
  const [currentVideo, setCurrentVideo] = useState();

  const handleDragStart = (id, position) => {
    draggingPos.current = position;
    setDraggedItemId(id);
  };

  const handleDragEnter = useCallback(
    (id, position) => {
      setOverItemId(id);
      dragOverPos.current = position;
      const newItems = [...items];
      const draggingItem = newItems[draggingPos.current];
      if (!draggingItem) return;

      newItems.splice(draggingPos.current, 1);
      newItems.splice(dragOverPos.current, 0, draggingItem);

      const reorderedItems = newItems.map((item, index) => ({
        ...item,
        order: index,
      }));

      draggingPos.current = position;
      dragOverPos.current = null;

      setItems(reorderedItems);
    },
    [items]
  );

  const handleDragEnd = () => {
    setDraggedItemId(null);
    setOverItemId(null);
  };

  const toggleVideo = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current.pause();
    }

    if (id) {
      const reqVideo = videosList.find((video) => video.id === parseInt(id));
      if (reqVideo) {
        setCurrentVideo(reqVideo);
      } else {
        navigate(`/not-found`);
        setCurrentVideo(undefined);
      }
    } else {
      navigate(`/not-found`);
      setCurrentVideo(undefined);
    }
  }, [isPlaying, id, navigate]);

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    setLoading(true);
    toggleVideo();
    setLoading(false);
  }, [id]);

  useEffect(() => {
    const handleVideoEnd = () => {
      const currentIndex = items.findIndex(
        (item) => item.id === currentVideo?.id
      );

      if (currentIndex !== -1) {
        const nextItems = [...items];
        const finishedVideo = nextItems.splice(currentIndex, 1)[0];
        nextItems.push(finishedVideo);
        setItems(nextItems);

        const nextVideoId = nextItems[0]?.id;
        if (nextVideoId !== undefined) {
          navigate(`/video/${nextVideoId}`);
        }
      }
    };

    const currentVideoElement = videoRef.current;

    if (autoplay && currentVideoElement) {
      currentVideoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (currentVideoElement) {
        currentVideoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [autoplay, items, currentVideo, navigate]);

  useEffect(() => {
    if (currentVideo && videoRef.current) {
      videoRef.current.load();
      videoRef.current.onloadedmetadata = () => {
        videoRef.current
          .play()
          .catch((error) => console.log("Play failed:", error));
      };
    }
  }, [currentVideo]);

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-gradientPlayer">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <video
            onTimeUpdate={handleProgress}
            ref={videoRef}
            width="100%"
            height="100%"
            muted
            controls
          >
            {currentVideo && (
              <source src={currentVideo.source} type="video/mp4" />
            )}
          </video>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-textPrimary font-bold text-base md:text-xl mt-4 line-clamp-2">
                {currentVideo?.title}
              </span>
              <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-medium mt-2 text-textSecondary flex items-center">
                {currentVideo?.subtitle}
              </span>
            </div>
            <div className="mt-4 mr-2">
              <Toggle
                checked={autoplay}
                onChange={(e) => setAutoPlay(e.target.checked)}
                text="Autoplay"
              />
            </div>
          </div>
          <div className="relative h-min w-full mt-4 p-3 py-6 rounded-xl bg-primary overflow-hidden">
            <span className="text-[24px] lg:text-[20px] xl:text-[24px] pl-4 font-semibold text-textSecondary flex items-center">
              Description
            </span>
            <span className="text-[14px] lg:text-[12px] xl:text-[14px] pl-4 font-medium mt-5 text-lightWhite flex items-center">
              {currentVideo?.description}
            </span>
          </div>
        </div>
        <Playlist
          items={items}
          currentVideo={currentVideo}
          draggedItemId={draggedItemId}
          overItemId={overItemId}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          handleDragEnd={handleDragEnd}
        />
      </div>
    </div>
  );
}
