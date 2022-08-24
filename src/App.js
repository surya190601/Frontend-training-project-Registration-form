import React, { useState, useRef, useEffect } from "react";
import HomePage from "./Components/HomePage/HomePage";
import "./App.css";
import Header from "./newComponents/header";
import Wrapper from "./newComponents/Wrapper";
import TextInput from "./newComponents/textInput";
import { getRole, register } from "./api";
import Select from "./newComponents/select";
import Button from "./newComponents/button";
import Footer from "./newComponents/footer";
import SubWrapper from "./newComponents/sections/subWrapper";
import InputComponent from "./newComponents/InputComponent/InputComponent";

const App = () => {
  const [role, setRole] = useState([]);
  const firstName = useRef("");
  const middleName = useRef("");
  const lastName = useRef("");

  const dob = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const tenth = useRef("");
  const twelth = useRef("");
  const educationType = useRef("");
  const degree = useRef("");
  const college = useRef("");
  const rollNo = useRef("");
  const branch = useRef("");
  const backlog = useRef("");
  const file = useRef();
  const gender = useRef("");
  const [madantory,setMantory]= useState(false)
  
  var response1 = []
 

  const fetchRole = async () => {
    response1 = await getRole();
    setRole(response1);
  };

  useEffect(() => {
    fetchRole();
  }, []);
  //console.log("role",role.map(role => role.displayText))
  return (
    <div>
      <Header title="INCRESCO TECHNOLOGIES" subtitle="CAMPUS HIRING-2023" />
      <div className="main-container">
        <Wrapper label="Job Details" marginTop={29} bg="white">
          <p className="input-label">Job Profile*</p>
          <div className="job-profile-input">
            <p>Software Developer</p>
          </div>
        </Wrapper>

        <Wrapper label="Personal Details" marginTop={42} bg="white">
          <TextInput
            placeholder="First Name"
            label="First Name*"
            isMandatory={true}
            marginBottom={30}
            reference={firstName}
            errorLabel={madantory && !firstName?.current?.value?'Please type the first name':null}
          />
          <TextInput
            placeholder="Middle Name"
            label="Middle Name"
            isMandatory={true}
            marginBottom={30}
            reference={middleName}
          />
          <TextInput
            placeholder="Last Name"
            label="Last Name*"
            isMandatory={true}
            marginBottom={30}
            reference={lastName}
            errorLabel={madantory && !lastName?.current?.value?'There must be only numbers':null}
          />
          <TextInput
            placeholder="Email Id"
            label="Email Id*"
            isMandatory={true}
            marginBottom={30}
            reference={email}
            errorLabel={madantory && !email?.current?.value?'There must be only numbers':null}
          />
          <TextInput
            placeholder="Contact Number"
            label="Contact Number*"
            isMandatory={true}
            marginBottom={30}
            reference={phone}
            errorLabel={madantory && !phone?.current?.value?'There must be only numbers':null} 
          />
          <TextInput
            placeholder="DOB-(DD/MM/YYYY)"
            label="DOB-(DD/MM/YYYY)*"
            isMandatory={true}
            type="date"
            marginBottom={30}
            reference={dob}
            errorLabel={madantory && !dob?.current?.value?'There must be only numbers':null}
          />

          <p className="input-label">Gender*</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "20%",
              justifyContent: "space-between",
            }}
          >
            <InputComponent
              label="Male"
              type="radio"
              name="gender"
              classname_text="radio-label"
              className="radio-button__input"
              reference={gender}
            />
            <InputComponent
              label="Female"
              type="radio"
              name="gender"
              classname_text="radio-label"
              className="radio-button__input"
              reference={gender}
            />
            <InputComponent
              label="Other"
              type="radio"
              name="gender"
              classname_text="radio-label"
              className="radio-button__input"
              reference={gender}
            />
          </div>
        </Wrapper>
        <Wrapper label="Educational Details" marginTop={42}>
          <SubWrapper label="Lowest education profile">
            <div className="lowerEducation-body">
              <TextInput
                placeholder="56%"
                label="10th percentage %*"
                isMandatory={true}
                marginBottom={30}
                reference={tenth}
              />
              <TextInput
                placeholder="70%"
                label="12th Percentage %*"
                isMandatory={true}
                marginBottom={30}
                reference={twelth}
              />
            </div>
          </SubWrapper>
          <SubWrapper label="Highest education profile">
            <Select
              options={role.map(role => role.displayText)}
              label="Education Type*"
              reference={educationType}
            />
            <Select
              options={["B.E", "M.E"]}
              label="Degree*"
              reference={degree}
            />
            <TextInput
              placeholder="College"
              label="College*"
              isMandatory={true}
              marginBottom={30}
              reference={college}
            />
            <TextInput
              placeholder="19eucb038"
              label="Reg.No*"
              isMandatory={true}
              marginBottom={30}
              reference={rollNo}
            />
            <Select
              options={["C.S.E", "I.T"]}
              label="Branch*"
              reference={branch}
            />
            <Select
              options={["Yes", "No"]}
              label="Backlogs*"
              reference={backlog}
            />
          </SubWrapper>
        </Wrapper>
        <Wrapper label="ATTACHMENTS" marginTop={42} bg="white">
          <div className="input-label">
            Resume/CV*
            <span className="heading-description">
              {" "}
              (Accept format: doc/.docx/.pdf;Size: 1MB)
            </span>
          </div>

          <label className="custom-file-upload">
            <input type="file" ref={file} />
            Choose File
          </label>
        </Wrapper>
        <Button
          label="SUBMIT"
          onClick={async (e) => {
            if (
              !firstName?.current?.value ||
              !lastName?.current?.value ||
              !email?.current?.value ||
              !phone?.current?.value ||
              !gender?.current?.value ||
              !tenth?.current?.value ||
              !twelth?.current?.value ||
              !educationType?.current?.value ||
              !degree?.current?.value ||
              !college?.current?.value ||
              !rollNo?.current?.value
            ) {
              setMantory(true)
             return 
            }
            //e.preventDefault();
            console.log("hehehe");
             const postObj = {
              firstName: firstName?.current?.value,
              middleName: middleName?.current?.value,
              lastName: lastName?.current?.value,
              emailID: email?.current?.value,
              contactNumber: Number(phone?.current?.value),
              dateOfBirth: dob?.current?.value,
              gender: gender?.current?.value,
              tenthPercentage: Number(tenth?.current?.value),
              twelfthPercentage: Number(twelth?.current?.value),
              educationType: educationType?.current?.value,
              degree: degree?.current?.value,
              college: college?.current?.value,
              registerNumber: rollNo?.current?.value,
              branch: branch?.current?.value,
              backlogs: backlog?.current?.value,
            };
            const response = await register(postObj);
            console.log({ response });
          }}
        />
      </div>
      <Footer />
    </div>
  );
};
export default App;
