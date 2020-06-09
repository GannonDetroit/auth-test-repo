import React from "react";
import UserDashboard from "./views/userDashboard";
import LandingPage from "./views/landingpage";
import AdminDashboard from './views/adminDashboard'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { withAuthenticator } from "@aws-amplify/ui-react";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/userdashboard">
          <UserDashboard />
        </Route>

        <Route exact path="/admindashboard">
          <AdminDashboard />
        </Route>


      </Switch>
    </Router>
  );
}

// export default withAuthenticator(App);
export default App;
