import React from "react";
import BoxContainer from "../BoxContainer/BoxContainer";
import InputComponent from "../../newComponents/InputComponent/InputComponent";
import TextComponent from "../TextComponent/TextComponent";
import "./personalDetail.css";
const PersonalDetail = () => {
  return (
    <BoxContainer className="boxpersonal">
      <TextComponent label={"First Name*"} className="box-label" />
      <InputComponent className="label-input-box" placeholder="First Name" />
      <TextComponent label={"Middle Name"} className="label" />
      <InputComponent className="label-input-box" placeholder="Middle Name" />
      <TextComponent label={"Last Name*"} className="label" />
      <InputComponent className="label-input-box" placeholder="Last Name" />
      <TextComponent label={"Email Id*"} className="label" />
      <InputComponent className="label-input-box" placeholder="Email Id" />
      <TextComponent label={"Contact Number*"} className="label" />
      <InputComponent
        className="label-input-box"
        placeholder="Contact Number"
      />
      <TextComponent label={"DOB-(DD/MM/YYYY)*"} className="label" />
      <InputComponent type="date" className="DOBInput" />
      <TextComponent label={"Gender*"} className="label" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "25%",
          justifyContent: "space-between",
        }}
      >
        <InputComponent
          label="Male"
          type="radio"
          name="gender"
          classname_text="radio-label"
          className="radio-button__input"
        />
        <InputComponent
          label="Female"
          type="radio"
          name="gender"
          classname_text="radio-label"
          className="radio-button__input"
        />
        <InputComponent
          label="Other"
          type="radio"
          name="gender"
          classname_text="radio-label"
          className="radio-button__input"
        />
      </div>
    </BoxContainer>
  );
};

export default PersonalDetail;
