import React from 'react'

function CustomButton({ label, onClick }) {
  return (
    <button className="cust-button" onClick={onClick}>
        
      {label}
    </button>
  )
}

export default CustomButton