import React, { useState } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "../App.css";

const Dashboard = () => {
  const [usersData, setUsersData] = useState(["user1", "user2"]);

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <br />
      <h2>Users</h2>
      {usersData.map(user => (
        <p>{user}</p>
      ))}
      <br />

      <AmplifySignOut />
    </div>
  );
};

export default Dashboard;
