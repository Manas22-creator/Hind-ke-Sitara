document.addEventListener("DOMContentLoaded", () => {
    // --- Global Variables ---
    let currentSong = new Audio();
    let currentAlbumId = "bhakti_bhajan";
    let currentSongIndex = 0;
    let isLooping = false;

    // --- DOM Element References (unchanged) ---
    const playBtn = document.getElementById("play");
    const prevBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const shuffleBtn = document.getElementById("shuffle");
    const muteBtn = document.getElementById("mute");
    const songListUL = document.querySelector(".song-list ul");
    const songInfo = document.querySelector(".song-info");
    const songTime = document.querySelector(".song-time");
    const seekbar = document.querySelector(".seekbar");
    const circle = document.querySelector(".circle");
    const volumeSlider = document.getElementById("volume-slider");
    const albumCards = document.querySelectorAll(".card");
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const leftPanel = document.querySelector(".left");

    // Auth related DOM elements
    const headerButtons = document.getElementById("header-buttons");
    const modalOverlay = document.getElementById("modal-overlay");
    const signupModal = document.getElementById("signup-modal");
    const loginModal = document.getElementById("login-modal");
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const closeModalBtns = document.querySelectorAll(".close-modal-btn");

    // --- Helper Function (unchanged) ---
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return "00:00";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    // --- UI Update Functions (Now rely on currentUser in localStorage) ---
    function updateUIForLogin(username) {
        headerButtons.innerHTML = `
            <span style="font-weight: bold; margin-right: 15px;">Welcome, ${username}</span>
            <button id="logout-btn" class="login-btn">Logout</button>
        `;
        document.getElementById("logout-btn").addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            updateUIForLogout();
            loadAlbum(currentAlbumId); // Reload album to show login prompts
        });
    }

    function updateUIForLogout() {
        headerButtons.innerHTML = `
            <button class="signup-btn">Sign up</button>
            <button class="login-btn">Log in</button>
        `;
        headerButtons.querySelector(".signup-btn").addEventListener("click", () => showModal(signupModal));
        headerButtons.querySelector(".login-btn").addEventListener("click", () => showModal(loginModal));
    }

    // --- Core Player Functions (Mostly unchanged) ---
    function loadAlbum(albumId) {
        currentAlbumId = albumId;
        const albumSongs = albums[albumId].songs;
        const currentUser = localStorage.getItem("currentUser");

        if (!albumSongs || albumSongs.length === 0) {
            songListUL.innerHTML = "<li>No songs in this playlist.</li>";
            return;
        }

        let listItems = "";
        albumSongs.forEach((song, index) => {
            const downloadElement = currentUser ?
                `<a href="${song.filePath}" download="${song.name}.mp3" class="download-btn">
                    <img src="assets/images/download.svg" alt="Download">
                 </a>` :
                `<span class="prompt-login-btn">
                    <img src="assets/images/download.svg" alt="Download">
                 </span>`;

            listItems += `
                <li data-index="${index}">
                    <img src="assets/images/music.svg" alt="music icon">
                    <div class="info">
                        <div>${song.name}</div>
                        <div>Artist</div>
                    </div>
                    <div class="play-now">
                        ${downloadElement}
                        <span>Play Now</span>
                        <img src="assets/images/play.svg" alt="play icon">
                    </div>
                </li>`;
        });
        songListUL.innerHTML = listItems;
    }

    function playMusic(songIndex) {
        const albumSongs = albums[currentAlbumId].songs;
        if (!albumSongs || !albumSongs[songIndex]) return;
        const song = albumSongs[songIndex];
        currentSongIndex = songIndex;
        currentSong.src = song.filePath;
        currentSong.play();
        playBtn.src = "assets/images/pause.svg";
        songInfo.innerHTML = song.name;
    }

    // playNextSong and other player functions remain the same...
    function playNextSong() {
        const albumSongs = albums[currentAlbumId].songs;
        if (albumSongs.length === 0) return;
        let nextIndex = isLooping ? (currentSongIndex + 1) % albumSongs.length : Math.floor(Math.random() * albumSongs.length);
        playMusic(nextIndex);
    }

    // --- Authentication and Modal Logic ---
    function showModal(modal) {
        modalOverlay.classList.remove("hidden");
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modalOverlay.classList.add("hidden");
        signupModal.classList.add("hidden");
        loginModal.classList.add("hidden");
    }

    // --- Main Initialization ---
    function initializePlayer() {
        const currentUser = localStorage.getItem("currentUser");
        if (currentUser) {
            updateUIForLogin(currentUser);
        } else {
            updateUIForLogout();
        }

        loadAlbum(currentAlbumId);

        // --- Event Listeners ---
        menuBtn.addEventListener("click", () => leftPanel.classList.add("open"));
        closeBtn.addEventListener("click", () => leftPanel.classList.remove("open"));

        albumCards.forEach(card => {
            card.addEventListener("click", () => {
                const albumId = card.dataset.album;
                loadAlbum(albumId);
                playMusic(0);
            });
        });

        songListUL.addEventListener("click", (e) => {
            const li = e.target.closest("li");
            if (!li) return;
            if (e.target.closest('.download-btn')) { e.stopPropagation(); return; }
            if (e.target.closest('.prompt-login-btn')) {
                e.stopPropagation();
                showModal(loginModal);
                return;
            }
            playMusic(parseInt(li.dataset.index));
            leftPanel.classList.remove("open");
        });

        // All other player control event listeners remain the same...
        shuffleBtn.addEventListener("click", () => { isLooping = !isLooping; shuffleBtn.src = isLooping ? "assets/images/loop.svg" : "assets/images/shuffle.svg"; });
        currentSong.addEventListener("ended", playNextSong);
        nextBtn.addEventListener("click", playNextSong);
        prevBtn.addEventListener("click", () => playMusic((currentSongIndex - 1 + albums[currentAlbumId].songs.length) % albums[currentAlbumId].songs.length));
        playBtn.addEventListener("click", () => { if (currentSong.src) { if (currentSong.paused) { currentSong.play(); playBtn.src = "assets/images/pause.svg"; } else { currentSong.pause(); playBtn.src = "assets/images/play.svg"; } } });
        currentSong.addEventListener("timeupdate", () => { const { currentTime, duration } = currentSong; songTime.innerHTML = `${formatTime(currentTime)} / ${formatTime(duration)}`; if (duration) circle.style.left = `${(currentTime / duration) * 100}%`; });
        seekbar.addEventListener("click", (e) => { if (currentSong.duration) currentSong.currentTime = (e.offsetX / seekbar.getBoundingClientRect().width) * currentSong.duration; });
        muteBtn.addEventListener("click", () => { currentSong.muted = !currentSong.muted; muteBtn.src = currentSong.muted ? "assets/images/mute.svg" : "assets/images/volume.svg"; volumeSlider.value = currentSong.muted ? 0 : currentSong.volume * 100; });
        volumeSlider.addEventListener("input", (e) => { currentSong.volume = e.target.value / 100; currentSong.muted = currentSong.volume === 0; muteBtn.src = currentSong.muted ? "assets/images/mute.svg" : "assets/images/volume.svg"; });

        // --- MODIFIED: Form submission logic now uses fetch to call the backend API ---
        closeModalBtns.forEach(btn => btn.addEventListener("click", closeModal));
        modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });

        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("signup-username").value.trim();
            const password = document.getElementById("signup-password").value;

            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                alert(data.message);
                if (response.ok) {
                    signupForm.reset();
                    closeModal();
                }
            } catch (error) {
                alert('An error occurred. Please try again.');
            }
        });

        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value;

            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                alert(data.message);
                if (response.ok) {
                    localStorage.setItem("currentUser", data.username);
                    updateUIForLogin(data.username);
                    loadAlbum(currentAlbumId);
                    loginForm.reset();
                    closeModal();
                }
            } catch (error) {
                alert('An error occurred. Please try again.');
            }
        });
    }

    initializePlayer();
});