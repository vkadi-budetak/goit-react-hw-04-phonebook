import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <ul>
        {contacts.map(el => (
          <ContactItem key={el.id} deleteContact={deleteContact} contact={el} />
        ))}
      </ul>
    </div>
  );
}
