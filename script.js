// Define your playlist as an array of objects
let playlist = [
	{
		title: "maan meri jaan",
		artist: "king",
		file: "/song1.mp3"
	},
	{
		title: "song2",
		artist: "arjit singh",
		file: "/song2.mp3"
	},
	{
		title: "raatan lambiyan",
		artist: "arjit singh",
		file: "/song3.mp3"
	},
];

// Define the audio player object and initialize it with the first song in the playlist
let audioPlayer = new Audio();
audioPlayer.src = playlist[0].file;

// Define the loadSong function to load a song from the playlist
function loadSong(index) {
	audioPlayer.src = playlist[index].file;
	audioPlayer.play();

	// Update the song information in the UI
	document.getElementById("song-title").textContent = playlist[index].title;
	document.getElementById("song-artist").textContent = playlist[index].artist;
}

// Load the first song in the playlist when the page loads
window.addEventListener("load", function() {
	loadSong(0);
});

// Define the play and pause buttons
document.getElementById("play-button").addEventListener("click", function() {
	audioPlayer.play();
});

document.getElementById("pause-button").addEventListener("click", function() {
	audioPlayer.pause();
});

// Define the next and previous buttons
let currentSongIndex = 0;
document.getElementById("next-button").addEventListener("click", function() {
	currentSongIndex++;
	if (currentSongIndex >= playlist.length) {
		currentSongIndex = 0;
	}
	loadSong(currentSongIndex);
});

document.getElementById("previous-button").addEventListener("click", function() {
	currentSongIndex--;
	if (currentSongIndex < 0) {
		currentSongIndex = playlist.length - 1;
	}
	loadSong(currentSongIndex);
});
// Define the play and pause buttons
let playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
	if (audioPlayer.paused) {
		audioPlayer.play();
		playButton.innerHTML = '<i class="fas fa-pause"></i>';
	} else {
		audioPlayer.pause();
		playButton.innerHTML = '<i class="fas fa-play"></i>';
	}
});

// Define the event listener for when the audio finishes playing
audioPlayer.addEventListener("ended", function() {
	playButton.innerHTML = '<i class="fas fa-play"></i>';

	// Automatically play the next song in the playlist
	currentSongIndex++;
	if (currentSongIndex >= playlist.length) {
		currentSongIndex = 0;
	}
	loadSong(currentSongIndex);
});
