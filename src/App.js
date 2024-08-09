
import React from 'react';
import Sidebar1 from './components/Sidebar1';
import Sidebar from './components/Sidebar';
import TicketList from './components/TicketList';
import './App.css';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <div className="app">
      <Sidebar1 />
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <TicketList />
      </div>
    </div>
  );
};

export default App;
