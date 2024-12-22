import React from 'react'
import VideoCard from './VideoCard'
import './index.css'

const VideoList = () => {
  const videos = [
    {
      id: 1,
      title: 'Sample Video 1',
      description: 'A test video',
      tags: ['test'],
    },
    {
      id: 2,
      title: 'Sample Video 2',
      description: 'Another test video',
      tags: ['sample'],
    },
  ]

  return (
    <div className="video-list">
      <h2>Your Videos</h2>
      <div className="videos">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default VideoList
