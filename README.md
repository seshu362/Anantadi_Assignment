# Video Management App

A React-based video management application that allows users to log in, upload videos, view a list of videos, and view detailed information for each video.

## Features

- **User Authentication**: Login functionality using email and password.
- **Video Upload**: Upload videos using a URL (Google Drive URL).
- **Video List**: Displays a list of uploaded videos with basic information.
- **Video Details**: Shows detailed information for a selected video.

## Technologies Used

- **Frontend**: React, React Router, CSS
- **Backend**: Node.js, Express.js (Optional, if implemented in the future)
- **Database**: SQLite or MongoDB (Optional, if implemented in the future)
- **Authentication**: React Context API for managing authentication state
- **Styling**: Custom CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/video-management-app.git

## Project Structure
```
/video-management-app
|-- /src
|   |-- /components
|   |   |-- Auth
|   |   |   |-- Login.js
|   |   |-- Upload
|   |   |   |-- VideoUpload.js
|   |   |-- VideoList
|   |   |   |-- VideoCard.js
|   |   |   |-- VideoList.js
|   |   |-- VideoDetails
|   |   |   |-- VideoDetails.js
|   |-- /context
|   |   |-- AuthContext.js
|   |-- /services
|   |   |-- api.js
|   |-- App.js
|   |-- index.js
|   |-- styles.css
|-- .env
|-- Dockerfile
|-- docker-compose.yml
|-- package.json
|-- README.md
