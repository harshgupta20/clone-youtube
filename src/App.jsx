import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

//Components
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import Navbar from './components/Navbar';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor:"#000"}}>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/video/:id' exact element={<VideoDetail />} />
            <Route path='/channel/:id' exact element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
            {/* <Route path='/feed' exact element={<Feed.jsx/>} /> */}
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
