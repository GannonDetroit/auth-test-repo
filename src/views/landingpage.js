import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="App">
      <h1>Public Landing Page</h1>
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
        <button>
          <Link to="/userdashboard" style={{ textDecoration: 'none' }}> User Dashboard</Link>
        </button>
        <button>
          <Link to='/admindashboard' styple={{ textDecoration: 'none' }}> Admin Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
