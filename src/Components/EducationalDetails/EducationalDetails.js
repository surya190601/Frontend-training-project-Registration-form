import React from 'react'
import BoxContainer from '../BoxContainer/BoxContainer'
import InputComponent from '../../newComponents/InputComponent/InputComponent';
import InputDropDown from '../Input/InputDropdown/InputDropDown';
import TextComponent from '../TextComponent/TextComponent';
import './EducationalDetails.css';
const EducationalDetails = () => {
  const Education_Type = ['Under Graduate',"Post Graduate","Diploma"];
  const Degree = ['B.E','B.Tech','M.E','M.Tech'];
  const Branch = ['CSE','IT','ECE','EEE','MECHANICAL','CIVIL'];
  const Backlogs = ['No', 'Yes'];
  return (
    <BoxContainer className= 'boxEducationalDetails1'>
        <TextComponent label = 'Lowest education profile' className = 'lowest-Education-Profile'/>
        <BoxContainer className = 'boxEducationalDetails2'>
            <TextComponent label = '10th percentage %*' className = 'percentage-10th'/>
            <InputComponent className = 'percentage-10thInput'/>
            <TextComponent label = '12th percentage %*' className = 'percentage-12th'/>
            <InputComponent className = 'percentage-12thInput'/>
        </BoxContainer>
        <TextComponent label = 'Highest education profile' className = 'Highest-education-profile'/>
        <BoxContainer className = 'boxEducationalDetails3'>
            <TextComponent label = 'Education Type*' className = 'Education-Type'/>
            <InputDropDown data = {Education_Type} className = 'Education-TypeInput'/>
            <TextComponent label = 'Degree*' className = 'Degree'/>
            <InputDropDown data = {Degree} className = 'Degree-Input'/>
            <TextComponent label = 'College*' className = 'College'/>
            <InputComponent className = 'College-Input'/>
            <TextComponent label = 'Reg.No*' className = 'Reg-No'/>
            <InputComponent className = 'Reg-Input'/>
            <TextComponent label = 'Branch*' className = 'Branch'/>
            <InputDropDown data = {Branch} className = 'Branch-Input'/>
            <TextComponent label = 'Backlogs*' className = 'Backlogs'/>
            <InputDropDown data = {Backlogs} className = 'Backlogs-Input'/>
        </BoxContainer>
    </BoxContainer>
  )
}

export default EducationalDetails