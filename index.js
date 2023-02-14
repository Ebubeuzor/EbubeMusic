const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//  song titles
const songs = ['music1', 'music2','music3'];

// keep track of songs
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function pauseSong2() {
    musicContainer.classList.remove('play');
    playBtn.querySelector(`i.fas`).classList.remove('fa-pause');
    playBtn.querySelector(`i.fas`).classList.add('fa-play');
    audio.pause();
}

function prevSong2() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong2();
}

function nextSong2() {
    songIndex++;
    if (songIndex > songs.length -1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong2();
}
      
function playSong2() {
    musicContainer.classList.add('play');
    playBtn.querySelector(`i.fas`).classList.remove('fa-play');
    playBtn.querySelector(`i.fas`).classList.add('fa-pause');
    audio.play();
}

function updateProgress2(e) {
    // console.log(e.srcElement.currentTime);
    let {duration,currentTime} = e.srcElement;
    const musicUpdate = (currentTime/duration) * 100;
    progress.style.width = `${musicUpdate}%`
}

function setProgress2(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width) * duration;
}

playBtn.addEventListener('click',function() {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong2();
    } else {
        playSong2();
    }
})

prevBtn.addEventListener('click', prevSong2);
nextBtn.addEventListener('click',nextSong2);


audio.addEventListener('timeupdate', updateProgress2);
audio.addEventListener('ended', nextSong2);
progressContainer.addEventListener('click',setProgress2)














