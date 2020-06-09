import React from "react";
// import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom'
import "../App.css";

const Dashboard = () => {

  return (
    <div className="App">
      <h1>User Dashboard</h1>
      <Link to="/" style={{ textDecoration: 'none' }}> Landing Page</Link>


      {/* <AmplifySignOut /> */}
    </div>
  );
};

export default Dashboard;
