import React from "react";
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

 const ContactList = ({contacts, onDeleteContact}) => (
 <List>
    {contacts.map(({name, number, id}) => (
      <Item 
      key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <Button onClick={()=>onDeleteContact(id)}>Delete</Button>
   </Item>
   ))}
 </List>)
 
 export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};