import React from "react";
import TextComponent from "../../Components/TextComponent/TextComponent";

const InputComponent = (props) => {
  const { type = "text" , label, classname_text} = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: type === "text" ? "column" : "row",
        
      }}
    >
      {type === "radio" && (
        <label className="radio-button" ref={props.reference}>
          <input {...props} />
          <span className="radio-button__control"></span>
          <span className={classname_text}>{label}</span>
        </label>
      )}
      {type !== "radio" && (
        <TextComponent
          label={label}
          className={classname_text}
          CustomTag={type === "text" ? "div" : "span"}
        />
      )}
      {type === "text" && <input {...props} />}
      {type === "date" && <input {...props} />}
    </div>
  );
};

export default InputComponent;
