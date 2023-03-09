import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import ChannelCard from './ChannelCard';
import Video from './Video';

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  
  // console.log(channelDetail);
  // console.log(videos);

  useEffect(()=>{
    // to get the channel info
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));
    // to get the video of particular channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  }, [id]);

  return (
    <> 

    <Box minHeight="95vh">
        <Box>
          <div style={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)', zIndex:10, height:'300px'}} />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>

        <Box display='flex' p='2'>
          <Box sx={{mr: { sm:'100px'}}} />
            {videos ? <Video videos={videos} /> : ""}
              {/* <Video videos={videos} /> */}
        </Box>
    </Box>
      {id}
    </>
  )
}

export default ChannelDetail