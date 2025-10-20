import { useState } from 'react'
import { Copy, Check } from '@phosphor-icons/react'
import './Contact.css'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'lauractsang@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCopy()
    }
  }

  return (
    <div className='contact' onClick={handleCopy} onKeyDown={handleKeyDown} role='button' tabIndex={0} aria-label='Copy email to clipboard'>
      <span className='contact-label'>Contact: </span>
      <span className='contact-email'>
        <span className='email-user'>lauractsang</span>
        <span className='email-at'>@</span>
        <span className='email-domain'>gmail.com</span>
      </span>
      {copied ? (
        <Check size={16} weight="bold" className='copy-icon' />
      ) : (
        <Copy size={16} weight="regular" className='copy-icon' />
      )}
    </div>
  )
}

export default Contact

