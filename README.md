🎶 Hind-ke-Sitara Music Web Application

🌐 Live Demo
[🔗 Visit the Live Website – Legal Justice](https://hindmusic.netlify.app/)

A modern, responsive full-stack music web application inspired by platforms like Spotify. Built with HTML, CSS, JavaScript (frontend), and Node.js, Express, and MongoDB (backend), it demonstrates strong full-stack development skills, featuring a clean UI/UX, secure authentication, and music streaming capabilities.

📌 Project Overview

Hind-ke-Sitara allows users to:

Browse albums and play songs with interactive controls

Register & log in securely (with encrypted passwords)

Download songs (exclusive feature for registered users)

🚀 Technologies Used
Frontend

🎨 HTML5 & CSS3 – Semantic structure & responsive styling
🧠 Vanilla JavaScript (ES6+) – Client-side logic & interactivity
🔗 Fetch API – Handling async communication with backend

Backend

⚡ Node.js – Runtime environment
🛠️ Express.js – API framework
🗄️ MongoDB Atlas – Cloud-hosted database
📌 Mongoose – ODM for database operations
🔐 bcrypt.js – Password hashing & authentication
🌍 CORS – Cross-origin resource sharing
🔑 Dotenv – Secure environment variable management


🛠️ Features

✅ Fully responsive design (mobile & desktop)
✅ Secure user authentication (bcrypt.js ready)
✅ Music playback with play, pause, skip, shuffle, and loop
✅ Playlist browsing with album support
✅ Download songs (for registered users only)


📂 Project Structure
```bash

Hind-Ke-Sitara-Music-App/
├── .gitignore
├── backend/
│   ├── .env
│   ├── models/
│   │   └── User.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── css/style.css
    ├── js/
    │   ├── songs.js
    │   └── script.js
    └── assets/
        ├── images/
        └── music/
```

📷 Screenshots

(Add screenshots of your music app UI here – playlists, player, login page, etc.)

📤 Deployment

Frontend → Deploy on Vercel/Netlify (static hosting)

Backend → Deploy on Heroku/Render with MongoDB Atlas cluster

Configure CORS to allow frontend-backend communication


🚀 Getting Started
✅ Prerequisites
🧑‍💻 Installation & Development

Node.js & npm

MongoDB Atlas
 account

VS Code with Live Server extension (recommended)

🔧 Backend Setup
# Clone repository
```
git clone https://github.com/your-username/Hind-Ke-Sitara-Music-App.git
cd Hind-Ke-Sitara-Music-App/backend
```
# Install dependencies
```
npm install
```

Create .env in /backend with:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbName
PORT=3000
```

Start server:

npm start


Server runs at: http://localhost:3000

💻 Frontend Setup

Open frontend/ in VS Code

Right-click index.html → Open with Live Server

App will run at http://127.0.0.1:5500

⚠️ If your Live Server port differs, update the CORS origin in backend/server.js.

📋 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Log in an existing user

🔮 Future Enhancements

🎼 Create & manage playlists

🔍 Search functionality for songs/artists

❤️ Dedicated "Liked Songs" playlist

🛠️ Admin panel to upload & manage songs

☁️ Deployment to Vercel/Netlify (frontend) + Heroku/Render (backend)

🙌 Credits

This project, built by Manas Pandey, showcases full-stack web development skills (frontend and backend) through a real-world music player application.
