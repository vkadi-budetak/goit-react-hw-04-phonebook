import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const cotactData = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(cotactData);

    this.setState( {
      name: '',
      number: '',
    }
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span className={css.title}>Name</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          <span className={css.title}>Number</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            required
          />
        </label>
        <span className={css.btn}>
          <button type="submit">Add contact</button>
        </span>
      </form>
    );
  }
}
