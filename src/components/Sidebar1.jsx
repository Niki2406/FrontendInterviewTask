
import React from 'react';
import { FaHome, FaCog, FaUser, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import './Sidebar1.css';

const Sidebar1 = () => {
  return (
    <div className="sidebar1">
      <nav className="nav-links">
        <a href="#home" className="nav-link">
          <FaHome className="icon" />
        </a>
        <a href="#settings" className="nav-link">
          <FaCog className="icon" />
        </a>
        <a href="#profile" className="nav-link">
          <FaUser className="icon" />
        </a>
        <a href="#about" className="nav-link">
          <FaInfoCircle className="icon" />
        </a>
        <a href="#contact" className="nav-link">
          <FaEnvelope className="icon" />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar1;
