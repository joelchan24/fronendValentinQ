import { useState, useEffect } from "react";
import { CreatePostForm, EditPostForm } from "../components";
import { allPostsWs, deletePostWs } from "../services/communityWs";
import { Paper } from "@mui/material";

const Community = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const res = await allPostsWs();
      setComments(res.data.posts);
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  const deletePost = (id) => {
    const removedComment = comments.filter((comment) => comment._id !== id);
    setComments(removedComment);
  };

  const deleteData = async (id) => {
    try {
      await deletePostWs(id)
      deletePost(id)
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  return (
    <div>
      <h1>Community</h1>
      <CreatePostForm setComments={setComments} />

      <ul>
        {comments.map((comment) => (
          <li>
            {comment.comment}

            {comment.author === props.pebblesUser.username && (
              <button onClick={() => deleteData(comment._id)}> Delete </button>
            )}

            {/* {comment.author === props.pebblesUser.username && (
              <button  > Edit </button>
            )} */}
          </li>
        ))}
      </ul>

      <div></div>
    </div>
  );
};

export default Community;
