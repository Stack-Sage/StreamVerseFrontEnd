import { useContext } from "react";
import { VideoContext } from "@/context/VideoContext";
import { addCommentApi, deleteCommentApi, updateCommentApi, getVideoCommentsApi } from "@/services/comment.service";
import { showSuccess, showError } from "../ui/toast";

export const useCommentFunctions = () => {
  const { setComments } = useContext(VideoContext);

  const fetchVideoComments = async (videoId, page = 1, limit = 10) => {
    try {
      const response = await getVideoCommentsApi(videoId, page, limit);
      setComments(response.data || []);
      return response.data;
    } catch (error) {
      showError("Error fetching video comments");
      throw error;
    }
  };

  const uploadComment = async (videoId, content) => {
    try {
      await addCommentApi(videoId, content);
      showSuccess("Comment Added Successfully");
      await fetchVideoComments(videoId, 1, 10);
    } catch (error) {
      showError("Error uploading comment");
      throw error;
    }
  };

  const deleteComment = async (commentId, videoId) => {
    try {
      await deleteCommentApi(commentId);
      showSuccess("Comment Deleted Successfully");
      await fetchVideoComments(videoId, 1, 10);
    } catch (error) {
      showError("Error deleting comment");
      throw error;
    }
  };

  const updateComment = async (commentId, newComment, videoId) => {
    try {
      await updateCommentApi(commentId, newComment);
      showSuccess("Comment Updated Successfully");
      await fetchVideoComments(videoId, 1, 10);
    } catch (error) {
      showError("Error updating comment");
      throw error;
    }
  };

  return {
    uploadComment,
    deleteComment,
    updateComment,
    fetchVideoComments,
  };
};