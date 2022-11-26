import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';

const VideoDetails = () => {
  const { id } = useParams();
  const [videosDetails, setVideosDetails] = useState(null);

  useEffect(() => {
    fetchAPI(`videos?part=snippet&statistics&id=${id}`).then((data) =>
      setVideosDetails(data?.items[0])
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box sx={{ width: '100%', position: 'sticky', top: '80px' }}>
          <ReactPlayer
            url={`https://wwww.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {videosDetails?.snippet?.title}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
