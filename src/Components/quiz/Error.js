import React from "react";

const Notification = ({ children }) => {
  return (
    <>
      <div
        style={{
          width: "40vw",
          height: "100%",
          boxShadow: "0 0 3px 2px #cec7c759",
          alignItems: "center",
          backgroundColor: "red",
          color: "white",
          fontSize: "1.1rem",
          padding: "20px",

          padding: "5px",

          textAlign: "center",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Notification;
