import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchAPI } from '../utils/fetchAPI';
// here we are showing feed with the side bar and typography
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);
  // implements useEffect for fetchAPI data
  useEffect(() => {
    setVideos(null);
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: 'Column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 @Tech Tushar
        </Typography>
      </Box>

      <Box p={2} sx={{ height: '90vh', flex: 2, overFlowY: 'auto' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>

        {/* added video componet to render videos */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
