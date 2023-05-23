import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import NewPasswordInitialization from './components/pages/NewPasswordInitialization/NewPasswordInitialization';
import PageNotFoud from './components/pages/PageNotFoud/PageNotFoud';
import PasswordRecovery from './components/pages/PasswordRecovery/PasswordRecovery';
import Profile from './components/pages/Profile/Profile';
import Registration from './components/pages/Registration/Registration';
import Test from './components/pages/Test/Test';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path = {'/Login'} Component={Login} />
        <Route path = {'/NewPasswordInitialization'} Component={NewPasswordInitialization} />
        <Route path = {'/PageNotFound'} Component={PageNotFoud} />
        <Route path = {'/PasswordRecovery'} Component={PasswordRecovery} />
        <Route path = {'/Profile'} Component={Profile} />
        <Route path = {'/Registration'} Component={Registration} />
        <Route path = {'/Test'} Component={Test} />
      </Routes>
    </div>
  );
}

export default App;
