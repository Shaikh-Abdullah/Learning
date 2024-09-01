import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
// import ContactCard from './components/ContactCard';
import ContactList from './components/ContactList';

function App() {

  const [contacts, setContact] = useState([])

  const addContactHandler = (contact) => {
    setContact([...contacts, contact])
    console.log(contact);
    
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList  contact={contacts} />
    </div>
  );
}

export default App;
