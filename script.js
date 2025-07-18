// Starry Background Animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    velocity: Math.random() * 0.3 + 0.1
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y -= star.velocity;
    if (star.y < 0) star.y = canvas.height;
  }
  requestAnimationFrame(animateStars);
}
animateStars();

// Songs Database with YouTube and Spotify (extend each mood to 10 songs as needed)
const songsDB = {
  happy: [
    { title: "Happy", artist: "Pharrell Williams", youtube: "https://youtu.be/ZbZSe6N_BXs", spotify: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH", genre: "pop" },
    { title: "Shotgun", artist: "George Ezra", youtube: "https://youtu.be/v_B3qkp4nO4", spotify: "https://open.spotify.com/track/2JzZzZUQj3Qff7wapcbKjc", genre: "pop" },
    { title: "Can't Stop the Feeling", artist: "Justin Timberlake", youtube: "https://youtu.be/ru0K8uYEZWw", spotify: "https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc", genre: "pop" },
    { title: "On Top of the World", artist: "Imagine Dragons", youtube: "https://youtu.be/w5tWYmIOWGk", spotify: "https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ", genre: "rock" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", youtube: "https://youtu.be/OPf0YbXqDm0", spotify: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS", genre: "funk" },
    { title: "Best Day of My Life", artist: "American Authors", youtube: "https://youtu.be/Y66j_BUCBMY", spotify: "https://open.spotify.com/track/1TLV8rjM8SLbN3W4VvqaHz", genre: "pop" },
    { title: "Good Life", artist: "OneRepublic", youtube: "https://youtu.be/q7QQLsC7OEc", spotify: "https://open.spotify.com/track/0J2QdDbelmK6JdEXV4WrO2", genre: "pop" },
    { title: "Brave", artist: "Sara Bareilles", youtube: "https://youtu.be/QUQsqBqxoR4", spotify: "https://open.spotify.com/track/5qmq61DAAOUaW8AUo8xKhh", genre: "pop" },
    { title: "Firework", artist: "Katy Perry", youtube: "https://youtu.be/QGJuMBdaqIw", spotify: "https://open.spotify.com/track/4lCv7b86sLynZbXhfScfm2", genre: "pop" },
    { title: "Shake It Off", artist: "Taylor Swift", youtube: "https://youtu.be/nfWlot6h_JM", spotify: "https://open.spotify.com/track/5WfhXwRh5HdA2OwTN3dF6T", genre: "pop" }
  
  ],
  sad: [
    { title: "Someone Like You", artist: "Adele", youtube: "https://youtu.be/hLQl3WQQoQ0", spotify: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB", genre: "pop" },
    { title: "Let Her Go", artist: "Passenger", youtube: "https://youtu.be/RBumgq5yVrA", spotify: "https://open.spotify.com/track/5Q0Nhxo0l2bP3pNjpGJwV1", genre: "acoustic" },
    { title: "Fix You", artist: "Coldplay", youtube: "https://youtu.be/k4V3Mo61fJM", spotify: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q", genre: "rock" },
    { title: "All I Want", artist: "Kodaline", youtube: "https://youtu.be/mtf7hC17IBM", spotify: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v", genre: "pop" },
    { title: "Say Something", artist: "A Great Big World", youtube: "https://youtu.be/-2U0Ivkn2Ds", spotify: "https://open.spotify.com/track/1i1fxkWeaMmKEB4T7zqbzK", genre: "pop" },
    { title: "Skinny Love", artist: "Birdy", youtube: "https://youtu.be/aNzCDt2eidg", spotify: "https://open.spotify.com/track/5R02WDw3EX9DSh6z4sQByY", genre: "acoustic" },
    { title: "Jealous", artist: "Labrinth", youtube: "https://youtu.be/50VWOBi0VFs", spotify: "https://open.spotify.com/track/5bYMaZft1VjDoMoyCtfXvA", genre: "soul" },
    { title: "Too Good at Goodbyes", artist: "Sam Smith", youtube: "https://youtu.be/J_ub7Etch2U", spotify: "https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx", genre: "pop" },
    { title: "Creep", artist: "Radiohead", youtube: "https://youtu.be/XFkzRNyygfk", spotify: "https://open.spotify.com/track/3H7ihDc1dqLriiWXwsc2po", genre: "rock" },
    { title: "Youth", artist: "Daughter", youtube: "https://youtu.be/VEpMj-tqixs", spotify: "https://open.spotify.com/track/2TS5j37oRQBOeh7q53fYRE", genre: "indie" }
   
  ],
  relaxed: [
    { title: "Weightless", artist: "Marconi Union", youtube: "https://youtu.be/UfcAVejslrU", spotify: "https://open.spotify.com/track/3iNstMZC6z3wOrqHqBc1zH", genre: "instrumental" },
    { title: "Ocean Eyes", artist: "Billie Eilish", youtube: "https://youtu.be/viimfQi_pUw", spotify: "https://open.spotify.com/track/2RSHsoi04658QL5xgQVov3", genre: "pop" },
    { title: "River Flows in You", artist: "Yiruma", youtube: "https://youtu.be/7maJOI3QMu0", spotify: "https://open.spotify.com/track/5mzEwbx6q9rLJtUO5n9Djr", genre: "instrumental" },
    { title: "Sunset Lover", artist: "Petit Biscuit", youtube: "https://youtu.be/4fRr2sQdfjY", spotify: "https://open.spotify.com/track/0fJ9l4l7mvRvX1Jbtds6TC", genre: "electronic" },
    { title: "Bloom", artist: "The Paper Kites", youtube: "https://youtu.be/8inJtTG_DuU", spotify: "https://open.spotify.com/track/0AfE2G0eNn3X2V8xB0O8pM", genre: "indie" },
    { title: "Night Owl", artist: "Galimatias", youtube: "https://youtu.be/HSSuJdxNWvI", spotify: "https://open.spotify.com/track/3Ghxjc3bDztfcU66ZFaT1n", genre: "chill" },
    { title: "Intro", artist: "The xx", youtube: "https://youtu.be/3gxNW2Ulpwk", spotify: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ", genre: "instrumental" },
    { title: "Landslide", artist: "Fleetwood Mac", youtube: "https://youtu.be/WM7-PYtXtJM", spotify: "https://open.spotify.com/track/5ihS6UUlyQAfmp48eSkxuQ", genre: "rock" },
    { title: "Cherry Wine", artist: "Hozier", youtube: "https://youtu.be/SfgK1XK2Geo", spotify: "https://open.spotify.com/track/1ul0ZsHnY0Uo9Rt3F0UbfS", genre: "acoustic" },
    { title: "Somewhere Only We Know", artist: "Keane", youtube: "https://youtu.be/Oextk-If8HQ", spotify: "https://open.spotify.com/track/2gMXnyrvIjhVBUZwvLZDMP", genre: "rock" }
 
  ],
  angry: [
    { title: "Lose Yourself", artist: "Eminem", youtube: "https://youtu.be/_Yhyp-_hX2s", spotify: "https://open.spotify.com/track/1HOMkjp0nHMaTnfAkslCQj", genre: "rap" },
    { title: "Breaking the Habit", artist: "Linkin Park", youtube: "https://youtu.be/v2H4l9RpkwM", spotify: "https://open.spotify.com/track/4G8gkOterJn0Ywt6uhqbhp", genre: "rock" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", youtube: "https://youtu.be/hTWKbfoikeg", spotify: "https://open.spotify.com/track/5ghIJDpPoe3CfHMGu71E6T", genre: "rock" },
    { title: "Stronger", artist: "Kanye West", youtube: "https://youtu.be/PsO6ZnUZI0g", spotify: "https://open.spotify.com/track/0j2T0R9cGphzjz7XC0rCPp", genre: "rap" },
    { title: "Before I Forget", artist: "Slipknot", youtube: "https://youtu.be/Wws7mnMewPw", spotify: "https://open.spotify.com/track/2Yh9pY73nTgKysDd2YQWxC", genre: "metal" },
    { title: "Duality", artist: "Slipknot", youtube: "https://youtu.be/6fVE8kSM43I", spotify: "https://open.spotify.com/track/0HEZpRJbE0Ug1eKlQ6vNbe", genre: "metal" },
    { title: "My Songs Know What You Did in the Dark", artist: "Fall Out Boy", youtube: "https://youtu.be/LkIWmsP3c_s", spotify: "https://open.spotify.com/track/2cOUlop2ZakjOKe4WinesN", genre: "rock" },
    { title: "Down with the Sickness", artist: "Disturbed", youtube: "https://youtu.be/09LTT0xwdfw", spotify: "https://open.spotify.com/track/4xanWVQI2fINapE85iURKq", genre: "metal" },
    { title: "Killing In the Name", artist: "Rage Against The Machine", youtube: "https://youtu.be/bWXazVhlyxQ", spotify: "https://open.spotify.com/track/3YBZIN3rekqsKxbJc9FZko", genre: "rock" },
    { title: "Bulls on Parade", artist: "Rage Against The Machine", youtube: "https://youtu.be/3L4YrGaR8E4", spotify: "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1", genre: "rock" }
  
  ]
};

let currentMood = "";
let currentSongs = [];

function selectMood(mood) {
  currentMood = mood;
  currentSongs = songsDB[mood];

  const genres = [...new Set(currentSongs.map(song => song.genre))];
  const genreDropdown = document.getElementById("genre");
  genreDropdown.innerHTML = `<option value="all">All</option>`;
  genres.forEach(genre => {
    genreDropdown.innerHTML += `<option value="${genre}">${capitalize(genre)}</option>`;
  });

  document.getElementById("controls").style.display = "block";
  document.getElementById("playlistLabel").textContent = `🎧 ${capitalize(mood)} Playlist`;
  displaySongs(currentSongs);
}

function displaySongs(songs) {
  const listDiv = document.getElementById("songList");
  if (songs.length === 0) {
    listDiv.innerHTML = "<p>No songs found for this genre.</p>";
    return;
  }

  listDiv.innerHTML = "<h3>Playlist:</h3>";
  songs.forEach(song => {
    listDiv.innerHTML += `
      <div class="song">
        <strong>${song.title}</strong> – ${song.artist} [${capitalize(song.genre)}]
        <div class="icon-box">
          <a href="${song.youtube}" target="_blank" title="Play on YouTube">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" class="icon" />
          </a>
          <a href="${song.spotify}" target="_blank" title="Play on Spotify">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png" alt="Spotify" class="icon" />
          </a>
        </div>
      </div>`;
  });
}

function filterGenre() {
  const selectedGenre = document.getElementById("genre").value;
  if (!currentMood) return;
  const filtered = selectedGenre === "all" ? currentSongs : currentSongs.filter(song => song.genre === selectedGenre);
  displaySongs(filtered);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// 🎙️ Voice Command Integration using Web Speech API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (window.SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
    console.log("Voice Command:", transcript);

    const moods = ["happy", "sad", "relaxed", "angry"];
    const genres = ["pop", "rock", "funk", "acoustic", "instrumental", "rap"];

    for (const mood of moods) {
      if (transcript.includes("play") && transcript.includes(mood)) {
        selectMood(mood);
        return;
      }
    }

    for (const genre of genres) {
      if (transcript.includes("filter") && transcript.includes(genre)) {
        const dropdown = document.getElementById("genre");
        dropdown.value = genre;
        filterGenre();
        return;
      }
    }
  };

  recognition.onerror = function(event) {
    console.error("Speech recognition error:", event.error);
  };

  recognition.start();
} else {
  console.warn("Web Speech API is not supported in this browser.");
}



// 🎤 Voice Command Recognition
const voiceBtn = document.getElementById("voiceBtn");

voiceBtn.addEventListener("click", () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech Recognition not supported in this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  voiceBtn.textContent = "🎙️ Listening...";

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    voiceBtn.textContent = "🎤 Speak";
    console.log("Voice command:", command);

    // Mood detection
    if (command.includes("happy")) selectMood("happy");
    else if (command.includes("sad")) selectMood("sad");
    else if (command.includes("relaxed")) selectMood("relaxed");
    else if (command.includes("angry")) selectMood("angry");

    // Genre detection
    const allGenres = ["pop", "rock", "rap", "funk", "acoustic", "instrumental"];
    allGenres.forEach(genre => {
      if (command.includes(genre)) {
        document.getElementById("genre").value = genre;
        filterGenre();
      }
    });

  };

  recognition.onerror = (e) => {
    console.warn("Voice recognition error:", e.error);
    voiceBtn.textContent = "🎤 Speak";
  };

  recognition.onend = () => {
    voiceBtn.textContent = "🎤 Speak";
  };
});



function displaySongs(songs) {
  const listDiv = document.getElementById("songList");
  
  // Remove existing animation class to reset animation
  listDiv.classList.remove("pop-animation");

  // Force reflow to allow re-adding the class
  void listDiv.offsetWidth;

  // Add animation class
  listDiv.classList.add("pop-animation");

  if (songs.length === 0) {
    listDiv.innerHTML = "<p>No songs found for this genre.</p>";
    return;
  }

  listDiv.innerHTML = "<h3>Playlist:</h3>";
  songs.forEach(song => {
    listDiv.innerHTML += `
      <div class="song">
        <strong>${song.title}</strong> – ${song.artist} [${capitalize(song.genre)}]
        <div class="icon-box">
          <a href="${song.youtube}" target="_blank" title="Play on YouTube">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" class="icon" />
          </a>
          <a href="${song.spotify}" target="_blank" title="Play on Spotify">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png" alt="Spotify" class="icon" />
          </a>
        </div>
      </div>`;
  });
}
