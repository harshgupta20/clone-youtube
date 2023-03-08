const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '1ec2f8fd79msh52e5b3e200a5205p1dbb26jsn9383843ee875',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}