import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes, Outlet} from 'react-router-dom';

// Components
import LoginComponent from './components/LoginComponent/LoginComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import EmailConcernComponent from './components/EmailConcernComponent/EmailConcernComponent';
import PageNotFoundComponent from './components/PageNotFoundComponent/PageNotFoundComponent';
import ProtectedOutlet from './lib/routes/ProtectedOutlet';
import NavBar from './components/HeaderComponent/NavBar';
 
const App = () => {

  return (
    <div>
      <NavBar />

      {/* This is the routes for the application */}
      <Routes>
        <Route exact path='/login' element={<LoginComponent />}/>

        {/* <-- Protected routes --> */}
        <Route element={<ProtectedOutlet />}>
          <Route path="/" element={<DashboardComponent />} />
          <Route path="/concern/:id" element={<EmailConcernComponent />} />
        </Route>

        {/* <-- Protected routes --> */}

        <Route path='*' element={<PageNotFoundComponent />}/>
      </Routes>
    </div>
  );
}

export default App;
