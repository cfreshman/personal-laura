import { useState } from 'react'
import { X } from '@phosphor-icons/react'
import './ImageGallery.css'

function ImageGallery() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  // Replace these with your actual images and descriptions
  const items = [
    {
      src: 'https://p057.co/:jj94f6tujzg5.pdf',
      description: 'Winter flounder habitat model. Made using ArcGIS.'
    },
    {
      src: 'https://p057.co/:efietg16xepo.pdf',
      description: 'Artistic land use map of San Antonio, TX. Made using QGIS and Adobe Illustrator'
    },
    {
      src: 'https://p057.co/:ggzcpho4yhm0.pdf',
      description: 'Suitable nesting habitat for M. terrapin in New Jersey. Made using ArcGIS.'
    },
  ]

  const isPDF = (src) => src.toLowerCase().endsWith('.pdf')

  const handleItemClick = (index) => {
    setExpandedIndex(index)
  }

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
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
              />
            ) : (
              <img src={items[expandedIndex].src} className='modal-image' alt={items[expandedIndex].description} />
            )}
          </div>
          <button className='modal-close' onClick={() => setExpandedIndex(null)}>
            <X size={24} weight="bold" />
          </button>
        </div>
      )}
    </>
  )
}

export default ImageGallery

