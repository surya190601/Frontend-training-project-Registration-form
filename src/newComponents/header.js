import React from 'react'
import '../Styles/index.css'
const header = (props) => {
    const { title, subtitle } = props
  return (
    <div className="header-card">
        <div className='header-Label1'>{title}</div>
        <div className='header-Label2'>{subtitle}</div>  
    </div>
  )
}

export default header
