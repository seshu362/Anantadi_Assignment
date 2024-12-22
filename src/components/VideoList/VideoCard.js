import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  // Handler for keyboard interactions (Enter/Space)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/videos/${video.id}`);
    }
  };

  return (
    <div
      className="video-card"
      onClick={() => navigate(`/videos/${video.id}`)}
      onKeyDown={handleKeyPress} // Adding keyboard interaction
      tabIndex="0" // Making the div focusable
      role="button" // Defining the role as a button
      aria-label={`Go to ${video.title} details`} // Descriptive label for screen readers
    >
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoCard;
