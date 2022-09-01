import { api } from './api'
import axios from 'axios'

//! read profile
export const profileWs = () => api.get('/user/profile')

//! read other profile
export const friendProfileWs = () => api.get('/user/:id/profile')

//! update profile
export const updateProfileWs = (data) => api.patch('/user/edit-profile', data)

//! delete profile
export const deleteProfileWs = () => api.delete('/user/delete-profile')

//! Admin read profiles
export const adminProfileWs = () => api.get('/admin/users')