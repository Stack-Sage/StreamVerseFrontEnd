'use client'

import { showError, showInfo, showSuccess } from '@/components/ui/toast';
import VideoSearch from '@/components/Video/VideoSearch';
import { VideoContext } from '@/context/VideoContext';
import { getVideoById } from '@/services/video.service';
import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
export default function VideoPlayerPage() {
  const { allVideos } = useContext(VideoContext);
  const params = useParams();
  const videoId = params.id;
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);

 
      const preVideo = allVideos.find(v => v._id === videoId);
      if (preVideo) {
        setCurrentVideo(preVideo);
        setLoading(false);
        return;
      }

      try {
        const response = await getVideoById(videoId);
        if (response) {
          setCurrentVideo(response.data);
      
        } else {
          showError("No video found");
        }
      } catch (error) {
        showError("Failed to fetch video");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId, allVideos]);

  if (loading) return <p className="mt-16 text-center">Loading video...</p>;
  if (!currentVideo) return <p className="mt-16 text-center text-red-500">Video not found</p>;

  return (
    <main className='mt-16 lg:mx-8 md:mx-4 mx-1'>
      <div>
        <VideoSearch />
      </div>

      <div className='flex mt-4 flex-col border-2 h-auto w-auto '>
        <video
          src={currentVideo.videoFile}
          controls
          className='rounded-lg w-full max-w-[70em] md:h-[30em] h-[20em] lg:h-[42em] object-fill'
          autoPlay
          preload="auto"
          playsInline
           srcLang="en"
         label="English"
          loop={false}
          muted={false}
          loading="lazy"
          onPlay={() => showInfo("Video started")}
          onPause={() => showInfo("Video paused")}
          onEnded={() => showInfo("Video ended")}
          
        />
        <h1 className=' font-bold text-xl  '>{currentVideo.title}</h1>
        <div className=' flex flex-row items-center gap-2 '>
          <span>
            <Image className='rounded-full' src={currentVideo?.owner?.avatar} width={50} height={50} alt="avatar image" />  
            </span>
             <h1 className='tracking-wide text-lg font-semibold '> {currentVideo?.owner?.username}</h1>
        </div>
      </div>
    </main>
  );
}
