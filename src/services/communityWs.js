import { api } from "./api";

//! read all posts
export const allPostsWs = () => api.get("/community/allPosts");

//* create post
export const addPostWs = (data) => api.post("/community/communityPost", data);

//! update post
export const editPostWs = (data) => api.post("/community/updatePost/:id");

//! delete post               //? Checar si lleva data
export const deletePostWs = () => api.delete("/community/deletePost/:id");
