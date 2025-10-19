import { MapContainer, TileLayer, CircleMarker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useIsMobile } from './utils'
import './LifeMap.css'

function LifeMap() {
  const isMobile = useIsMobile()
  
  const locations = [
    { city: 'Newport News, VA', year: 'Born', lat: 37.0871, lng: -76.4730 },
    { city: 'Brick, NJ', year: '2003', lat: 40.0576, lng: -74.1043 },
    { city: 'Boston, MA', year: 'College', lat: 42.3601, lng: -71.0589 }
  ]

  const positions = locations.map(loc => [loc.lat, loc.lng])
  const bounds = L.latLngBounds(positions)
  const padding = isMobile ? [10, 10] : [30, 30]

  return (
    <div className='life-map'>
      <div className='map-header'>Map of my life</div>
      <MapContainer 
        bounds={bounds}
        boundsOptions={{ padding }}
        className='map-container'
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        <Polyline positions={positions} color="black" dashArray="5, 10" weight={2} />
        
        {locations.map((location, index) => (
          <CircleMarker 
            key={index} 
            center={[location.lat, location.lng]}
            radius={8}
            pathOptions={{ 
              fillColor: 'black', 
              fillOpacity: 1, 
              color: 'black',
              weight: 2 
            }}
          >
            <Popup>
              <div className='popup-content'>
                <strong>{location.city}</strong>
                <div>{location.year}</div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  )
}

export default LifeMap

