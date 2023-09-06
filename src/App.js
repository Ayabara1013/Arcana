import React, { useState } from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import './styles/App.scss';
import './styles/classes.scss';

// react router
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// components
import NavigationBar from './components/utils/NavigationBar';

import TradingPost from './components/screens/TradingPost';
import Home from './components/screens/Home';
import Contact from './components/Contact';
import CharacterGenerator from './components/screens/character generator/CharacterGenerator';
import Testes from './components/screens/testes/Testes.jsx';
import TestPage from './components/screens/TestPage.jsx'
import TradingPostTracker from './components/screens/trading post/TradingPostTracker';

// ----------------- FIREBASE ----------------- //
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa07YaK378Y7UiIdlS9w-AZl18fiJ0FKQ",
  authDomain: "arcana-app.firebaseapp.com",
  projectId: "arcana-app",
  storageBucket: "arcana-app.appspot.com",
  messagingSenderId: "778639434190",
  appId: "1:778639434190:web:f4522ee3b1410ed8b28b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

// ----------------- FIREBASE ----------------- //




function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        
        <div className="app-wrapper">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/trading-post/class-sets"
              element={<TradingPost app={app} analytics={analytics} logEvent={logEvent} />}
            />

            <Route
              path="/trading-post/rewards-tracker"
              element={<TradingPostTracker app={app} analytics={analytics} logEvent={logEvent} />}
            />

            <Route
              path="/character-generator"
              element={<CharacterGenerator app={app} />}
            />

            <Route
              path="/test"
              element={<TestPage />}
            />

            <Route
              path="*"
              element={<Home />}
            />
          </Routes>
        </div>
        
        {/* <Contact /> */}

      </BrowserRouter>
    </div>
  );
}


{/* <Route path="/" element={<Home />} />
            <Route path="/trading-post" element={<TradingPost />} />
            <Route path="*" element={<Home />} /> */}


export default App;
