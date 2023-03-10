import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Video from './Video';

import { fetchFromAPI } from '../utils/FetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
  }, [selectedCategory])

  console.log("start");
  console.log(videos);
  console.log("end");
  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

          {/* SideBar */}
          <Sidebar selectedCategory={selectedCategory} setSelectCategory={setSelectCategory} />

          <Typography className="cpoyright" variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
            Copyright 2022 JSM Media
          </Typography>
        </Box>

        {/* Feed Body */}
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          {/* Feed Title */}
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>{selectedCategory} <span style={{ color: "#F31503" }}>Videos</span></Typography>
          {/* Video Content of Feed */}
          <Video videos={videos} />
        </Box>
      </Stack>
    </>
  )
}

export default Feed