import React from 'react'

const InputDropDown = (props) => {
  const {className,data} = props
  return (
    <select className={className}>{
      data.map( (x,y) => 
        <option key={y}>{x}</option> )
    };
    </select>
  )
}

export default InputDropDown