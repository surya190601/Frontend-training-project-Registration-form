import React from "react";
import "../../Styles/subWrapper.css";

export default function SubWrapper(props) {
  const { children, label= '' } = props;
  return (
    <div>
      <p className="subWrapper-title">{label}</p>
      <div className="subWrapper-body"> {children}</div>
    </div>
  );
}
