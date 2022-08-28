import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, H1, H2 } from './App.styled';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

export class App extends Component {
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
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(__, prevstate) {
    if (this.state.contacts !== prevstate.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      console.log('states difference');
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const checkName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const checkNumber = this.state.contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    if (checkNumber) {
      return alert(`This phone number is already in use.`);
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(contact);
    console.log(this.state);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Section>
          <H1>Phonebook</H1>
          <ContactForm onSubmit={this.addContact} />
          <Filter value={filter} onChange={this.changeFilter} />
        </Section>
        <Section>
          <H2>Contacts</H2>
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
