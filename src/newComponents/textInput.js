import React from "react";
import "../Styles/index.css";
const textInput = (props) => {
  const {
    placeholder = "",
    onChange = () => null,
    type = "text",
    label = null,
    marginBottom = 0,
    reference = null,
    errorLabel = null,
  } = props;
  console.log({ errorLabel})
  return (
    <div  style={{ marginBottom }}>
      {!!label ? <div className="input-label">{label}</div> : <></>}
      <input
        className="input-container"
        placeholder={placeholder}
        type={type}
       
        ref={reference}
      />
      {!!errorLabel ? (
        <p
          style={{
            fontWeight: "400",
            fontSize: 12,
            lineHeight: 14,
            marginTop:12,
            color: "#F24E1E",
            padding:0,
          }}
        >
          {errorLabel}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

const DatePickerIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.3333 2.9H20V0.5H17.3333V2.9H6.66667V0.5H4V2.9H2.66667C1.18667 2.9 0 3.98 0 5.3V22.1C0 23.42 1.18667 24.5 2.66667 24.5H21.3333C22.8 24.5 24 23.42 24 22.1V5.3C24 3.98 22.8 2.9 21.3333 2.9ZM21.3333 22.1H2.66667V8.9H21.3333V22.1ZM4.66667 13.7C4.66667 12.044 6.16 10.7 8 10.7C9.84 10.7 11.3333 12.044 11.3333 13.7C11.3333 15.356 9.84 16.7 8 16.7C6.16 16.7 4.66667 15.356 4.66667 13.7Z"
        fill="#686868"
      />
    </svg>
  );
};
export default textInput;
