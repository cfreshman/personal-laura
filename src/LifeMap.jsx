import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useIsMobile } from './utils'
import './LifeMap.css'

function LifeMap() {
  const isMobile = useIsMobile()
  
  const locations = [
    { city: 'Newport News, VA', year: 'Born', lat: 37.0871, lng: -76.4730 },
    { city: 'Brick, NJ', year: '2003', lat: 40.0576, lng: -74.1043 },
    { city: 'Boston, MA', year: 'College', lat: 42.3601, lng: -71.0589 },
    { city: 'Providence, RI', year: 'Work', lat: 41.8211751, lng: -71.4136608 },
  ]

  const positions = locations.map(loc => [loc.lat, loc.lng])
  const bounds = L.latLngBounds(positions)
  const padding = isMobile ? [10, 10] : [30, 30]

  // Create custom numbered icons
  const createNumberedIcon = (number) => {
    return L.divIcon({
      className: 'numbered-marker',
      html: `<div class="marker-circle">${number}</div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    })
  }

  return (
    <div className='life-map'>
      <div className='map-header'>Map of My Life</div>
      <MapContainer 
        bounds={bounds}
        boundsOptions={{ padding }}
        className='map-container'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        <Polyline positions={positions} color="black" dashArray="5, 10" weight={2} />
        
        {locations.map((location, index) => (
          <Marker 
            key={index} 
            position={[location.lat, location.lng]}
            icon={createNumberedIcon(index + 1)}
          >
            <Popup>
              <div className='popup-content'>
                <strong>{location.city}</strong>
                <div>{location.year}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default LifeMap

