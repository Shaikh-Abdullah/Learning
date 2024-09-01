import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contact }) {
  const renderList = contact.map((ele) => (
    <ContactCard key={ele.id} contact={ele} />
  ));

  return (
    <div className='ui celled list'>
      {renderList}
    </div>
  );
}

export default ContactList;
