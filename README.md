🎶 Hind Ke Sitara - A Full-Stack Music Web Application

Hind Ke Sitara is a modern, responsive music player web app inspired by platforms like Spotify. It allows users to browse, stream, and interact with songs across albums. The app also features a secure authentication system (Node.js + MongoDB) and premium features, including song downloading, for registered users.



✨ Features

🎨 Dynamic & Responsive UI – Works seamlessly across desktop and mobile.

🔐 User Authentication – Secure user registration and login system.
Passwords are encrypted using bcrypt.js before being stored in the database.

🎵 Music Playback Controls – Play, pause, skip, seek, adjust volume, shuffle, and loop.

📂 Playlist Browsing – Browse and play songs from different albums/playlists.

💎 Freemium Model – Guests can stream; registered users can also download songs.

🛠️ Tech Stack
Backend

Node.js – Runtime environment

Express.js – Web framework for APIs

MongoDB Atlas – Cloud-hosted NoSQL database

Mongoose – ODM for MongoDB

bcrypt.js – Password hashing

CORS – Cross-Origin support

Dotenv – Secure environment variables

Frontend

HTML5 & CSS3 – UI structure and styling

Vanilla JavaScript (ES6+) – Client-side logic

Fetch API – Asynchronous backend requests

📂 Project Structure
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

🚀 Getting Started
✅ Prerequisites

Node.js & npm

MongoDB Atlas
 account

VS Code with Live Server extension (recommended)

🔧 Backend Setup
# Clone repository
git clone https://github.com/Manas22-creator/Hind-ke-Sitara
cd Hind-Ke-Sitara-Music-App/backend

# Install dependencies
npm install


Create .env in /backend with:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbName
PORT=3000


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

📄 License

This project is licensed under the MIT License.
See the LICENSE
 file for more details.
