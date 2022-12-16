import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { fetchContacts } from 'redux/operations';
import { Container } from 'utils/Container';
import { Section } from 'utils/Section';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <ContactForm />
        <Filter />
      </Section>
      <Section>
        <ContactList />
      </Section>
    </Container>
  );
};

export default ContactsPage;
