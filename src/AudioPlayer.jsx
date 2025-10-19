import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from '@phosphor-icons/react'
import './AudioPlayer.css'

function AudioPlayer({ src, title, artist, albumArt }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('ended', handleEnded)
    
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='audio-player-inline' onClick={togglePlay}>
      <div className='audio-player-section'>
        <img src={albumArt} alt={`${title} album art`} className='album-art-small' />
        
        <div className='player-info'>
          <span className='track-title-small'>{title}</span>
          <span className='track-artist-small'>{artist}</span>
        </div>
      </div>
      
      {/* <div className='separator'></div> */}

      <div className='audio-player-section'>
        <div className='play-button-small'>
          {isPlaying ? <Pause size={20} weight="fill" /> : <Play size={20} weight="fill" />}
        </div>
      </div>
      
      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        <source src={src.replace('.mp3', '.m4a')} type="audio/mp4" />
      </audio>
    </div>
  )
}

export default AudioPlayer

