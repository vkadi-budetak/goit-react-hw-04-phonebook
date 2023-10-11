import React from 'react';

export default function ContactItem({ contact, deleteContact }) {
  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
}
