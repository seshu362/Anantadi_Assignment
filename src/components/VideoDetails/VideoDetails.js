import React from 'react'
import {useParams} from 'react-router-dom'
import './index.css'

const VideoDetails = () => {
  const {id} = useParams()

  return (
    <div className="video-details">
      <h2>Video Details for ID: {id}</h2>
    </div>
  )
}

export default VideoDetails
