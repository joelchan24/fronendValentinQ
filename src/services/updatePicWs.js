import { api } from './api'
import axios from 'axios'

//! upload multiple images
export const multipleImagesWs = (data) => api.post('/upload/uploads',data)

//! upload single image
export const singleImageWs = (data) => api.post('/upload/single',data)

//! delete image
export const deleteImageWs = () => api.delete('/upload/deleteImages/:name')