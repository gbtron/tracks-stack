import {songs} from './songs.js'

const audioPlayer = document.querySelector('audio')
const songImage = document.querySelector('img')
const songText = document.querySelector('.song-name')

let currentSongIndex = 0
function setCurrentSong(direction){
    if (direction==='previous'){currentSongIndex ++}
    else if (direction ==='next') {currentSongIndex--}
}

function updateSong() {
    audioPlayer.setAttribute('src', songs[currentSongIndex].filepath)
    songText.textContent = songs[currentSongIndex].name
    songImage.setAttribute('src', songs[currentSongIndex].imageFilepath)
}  

export {updateSong, currentSongIndex, setCurrentSong}


