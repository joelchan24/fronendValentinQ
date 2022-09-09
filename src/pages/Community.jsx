import { useState, useEffect } from "react";
import { CreatePostForm } from "../components";
import { allPostsWs, deletePostWs } from "../services/communityWs";
import { Delete } from "@mui/icons-material";
import { Paper, Button, Box, Typography } from "@mui/material";

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
      await deletePostWs(id);
      deletePost(id);
    } catch (error) {
      console.log(error.response.data.errorMessage);
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  return (
    <Box>
      <Typography variant="h2" align="center">
        Community
      </Typography>
      <CreatePostForm setComments={setComments} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 600,
            height: 128,
          },
        }}
      >
        {comments.map((comment) => (
          <Paper
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">{comment.comment}</Typography>

            {comment.author === props.pebblesUser.username ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  color="secondary"
                  variant="outlined"
                  size="small"
                  startIcon={<Delete />}
                  onClick={() => deleteData(comment._id)}
                >
                  Delete
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Typography> By: {comment.author} </Typography>
              </Box>
            )}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Community;

/* 



*/
