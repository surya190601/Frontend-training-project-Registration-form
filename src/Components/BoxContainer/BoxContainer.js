import React from 'react'
const BoxContainer = (props) => {
  const {children,className} = props
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default BoxContainer