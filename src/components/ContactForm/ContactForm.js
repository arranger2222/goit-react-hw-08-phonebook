import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FormStyled,
  Label,
  Input,
  Button,
  ButtonDisabled,
} from 'components/ContactForm/ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Snack } from 'components/Snack/Snack';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [isSnackOpen, setIsSnackOpen] = useState(false);

  const isContactInList = contactName => {
    const lowercaseName = contactName.toLowerCase();
    return contacts.find(({ name }) =>
      name.toLowerCase().includes(lowercaseName)
    );
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (isContactInList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contactItem = {
      name,
      number,
    };

    dispatch(addContact(contactItem));

    setIsSnackOpen(true);

    reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error('Not supported type');
    }
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <>
      {isSnackOpen && (
        <Snack
          isOpen={isSnackOpen}
          handleClose={() => {
            setIsSnackOpen(false);
          }}
          text="Contact created"
          type="success"
        />
      )}
      <FormStyled onSubmit={handleFormSubmit}>
        <Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
            placeholder="Name"
            autoComplete="off"
          />
        </Label>
        <Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
            placeholder="Number"
            autoComplete="off"
          />
        </Label>
        <Button title="add contact" type="submit">
          Add contact
        </Button>
      </FormStyled>
    </>
  );
};

export const ContactFormDisabled = () => {
  return (
    <>
      <FormStyled>
        <Label>
          <Input placeholder="Name" autoComplete="off" disabled />
        </Label>
        <Label>
          <Input placeholder="Number" autoComplete="off" disabled />
        </Label>
        <ButtonDisabled title="add contact" disabled>
          Add contact
        </ButtonDisabled>
      </FormStyled>
    </>
  );
};
