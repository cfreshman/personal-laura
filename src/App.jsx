import './App.css'
import AudioPlayer from './AudioPlayer'
import LifeMap from './LifeMap'
import ColorBar from './ColorBar'
import ImageGallery from './ImageGallery'
import Contact from './Contact'
import { useColorGradient } from './useColorGradient'
import { useEffect } from 'react'

function App() {
  const gradient = useColorGradient()
  
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.origin === 'https://embed.gallery' && e.data.type === 'navigate') {
        window.location.href = e.data.url
      }
    }
    
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])
  
  return (
    <>
      <div className='header'>
        <ColorBar gradient={gradient} />
      </div>
      <div className='content'>
        <div className='text-box'>
          <p>I'm a regional planner for the state of Massachusetts!</p>
          <p>In my free time I enjoy tennis, other outdoor activities, and various crafts.</p>
        </div>
        <div/>
        <Contact />
        <AudioPlayer 
          src="/golden.m4a"
          title="Golden"
          artist="HUNTR/X"
          albumArt="/golden.jpeg"
        />
        <div/>
        <div className='text-box'>
          <p>Artifacts</p>
        </div>
        <ImageGallery />
        <div/>
        <div className='text-box'>
          <p>Where I've lived</p>
        </div>
        <LifeMap />
        <div/>
        <div className='text-box'>
          <p>Thanks for viewing!</p>
        </div>
        <div className='thanks-section'>
          <img src="/icon.png" alt="icon" className='thanks-icon' />
        </div>
        <div className='webring-container'>
          <iframe 
            src="https://embed.gallery/insert/68fd358cbe543d9db3af8d28" 
            width="300" 
            height="80" 
            frameBorder="0"
            title="webring"
          />
        </div>
      </div>
      <div className='footer' style={{ background: gradient }}>
      </div>
    </>
  )
}

export default App
