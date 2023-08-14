const songs = [
  { title: 'Song 1', source: 'C:/Users/dell/Downloads/Baarish Hai Jaanam Stebin Ben 128 Kbps.mp3' },
  { title: 'Song 2', source: 'C:/Users/dell/Downloads/Chandni Sachet Tandon 128 Kbps.mp3' },
  // Add more songs here
];

const songList = document.getElementById('song-list');
const audioPlayer = document.getElementById('audio');

function createSongList() {
  songs.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = song.title;
    listItem.setAttribute('data-index', index);
    songList.appendChild(listItem);
  });
}

function playSong(event) {
  const listItem = event.target.closest('li');
  if (!listItem) return; // Clicked outside of a list item

  const index = listItem.getAttribute('data-index');
  const selectedSong = songs[index];
  
  if (!selectedSong) return; // Invalid song index
  
  audioPlayer.src = selectedSong.source;
  audioPlayer.play()
    .catch(error => {
      console.error('Error playing audio:', error);
    });
}

songList.addEventListener('click', playSong);

document.addEventListener('DOMContentLoaded', () => {
  createSongList();
});
ssss