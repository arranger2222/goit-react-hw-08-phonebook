import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
            
    handleSubmit = e => {
            e.preventDefault();
            this.props.onSubmit(this.state)
            this.setState({name: '', number: ''})
        };

    render() {
        const { name, number } = this.state;
        return (
            <Form  onSubmit={this.handleSubmit}>
                <Label htmlFor='name'>                    
                    <Input
                    type="text"
                    name="name"
                    value={name}
                    placeholder='Name'
                    onChange={this.handleChange}
                    autoComplete='off'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </Label>

                <Label htmlFor='number'>
                    
                    <Input
                    type="tel"
                    name="number"
                    value={number}
                    placeholder = 'Number'
                    autoComplete='off'
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Label>
                <Button type='submit'>Add contact</Button>
            </Form>
        )
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};