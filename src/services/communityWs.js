import { api } from "./api";

//! read all posts
export const allPostsWs = () => api.get("/community/allPosts");

//* create post
export const addPostWs = (data) => api.post("/community/communityPost", data);

//! update post
export const editPostWs = (id) => api.patch(`/community/updatePost/${id}`);

// ! delete post
export const deletePostWs = (id) => api.delete(`/community/deletePost/${id}`);

