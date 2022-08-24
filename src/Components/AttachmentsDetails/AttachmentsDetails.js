import React from 'react'
import BoxContainer from '../BoxContainer/BoxContainer'
import Buttons from '../Buttons/Buttons'
import TextComponent from '../TextComponent/TextComponent'
import './AttachmentsDetails.css'
const AttachmentsDetails = () => {
  return (
    <BoxContainer className='boxAttachmentsDetails'>
        <TextComponent label = "Resume/CV*" CustomTag = "span" className = 'Resume'/>
        <TextComponent label = "(Accept format: doc/.docx/.pdf;Size: 1MB)" CustomTag = "span" className = 'Accept-format'/>
        <Buttons label = "Choose File" className = 'Choose-File'/>
    </BoxContainer>
  )
}

export default AttachmentsDetails