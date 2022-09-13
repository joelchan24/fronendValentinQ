import { api } from "./api";
// import { succesStatus, internalServerErrror } from "../utils/format-res";

//* Login
export const loginWs = (data) =>
  api.post("/auth/login", data)
  // .then(succesStatus).catch(internalServerErrror);

//* Signup
export const signupWs = (data) =>
  api.post("/auth/signup", data)
  // .then(succesStatus).catch(internalServerErrror);

//! Logout
export const logoutWs = () =>
  api.get("/auth/logout")
  // .then(succesStatus).catch(internalServerErrror);
