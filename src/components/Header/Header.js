import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./Header.css";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

const Header = () => (
  <div className="header">
    <Router>
      <div className="header__container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  </div>
);
export default Header;
