import React from 'react'
import TextComponent from '../TextComponent/TextComponent';
//import css from "";
import './header.css'
const Header = () => {
  return (
        <div className='div-header'>
          <TextComponent  label="INCRESCO TECHNOLOGIES" className="text1"/>
          <TextComponent  label="CAMPUS HIRING-2023" className="text2"/>
        </div>
  )
}

export default Header;