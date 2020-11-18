import axios from 'axios';

const KEY = 'AIzaSyApwYvXFt2jKqGS6s8Rjga6_DVwe_CYa3c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'videos',
    key: KEY  
  }  
});