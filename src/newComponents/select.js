import React from "react";
import "../Styles/index.css";

const select = (props) => {
  const { options = [], label = "", reference=null } = props;
  return (
    <div style={{ marginBottom: "30px" }}>
      <div className="input-label">{label}</div>
      <select className="input-container" ref={reference}>
        {options.map((option) => {
          //console.log({option})
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};


export default select;
