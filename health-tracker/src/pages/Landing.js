import React from "react";

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        alignContent: "right",
        flexDirection: "column",
        width: "50%",
        marginLeft: "25%",
        marginTop: "10%",
      }}
    >
      <h1 style={{ textAlign: "left" }}>Welcome to the MERN Health Tracker</h1>
      <h2
        style={{
          textAlign: "left",
          display: "flex",
          justifyContent: "right",
          alignContent: "right",
          color: "#3F51B5",
        }}
      >
        MERN Health Tracker is a web application which utilizes the Edamam API
        that can be used to track daily and weekly nutritional intake, along
        with weight goals and your progress towards them.
        <br />
        <br />
        You will be able to log meals you eat and see detailed information about
        them, such as fat, protein, and carb content, along with an overall view
        for your intake each week.
      </h2>
    </div>
  );
};

export default Landing;
