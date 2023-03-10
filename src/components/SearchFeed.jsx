import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Video from './Video';

import { fetchFromAPI } from '../utils/FetchFromAPI';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const [SearchTerm] = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${SearchTerm}`).then((data) => setVideos(data.items));
  }, [SearchTerm])

  console.log("start");
  console.log(videos);
  console.log("end");
  return (
    <>
        {/* Feed Body */}
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          {/* Feed Title */}
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>Search Videos for :  <span style={{ color: "#F31503" }}>{SearchTerm}</span> Video</Typography>
          {/* Video Content of Feed */}
          <Video videos={videos} />
        </Box>

    </>
  )
}

export default SearchFeed;