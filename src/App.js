import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignIn } from "./Screens/Signin"
import { Dashboard } from "./Screens/Dashboard"
import { Drivers } from "./Screens/Drivers"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from './Components/Auth';
import { Owners } from './Screens/Owners';
import { Vehicles } from './Screens/Vehicles';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch >
          <Route
            exact
            path="/"
            render={() =>
              <Auth>
                <Dashboard />
              </Auth>}
          />
          <Route
            exact
            path="/dashboard"
            render={() =>
              <Auth>
                <Dashboard />
              </Auth>}
          />
          <Route
            exact
            path="/drivers"
            render={() =>
              <Auth>
                <Drivers />
              </Auth>}
          /> <Route
            exact
            path="/vehicles"
            render={() =>
              <Auth>
                <Vehicles />
              </Auth>}
          /> <Route
            exact
            path="/owners"
            render={() =>
              <Auth>
                <Owners />
              </Auth>}
          />
          <Route
            exact
            path="/auth"
            render={() =>
              <SignIn />
            }
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
