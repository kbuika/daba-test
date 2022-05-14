import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import PersonalInfo from './pages/PersonalInfo';
import ChangeInfo from './pages/ChangeInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/change-info/:id" element={<ChangeInfo />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
