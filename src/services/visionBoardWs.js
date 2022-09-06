import { api } from './api'

//! Create VisionBoard
export const createVisionWs = (data) => api.post('visionBoard/createVision', data) 

//! Read VisionBoard
export const myVisionWs = () => api.get('/visionBoard/myVision/:id')

//! Update VisionBoard
export const updateVisionWs = (data) => api.patch('/visionBoard/updateMyBoard/:id', data)