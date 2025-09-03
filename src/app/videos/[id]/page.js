'use client'

import { showError, showSuccess } from '@/components/ui/toast';
import VideoSearch from '@/components/Video/VideoSearch';
import { VideoContext } from '@/context/VideoContext';
import { getVideoById } from '@/services/video.service';
import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { buttonStyle } from '@/styles/globals';
import { FaArrowDown, FaArrowUp, FaDownload, FaFlag, FaSave, FaShare, FaThumbsUp } from 'react-icons/fa';
import { findTime } from '@/utils/findTimeAgo';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import { getUserChannelProfileApi } from '@/services/user.service';
import { useCommentFunctions } from '@/components/Comment/uploadComment';
import VideoComments from '@/components/Video/VideoComment';
import { useLikeHandling } from '@/components/Video/LikeHandling';


export default function VideoPlayerPage() {
  const { allVideos, comments = [], setComments , currentVideo,setCurrentVideo,videoLike,commentLike } = useContext(VideoContext);
  const { likedVideos, handleVideoLike, handleCommentLike, fetchLikedVideos } = useLikeHandling();
  const params = useParams();
  const videoId = params.id;
  const [myComment, setMyComment] = useState("");
  const { profile, setProfile, user } = useContext(UserContext);
 

  const [loading, setLoading] = useState(true);
  const [fullDesc, setFullDesc] = useState(false);
  const route = useRouter();

  const createdDate = currentVideo ? findTime(new Date(currentVideo.createdAt)) : "";

  const { uploadComment, deleteComment, updateComment, fetchVideoComments } = useCommentFunctions();


  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);
      try {
        const response = await getVideoById(videoId);
        if (response) {
          setCurrentVideo(response.data);
          showSuccess("Video Found");
        } else {
          showError('No video found');
        }
      } catch (error) {
        showError('Failed to fetch video');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideo();
  }, [videoId, allVideos]);


  useEffect(() => {
    if (currentVideo?.owner?.username) {
      async function fetchProfile() {
        try {
          const response = await getUserChannelProfileApi(currentVideo.owner.username);
          setProfile(response.data);
        } catch (error) {
          showError("Failed to fetch profile");
        }
      }
      fetchProfile();
    }
  }, [currentVideo]);

  useEffect(() => {
    if (currentVideo?._id) {
      fetchVideoComments(currentVideo._id, 1, 10);
    }
  }, [currentVideo]);

  if (loading) return <p className="mt-16 text-center">Loading video...</p>;
  if (!currentVideo) return <p className="mt-16 text-center text-red-500">Video not found</p>;

  return (
    <main className="mt-16 m-1 md:px-6 lg:mx-8 mb-20 relative mx-auto items-center flex rounded-lg pt-16">
      <div className='z-50'>
        <VideoSearch />
      </div>
      <div className="flex z-10 flex-col mt-4 rounded-lg w-full max-w-[70em]">
        <video
          src={currentVideo.videoFile}
          controls
          className="rounded-lg w-full h-[20em] sm:h-[25em] md:h-[30em] lg:h-[40em] object-cover"
          autoPlay={false}
          preload="auto"
          muted={false}
        />
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl p-2">{currentVideo.title}</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-2">
          <div className="flex items-center gap-3">
            <Image
              onClick={() => route.push(`/profile/${currentVideo?.owner?.username}`)}
              className="rounded-full object-fill h-12 w-12 hover:scale-[1.05] cursor-pointer "
              src={currentVideo?.owner?.avatar}
              width={50}
              height={50}
              alt="avatar image"
            />

            <div className='flex flex-col'>

                <h1
                  onClick={() => route.push(`/profile/${currentVideo?.owner?.username}`)}
                  className="tracking-wide cursor-pointer hover:underline text-base lg:text-lg font-semibold"
                >
                  {currentVideo?.owner?.username }
                </h1>
                
                <h1 className="tracking-wide   text-sm font-semibold" >
                 
                  {currentVideo?.owner?.subscribersCount || 0} Subscribers
                </h1> 
            </div>
          
            <button
              className={`${buttonStyle} px-3 py-1 text-sm sm:text-base rounded-full ml-4`}
            >
              {profile?.isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
          <div className="flex flex-row scale-75 lg:justify-end lg:scale-100 md:scale-100 gap-2 lg:gap-4 justify-center md:justify-end">
            <button className={`${buttonStyle}  flex items-center gap-2 px-3 py-1 rounded-full`}
            onClick={() =>  handleVideoLike(currentVideo._id)}
            >
             
              <FaThumbsUp /> <span>{currentVideo?.likesCount || 0}</span>
            </button>
            <button className={`${buttonStyle} flex items-center gap-2 px-3 py-1 rounded-full`}>
              <FaShare /> Share
            </button>
            <button className={`${buttonStyle} flex items-center gap-2 px-3 py-1 rounded-full`}>
              <FaSave /> Save
            </button>
            <button className={`${buttonStyle} flex items-center gap-2 px-3 py-1 rounded-full`}>
              <FaFlag /> Report
            </button>
            <button className={`${buttonStyle} flex items-center gap-2 px-3 py-1 rounded-full`}>
              <FaDownload /> Download
            </button>
          </div>
        </div>
        <div className='p-2 relative w-full px-4 bg-gray-900/10 dark:bg-white/10 flex-col flex h-auto rounded-lg'>
          <span className='flex flex-row text-md gap-4 font-mono font-semibold tracking-tight'>
            {currentVideo.views} views {createdDate}
          </span>
          <span className={`px-1 text-md font-normal overflow-hidden tracking-normal ${fullDesc ? "h-full" : "h-12"}`}>
            {currentVideo.description}
          </span>
          <button
            className="absolute right-2 top-1 opacity-90 italic flex items-center gap-1"
            onClick={() => setFullDesc(prev => !prev)}
          >
            {fullDesc ? <>Show Less <FaArrowUp /></> : <>Show More <FaArrowDown /></>}
          </button>

       
        </div>
        <VideoComments
          comments={comments}

          user={user}
          myComment={myComment}
          setMyComment={setMyComment}
          uploadComment={uploadComment}
          currentVideo={currentVideo}
          deleteComment={deleteComment}
          commentLike={commentLike}
        />
      </div>
    </main>
  );
}