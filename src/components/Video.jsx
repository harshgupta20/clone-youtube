import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';

const Video = ({videos}) => {
  
  console.log(videos);
  return (
      <>
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
          {
            videos.map(
              (item, key) => {
                return (
                  <Box key={key}>
                      {item.id.videoId && <VideoCard video={item} />}
                  </Box>
                )
              }
            )
          }

        </Stack>
      </>
  )
}

export default Video