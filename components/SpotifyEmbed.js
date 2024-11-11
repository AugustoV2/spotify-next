// components/SpotifyEmbed.js
import React from 'react';

const SpotifyEmbed = () => {
  const playlistId = '64bRo6HsoeR6Yc8tqljOjP';

  return (
    <div>
     
      <iframe
        title="Spotify Embed: Recommendation Playlist"
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: '360px' }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyEmbed;
