import {songs} from './modules/songs.js';
    let currentSongIndex = 0

    const previousButton = document.querySelector('button.previousTrack')
    const nextButton= document.querySelector('button.nextTrack')
    const audioPlayer = document.querySelector('audio')
    const songImage = document.querySelector('img')
    const songText = document.querySelector('.song-name')

    function updateSong() {
        audioPlayer.setAttribute('src', songs[currentSongIndex].filepath)
        songText.textContent = songs[currentSongIndex].name
        songImage.setAttribute('src', songs[currentSongIndex].imageFilepath)
    }

    previousButton.onclick = ()=>{
        currentSongIndex ++
        nextButton.setAttribute('class', 'nextTrack')
        if (currentSongIndex===songs.length-1){
            previousButton.setAttribute('class', 'previousTrack hide')
        }
        updateSong()
    }
    nextButton.onclick = () => {
        currentSongIndex --
        previousButton.setAttribute('class', 'previousTrack')
        if (currentSongIndex===0){
            nextButton.setAttribute('class', 'nextTrack hide')
        }
        updateSong()
    }

    updateSong()
