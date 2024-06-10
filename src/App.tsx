// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import TopBar from './components/TopBar/TopBar';
import LoginForm from './routes/LoginForm/LoginForm';
import SignUpForm from './routes/SignUpForm/SignUpForm';

function App() {
  return (
    <Router>
      <TopBar/>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
