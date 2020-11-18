import axios from 'axios';

const KEY = 'AIzaSyCzkAbY9OrTTg_GZ3z1dhkOnfcFnzbWRwc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'videos',
    key: KEY  
  }  
});