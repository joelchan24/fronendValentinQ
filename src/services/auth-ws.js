import { api } from "./api";
import axios from "axios";

// Login
export const loginWs = (data) => api.post("/auth/login", data)

// Signup
export const signupWs = (data) => api.post('/auth/signup', data)

// Logout
export const logoutWs = () => api.get('/auth/logout')