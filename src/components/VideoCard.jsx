import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbanils?.high.url}
            alt={snippet.tittle}
            sx={{ width: 358, height: 180 }}
          ></CardMedia>
          <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              </Typography>
            </Link>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default VideoCard;
