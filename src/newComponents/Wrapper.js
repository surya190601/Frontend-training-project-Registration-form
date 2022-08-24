import React from "react";
import "../Styles/index.css";
export default function Wrapper(props) {
  const { label, children, marginTop = 22, bg = "white" } = props;
  return (
    <div style={{ marginTop }}>
      <div className="wrapper-text">{label}</div>
      <div className="wrapper-container" style={{ backgroundColor: bg }}>
        {children}
      </div>
    </div>
  );
}
