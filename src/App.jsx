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
        <Contact />
        <AudioPlayer 
          src="/golden.m4a"
          title="Golden"
          artist="HUNTR/X"
          albumArt="/golden.jpeg"
        />
        <ImageGallery />
        <LifeMap />
      </div>
      <div className='footer' style={{ background: gradient }}>
      </div>
    </>
  )
}

export default App
