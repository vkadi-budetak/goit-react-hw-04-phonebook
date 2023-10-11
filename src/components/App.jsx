import React from 'react';

import ContactForm from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(stringifiedContacts) ?? [];
    this.setState({
      contacts: parsetContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);

      console.log('Зміна відбулася в contacts');
    }
  }

  addContact = contactData => {
    const isDublicate = this.state.contacts.some(
      el => el.name === contactData.name
    );

    if (isDublicate) {
      window.alert(`${contactData.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [contactData, ...prevState.contacts],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== id),
      };
    });
  };

  handleChangeFilter = value => {
    this.setState(prevState => {
      return {
        filter: value,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactList
          contacts={this.state.contacts.filter(el =>
            el.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
