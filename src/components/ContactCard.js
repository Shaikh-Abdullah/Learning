import React from 'react';

function ContactCard({ contact }) {
  const { id, name, email } = contact;

  return (
    <div className='item'>
      <i className="user icon ui avatar image" />
      <div className='content'>
        <div className='header'>Name: {name}</div>
        <div>Email: {email}</div>
      </div>
      <i className='trash alternate outline icon' style={{ color: "red" }} />
    </div>
  );
}

export default ContactCard;
