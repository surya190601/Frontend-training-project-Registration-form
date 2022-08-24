import React, { useState } from "react";
import BoxContainer from "../BoxContainer/BoxContainer";
import InputComponent from '../../newComponents/InputComponent/InputComponent'
import TextComponent from "../TextComponent/TextComponent";
import "./jobDetails.css";

const JobDetails = () => {
  const [radioActive, setRadioActive] = useState(false);
  return (
    <div>
      <BoxContainer className = 'box'>
         <TextComponent label={"Job Profile"} className = 'JobProfile'/>
        <TextComponent label = {"Software Developer"}className = 'JobProfileInput' />
     </BoxContainer>
    </div>

    
  );
};

export default JobDetails;
