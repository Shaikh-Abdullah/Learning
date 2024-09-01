import React from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
// import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
