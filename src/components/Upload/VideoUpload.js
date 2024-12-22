import React, {useState} from 'react'
import './index.css' // Assuming you have a CSS file for styling

const VideoUpload = () => {
  const [videoUrl, setVideoUrl] = useState('')

  const handleUpload = () => {
    console.log(`Video uploaded from URL: ${videoUrl}`)
  }

  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      <input
        type="text"
        placeholder="Google Drive Video URL"
        value={videoUrl}
        onChange={e => setVideoUrl(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default VideoUpload
