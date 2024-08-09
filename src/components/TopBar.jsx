import React from 'react';
import './TopBar.css'; 
import { FaPlus, FaSearch, FaEnvelope, FaPhone } from 'react-icons/fa'; 

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <FaPlus className="icon" />
                <span> Add</span>
            </div>
            <div className="topbar-center">
                <input type="text" placeholder="Search..." className="search-input" />
                <FaSearch className="icon search-icon" />
            </div>
            <div className="topbar-right">
                <FaEnvelope className="icon" />
                <FaPhone className="icon" />
            </div>
        </div>
    );
};

export default TopBar;
