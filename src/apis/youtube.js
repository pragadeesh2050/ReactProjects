import axios from 'axios';

const KEY = 'AIzaSyCjnMEnJgqgT8MeIJPlyUCeXd9ofaCxkoA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'videos',
    key: KEY  
  }  
});
