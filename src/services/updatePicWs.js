import { api } from './api'

//! upload multiple images
export const multipleImagesWs = (data) => api.post('/upload/uploads',data)

//! upload single image
export const singleImageWs = (data) => api.post('/upload/single',data)

//! delete image
export const deleteImageWs = (name) => api.delete(`/upload/deleteImages/${name}`)