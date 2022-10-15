import { useState, useEffect } from "react";
import { CreatePostForm } from "../components";
import { allPostsWs, deletePostWs } from "../services/communityWs";
import { Delete  } from "@mui/icons-material";
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
      console.log(error.response.data.errorMessage)
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
      alert(`ERROR : ${error.response.data.errorMessage}`);
    }
  };

  return props.pebblesUser ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 700 }} mt={2}>
        <Typography sx={{ typography: { sm: "h2", xs: "h4" } }}>
          Community
        </Typography>
        <Typography sx={{ typography: { sm: "h4", xs: "h6" } }}>
          share with others a habit that works for you or you can just leave a
          comment
        </Typography>
        <CreatePostForm setComments={setComments} props={props} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                maxWidth: 600,
                minHeight: 120,
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
                key={comment._id}
              >
                <Typography sx={{ typography: { sm: "h6", xs: "subtitle1" } }}>
                  {comment.comment}
                </Typography>

                {comment.author === props.pebblesUser.username ||
                props.pebblesUser.role === "Admin" ? (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      color="secondary"
                      variant="contained"
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
                    <Typography sx={{ fontWeight: "500" }}>By:</Typography>
                    <Typography ml={1} mr={1} color="orange">
                      {comment.author}
                    </Typography>
                  </Box>
                )}
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <h1> Hey! you need to be logged in to see this content </h1>
  );
};

export default Community;
