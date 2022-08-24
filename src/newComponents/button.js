import React from "react";

export default function button(props) {
  const {
    label,
    paddingHorizontal = 61.5,
    paddingVertical = 15,
    borderColor = "#8D19FF",
    onClick = () => null,
   
  } = props;
  return (
    <div style={{display: 'flex', flexDirection: 'row',justifyContent:'flex-end'}}>
      <div
        onClick={onClick}
        style={{
          width: "200px",
          height: "48px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          border: `1px solid ${borderColor}`,
          background: "#8D19FF",
          borderRadius: 13,
          marginTop: 20,
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "23px",
            color: "#FFFFFF",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
