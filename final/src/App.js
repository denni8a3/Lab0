import React from 'react';
import Add from "./components/newContact/index.js";
import Contacts from "./components/contacts/index.js";
import Remove from "./components/remove/index.js";
import Profile from "./components/profile/index.js";
import './App.css';

function App() {
  return (
    <div className="Contacts">
    <Contacts/>
    <Add/>
  
    </div>
  );
}

export default App;
