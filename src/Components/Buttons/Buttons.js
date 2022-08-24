import React from 'react'

const Buttons = (props) => {
    const {type = 'button',label,className} = props
  return (
    <button type = {type}className={className}>{label}</button>
  )
}

export default Buttons