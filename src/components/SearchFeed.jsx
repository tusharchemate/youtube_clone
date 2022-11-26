import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Videos from './Videos';
import { fetchAPI } from '../utils/fetchAPI';

// here we are showing search feed 
const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  // implements useEffect for fetchAPI data
const {searchTerm} = useParams();

  useEffect(() => {
    setVideos(null);
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, []);
  return (
    <Box p={2} sx={{ height: '90vh', flex: 2, overflowY: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
       Search Result for : <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>

      {/* added video componet to render videos */}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
