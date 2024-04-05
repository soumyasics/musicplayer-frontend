import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'http://localhost:4013/music_player_api', 

  // baseURL: 'http://hybrid.srishticampus.in/educational_podcasting_api/', 

  // baseURL: 'http://hybrid.srishticampus.in/music_player_api/',

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance