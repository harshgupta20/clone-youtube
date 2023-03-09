import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

const ChannelDetail = () => {
  const {id} = useParams();
  return (
    <> 
      {id}
    </>
  )
}

export default ChannelDetail