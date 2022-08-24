import React, { useRef } from "react";
import './HomePage.css';
import Header from "../Header/Header";
import TextComponent from "../TextComponent/TextComponent";
import JobDetails from "../JobDetails/JobDetails";
import PersonalDetail from "../PersonalDetail/PersonalDetail";
import EducationalDetails from "../EducationalDetails/EducationalDetails";
import AttachmentsDetails from "../AttachmentsDetails/AttachmentsDetails";
import Buttons from "../Buttons/Buttons";
import Footer from "../Footer/Footer";
const HomePage = () =>{
    const usernameRef = useRef();

    console.log(usernameRef);
    console.log("Re-Rendered");
    return (
        <div>
            <Header/>
            <div style={{padding:'35px 121px 82px 121px'}}>
            <form>
            <TextComponent label={'*Required'} className = 'Required'/>
            <TextComponent label={"Registration Form"} className = 'Requiredform'/>
            <TextComponent label={"Job Details"} className = 'JobDetail'/>
            <JobDetails/>
            <TextComponent label={"Personal Details"} className = 'PersonalDetail'/>
            <PersonalDetail/>
            <TextComponent label = {"Educational Details"} className = 'EducationalDetails'/>
            <EducationalDetails/>
            <TextComponent label={"ATTACHMENTS"} className = 'ATTACHMENTS'/>
            <AttachmentsDetails/>
            <Buttons type = "submit" label= "SUBMIT" className = 'SUBMIT-button'/>
            </form>
            <Footer/>
            </div>
        </div>
    )
}
export default HomePage;