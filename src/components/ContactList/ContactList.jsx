import PropTypes from 'prop-types'
import s from './ContactList.module.css'
import React, {Component} from 'react';

export class ContactList extends Component {

componentDidUpdate() {
    localStorage.setItem('cntcts', JSON.stringify(this.props.contacts));
}

setContacts = () => {
    if (JSON.parse(localStorage.getItem('cntcts')).length !== 0) {
        this.setState.contacts = [...JSON.parse(localStorage.getItem('cntcts'))];
    } else {
        this.setState.contacts = [];
    }    
};

render() {
    const { contacts, deleteContact } = this.props;
    this.setContacts();

return (
    <ul className={s.list}>
        {contacts.map(({ id, name, number}) => (
            <li key={id} className={s.listItem} >
                <p>{name}: {number}</p>
                <button className={s.btnDelete} type="button" onClick={() => deleteContact(id)}>Delete</button>
            </li>                
        ))}

    </ul>
)}};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;