import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Auth/Login'
import VideoUpload from './components/Upload/VideoUpload'
import VideoList from './components/VideoList/VideoList'
import VideoDetails from './components/VideoDetails/VideoDetails'
import {AuthProvider} from './context/AuthContext'

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<VideoUpload />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/videos/:id" element={<VideoDetails />} />
      </Routes>
    </Router>
  </AuthProvider>
)

export default App
