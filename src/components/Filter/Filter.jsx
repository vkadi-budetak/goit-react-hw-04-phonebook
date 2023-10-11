import React from 'react';
import css from '../ContactForm/ContactForm.module.css';

export default function Filter({ filter, handleChangeFilter }) {
  return (
    <label>
      <span className={css.title}>Find contacts by name</span>
      <input
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
        name="filter"
        type="text"
      />
    </label>
  );
}
