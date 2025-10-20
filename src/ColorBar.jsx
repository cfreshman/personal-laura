import './ColorBar.css'

function ColorBar({ gradient }) {
  return (
    <div className='color-bar' style={{ background: gradient }}>
      <div className='color-bar-text-container'>
        <div className='color-bar-text'>LAURA TSANG</div>
      </div>
    </div>
  )
}

export default ColorBar

