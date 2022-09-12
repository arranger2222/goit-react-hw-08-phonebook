import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, H1, H2 } from './App.styled';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

//===================== USE STATE ======================
export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  //================ CHECK CONTACTS IN LS ==================

  useEffect(() => {
    console.log('hi', new Date());
  }, []);

  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsStorage);
    console.log('hi', new Date());
    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      return;
    }
  }, []);

  //================= ADD CONTACTS INTO LS ==================

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //================== ADD NEW CONTACT =========================

  const addContact = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

  // ==================== DELETE CONTACT ======================

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  //======================= FILTER ======================

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = filterContacts();

  return (
    <Container>
      <Section>
        <H1>Phonebook</H1>
        <ContactForm onSubmit={addContact} />
        <Filter value={filter} onChange={changeFilter} />
      </Section>
      <Section>
        <H2>Contacts</H2>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
}
