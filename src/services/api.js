import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

export const login = (email, password) => API.post('/login', { email, password });
export const fetchVideos = () => API.get('/videos');
export const uploadVideo = (videoUrl) => API.post('/videos', { url: videoUrl });
