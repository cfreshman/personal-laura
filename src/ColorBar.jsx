import { useMemo } from 'react'
import './ColorBar.css'

function ColorBar() {
  const gradient = useMemo(() => {
    const numStops = 100
    const minHueDiff = 36 // 10% of 360
    let lastHue = null
    
    const hues = Array.from({ length: numStops }, () => {
      let hue
      let attempts = 0
      const maxAttempts = 50
      
      do {
        hue = Math.floor(Math.random() * 360)
        attempts++
      } while (
        lastHue !== null && 
        (Math.abs(hue - lastHue) < minHueDiff || Math.abs(hue - lastHue) > (360 - minHueDiff)) &&
        attempts < maxAttempts
      )
      
      lastHue = hue
      return hue
    })
    
    const colorStops = hues.map((hue, index) => {
      const position = (index / (numStops - 1)) * 100
      return `hsl(${hue}, 100%, 80%) ${position}%`
    }).join(', ')
    
    return `linear-gradient(to right, ${colorStops})`
  }, [])

  return (
    <div className='color-bar' style={{ background: gradient }}>
      <div className='color-bar-text-container'>
        <div className='color-bar-text'>LAURA TSANG</div>
      </div>
    </div>
  )
}

export default ColorBar

