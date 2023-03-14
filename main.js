import {songs} from './modules/songs.js';
import {updateSong, currentSongIndex, setCurrentSong} from './modules/updateSong.js';

const previousButton = document.querySelector('button.previousTrack')
const nextButton= document.querySelector('button.nextTrack')

previousButton.onclick = ()=>{
    setCurrentSong('previous')
    nextButton.setAttribute('class', 'nextTrack')
    if (currentSongIndex===songs.length-1){
        previousButton.setAttribute('class', 'previousTrack hide')
    }
    updateSong()
}
nextButton.onclick = () => {
    setCurrentSong('next')
    previousButton.setAttribute('class', 'previousTrack')
    if (currentSongIndex===0){
        nextButton.setAttribute('class', 'nextTrack hide')
    }
    updateSong()
}

updateSong()
