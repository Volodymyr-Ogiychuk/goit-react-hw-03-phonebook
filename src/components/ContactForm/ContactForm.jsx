import PropTypes from 'prop-types'
import React, { Component } from "react";
import s from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.reset();    
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
    return (
        <form className={s.form} onSubmit={this.handleSubmit}>
            <label className={s.label} >Name</label>
            <input className={s.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
                value={this.state.name}
                onChange={this.handleChange}
            />
            <label className={s.label}>Number</label>
            <input
                className={s.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
            />
            <button className={s.btnSubmit} type="submit">Add contact</button>
        </form>
    );
    }
};

ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired,
};

export default ContactForm;

