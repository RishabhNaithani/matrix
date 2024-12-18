'use client';

import React from 'react';

interface YoutubePlayerProps {
  videoId: string; // YouTube video ID
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId }) => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={`https://www.youtube.com/embed/92p3RPcpujI?autoplay=1&controls=0&loop=1&playlist=92p3RPcpujI&mute=1`}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '50%',
        }}
      />
    </div>
  );
};

export default YoutubePlayer;
