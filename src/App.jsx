import './App.css'
import AudioPlayer from './AudioPlayer'

function App() {
  return (
    <>
      <div className='header'>Laura Tsang</div>
      <div className='content'>
        <p>I'm an urban planner for the state of Massachusetts!</p>
        <p>In my free time I enjoy tennis, other outdoor activities, and various crafts.</p>
        <br/>
        <AudioPlayer 
          src="/golden.m4a"
          title="Golden"
          artist="HUNTR/X"
          albumArt="/golden.jpeg"
        />
      </div>
      <div className='footer'>
        Laura Tsang 2025
      </div>
    </>
  )
}

export default App
