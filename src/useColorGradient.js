import { useMemo } from 'react'

export const useColorGradient = () => {
  return useMemo(() => {
    const screenWidth = window.innerWidth
    const avgDensity = 10 // pixels per color stop on average
    const numStops = Math.floor(screenWidth / avgDensity)
    const minHueDiff = 36 // 10% of 360
    let lastHue = null
    
    const colors = Array.from({ length: numStops }, () => {
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
      return `hsl(${hue}, 100%, 80%)`
    })
    
    // Create hard edges by having each color stop twice
    const colorStops = colors.flatMap((color, index) => {
      const startPos = (index / numStops) * 100
      const endPos = ((index + 1) / numStops) * 100
      return [
        `${color} ${startPos}%`,
        `${color} ${endPos}%`
      ]
    }).join(', ')
    
    return `linear-gradient(to right, ${colorStops})`
  }, [])
}

