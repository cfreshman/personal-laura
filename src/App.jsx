import './App.css'
import AudioPlayer from './AudioPlayer'
import LifeMap from './LifeMap'
import ColorBar from './ColorBar'
import ImageGallery from './ImageGallery'
import Contact from './Contact'
import { useColorGradient } from './useColorGradient'

function App() {
  const gradient = useColorGradient()
  
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
      </div>
      <div className='footer' style={{ background: gradient }}>
      </div>
    </>
  )
}

export default App
