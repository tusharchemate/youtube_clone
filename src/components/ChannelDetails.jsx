import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos, ChannelCard } from './';
import { fetchAPI } from '../utils/fetchAPI';

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(17,108,157,1) 42%, rgba(11,147,194,1) 64%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetails={channelDetails} marginTop="-120px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
