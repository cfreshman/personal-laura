import { useState } from 'react'
import { X } from '@phosphor-icons/react'
import './ImageGallery.css'

function ImageGallery() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  // Replace these with your actual images and descriptions
  const items = [
    {
      src: 'https://p057.co/:tcry663gae2y.png',
      description: 'Winter flounder habitat model. Made using ArcGIS.'
    },
    {
      src: 'https://p057.co/:5j78avh1262l.png',
      description: 'Artistic land use map of San Antonio, TX. Made using QGIS and Adobe Illustrator'
    },
    {
      src: 'https://p057.co/:mfrf7ltv8fcq.png',
      description: 'Suitable nesting habitat for M. terrapin in New Jersey. Made using ArcGIS.'
    },
  ]

  const isPDF = (src) => src.toLowerCase().endsWith('.pdf')

  const handleItemClick = (index) => {
    setExpandedIndex(index)
  }

  const handleClose = () => {
    setExpandedIndex(null)
  }

  const handleImageClick = (e) => {
    e.stopPropagation()
    
    const img = e.target
    const rect = img.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Calculate actual image dimensions within the container
    const imgAspect = img.naturalWidth / img.naturalHeight
    const containerAspect = rect.width / rect.height
    
    let actualWidth, actualHeight, offsetX, offsetY
    
    if (containerAspect > imgAspect) {
      // Letterboxed on sides
      actualHeight = rect.height
      actualWidth = actualHeight * imgAspect
      offsetX = (rect.width - actualWidth) / 2
      offsetY = 0
    } else {
      // Letterboxed on top/bottom
      actualWidth = rect.width
      actualHeight = actualWidth / imgAspect
      offsetX = 0
      offsetY = (rect.height - actualHeight) / 2
    }
    
    // Check if click is outside the actual image
    if (x < offsetX || x > offsetX + actualWidth || y < offsetY || y > offsetY + actualHeight) {
      setExpandedIndex(null)
    }
  }

  return (
    <>
      <div className='image-gallery'>
        <div className='gallery-scroll'>
          {items.map((item, index) => (
            <div key={index} className='gallery-item' onClick={() => handleItemClick(index)}>
              {isPDF(item.src) ? (
                <iframe 
                  src={item.src} 
                  className='gallery-pdf'
                  title={item.description}
                />
              ) : (
                <img src={item.src} className='gallery-image' />
              )}
              <p className='gallery-description'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {expandedIndex !== null && (
        <div className='gallery-modal' onClick={handleClose}>
          <div className='modal-content'>
            {isPDF(items[expandedIndex].src) ? (
              <iframe 
                src={items[expandedIndex].src} 
                className='modal-pdf'
                title={items[expandedIndex].description}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img 
                src={items[expandedIndex].src} 
                className='modal-image' 
                alt={items[expandedIndex].description}
                onClick={handleImageClick}
              />
            )}
          </div>
          <button className='modal-close' onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }}>
            <X size={24} weight="bold" />
          </button>
        </div>
      )}
    </>
  )
}

export default ImageGallery

