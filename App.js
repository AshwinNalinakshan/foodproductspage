
import { useState } from 'react';
import './App.css';
import Foodentries from "./pages/Foodentries";
import Topbar from './pages/Topbar';
import { atom } from 'recoil';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='foodentrycontainer'>
        <Foodentries />
      </div>
    </div>
  );
}

export default App;
