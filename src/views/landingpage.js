import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="App">
      <h1>Gannon's Cognito Auth Demo App</h1>
      <div
        style={{
          display: "flex",
          width: "10%",
          height: "32px",
          color: "black",
          border: "solid 2px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Link to="/dashboard" style={{textDecoration:'none'}}> Dashboard</Link>
      </div>
    </div>
  );
};

export default LandingPage;
