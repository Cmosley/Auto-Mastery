import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import {Home} from "../Home/Home";
import {Dashboard} from "../Dashboard/Dashboard";
import {SalesList} from "../SalesList/SalesList";
import {Goals} from "../Goals/Goals";
import authService from "../../services/authService";
import "./App.css";

function App (props) {
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    history.push("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

    return (
      <>
        <NavBar user={user} handleLogout={handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <Home 
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route 
          exact 
          path="/dashboard"
          render={({history}) => (
            <Dashboard 
              history={history} 
            /> 
          )}
        />
        <Route 
          exact 
          path="/sales"
          render={({history}) => (
            <SalesList 
              history={history} 
            /> 
          )}
        />
        <Route 
          exact 
          path="/goals"
          render={({history}) => (
            <Goals 
              history={history} 
            /> 
          )}
        />
      </>
    );
  }

export default App;
