const audio = document.getElementById('myAudio');
const progressBar = document.getElementById('progressBar');
const playButton = document.querySelector('.botao-play');
const pauseButton = document.querySelector('.botao-pause');
const startDisplay = document.querySelector('.start');
const endDisplay = document.querySelector('.end');

// Function to play the audio
function playAudio() {
  audio.play();
  playButton.classList.add('hidden'); // Hide the play button
  pauseButton.classList.remove('hidden'); // Show the pause button
}

// Function to pause the audio
function pauseAudio() {
  audio.pause();
  playButton.classList.remove('hidden'); // Show the play button
  pauseButton.classList.add('hidden'); // Hide the pause button
}

// Update the progress bar and time display
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;

  // Format the time for display
  const formattedCurrentTime = formatTime(audio.currentTime);
  const formattedDuration = formatTime(audio.duration);
  startDisplay.textContent = formattedCurrentTime;
  endDisplay.textContent = formattedDuration;
});

// Helper function to format time (optional)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Add event listeners for play/pause buttons
playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);

// ... (Add code for previous/next track functionality, etc.)
