import PropTypes from 'prop-types'
import s from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {  
    return (
        <ul className={s.list}>
            { contacts.map(({ id, name, number}) => (
                <li key={id} className={s.listItem} >
                    <p>{name}: {number}</p>
                    <button className={s.btnDelete} type="button" onClick={() => deleteContact(id)}>Delete</button>
                </li>                
            ))}
    
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;