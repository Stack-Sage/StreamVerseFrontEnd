import Image from 'next/image';
import { FaReply, FaThumbsUp, FaThumbsDown, FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { buttonStyle } from '@/styles/globals';
import { useLikeHandling } from './LikeHandling';

export default function VideoComments({
  commentLike,
  comments,
  user,
  myComment,
  setMyComment,
  uploadComment,
  uploadReply, 
  currentVideo,
  deleteComment,
}) {

  const { handleCommentLike } = useLikeHandling();
  const route = useRouter();
  const [replyComment, setReplyComment] = useState("");
  const [replyToId, setReplyToId] = useState(null); // Track which comment is being replied to

  return (
    <div className='mt-4 flex-col p-2 rounded-lg bg-white/10'>
      <h1 className='text-xl font-bold'>Total Comments : {comments?.length || 0}</h1>
      <div className='flex-row flex mt-4 mb-10 gap-4 justify-center items-center'>
        <Image className='rounded-full h-12 w-12' src={user?.avatar} width={50} height={50} alt="User Profile" />
        <input
          type="text"
          className='w-full outline-none border-b-2'
          placeholder="Add Your Comment !"
          onChange={(e) => setMyComment(e.target.value)}
          value={myComment}
        />
        <button
          className= {` px-4 py-2 rounded-full active:scale-[0.95] transition-all duration-200 ease-out ${buttonStyle} `}
          onClick={() => {
            uploadComment(currentVideo._id, myComment);
            setMyComment("");
          }}
        >
          Comment
        </button>
      <button className='active:scale-95 cursor-pointer  ' onClick={() => setMyComment("")}>Cancel</button>
      </div>
      {comments.map((com) => (
        <div className='flex flex-row gap-4 px-2 mb-4' key={com._id}>
          <Image
            className='rounded-full h-10 w-10 hover: ring-1 ring-black'
            src={com?.owner?.avatar}
            width={50}
            height={50}
            onClick={() => route.push(`/profile/${com?.owner?.username}`)}
            alt=""
          />
          <div className='flex flex-col'>
            <h1
              onClick={() => route.push(`/profile/${com?.owner?.username}`)}
              className='italic'
            >
              @{com?.owner?.username}
            </h1>
            <h1 className='text-md font-mono'>{com?.content}</h1>
            <div className='flex flex-row gap-4 items-center mt-2'>
              <h1 className='flex-row flex items-center gap-1 cursor-pointer active:scale-[0.9] dark:hover:bg-white/10 px-3 py-2 rounded-full hover:bg-black/10'
              onClick={() => handleCommentLike(com._id)}>
                <FaThumbsUp /> <p>{ com.likesCount || 0}

                  {console.log(com.likesCount, "other comments likes are")}
                </p>
              </h1>
            
              <button
                className='flex flex-row cursor-pointer items-center gap-1 active:scale-[0.9] dark:hover:bg-white/10 px-3 py-2 rounded-full hover:bg-black/10 ml-5'
                onClick={() => {
                  setReplyToId(com._id === replyToId ? null : com._id);
                  setReplyComment("");
                }}
              >
                <FaReply /> Reply
              </button>
              {com?.owner?._id === user?._id && (
                <button
                  className='flex flex-row cursor-pointer items-center gap-1 active:scale-[0.9] dark:hover:bg-white/10 px-3 py-2 rounded-full hover:bg-black/10 ml-5'
                  onClick={() => deleteComment(com._id, currentVideo._id)}
                >
                  <FaTrash /> Delete
                </button>
              )}
            </div>
       
            {replyToId === com._id && (
              <div className='flex-row flex gap-4 justify-center items-center mt-2'>
                <input
                  type="text"
                  className='w-full outline-none border-b-2'
                  placeholder="Add your reply..."
                  onChange={(e) => setReplyComment(e.target.value)}
                  value={replyComment}
                />
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 active:scale-[0.95] transition-all duration-200 ease-out'
                  onClick={() => {
                    if (replyComment.trim()) {
                      uploadComment(currentVideo._id, com._id, replyComment); // Pass parent comment ID
                      setReplyComment("");
                      setReplyToId(null);
                    }
                  }}
                >
                  Reply
                </button>
                <button onClick={() => setReplyToId(null)}>Cancel</button>
              </div>
            )}


            {com.replies && com.replies.length > 0 && (
              <div className='ml-8 mt-2'>
                {com.replies.map((reply) => (
                  <div key={reply._id} className='flex flex-row gap-2 items-center mb-2'>
                    <Image
                      className='rounded-full h-8 w-8'
                      src={reply?.owner?.avatar}
                      width={32}
                      height={32}
                      alt=""
                    />
                    <span className='italic text-sm'>@{reply?.owner?.username}</span>
                    <span className='text-sm'>{reply?.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}