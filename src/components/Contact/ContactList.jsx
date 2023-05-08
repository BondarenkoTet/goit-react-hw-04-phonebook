import { useSelector, useDispatch } from "react-redux";
import {deleteContacts} from "redux/inputSlice";
import css from "./ContactsList.module.css"

export default function ContactList () {

    const dispatch = useDispatch();
    const contactsList = useSelector(state=> state.contacts);

    const filteredContacts = useSelector(state => state.filter);

    const removeContacts = contact => {
        dispatch(deleteContacts(contact.id));
    };

    const onFilter = contactsList.filter(contact => 
        contact.name.toLowerCase().includes(filteredContacts))

    return onFilter.length > 0 ? (
        onFilter.map(contact => (
            <li key={contact.id}>
                <span  className={css["span-name"]}>{contact.name}:</span>
                <span  className={css["span-number"]}>{contact.number}</span> 
                <button 
                    type="button"
                    className={css["delete-btn"]}
                    onClick={() => removeContacts(contact)}
                    id={contact.id}
                >Delete
                </button>
            </li>
    )))
    : <p className={css.tag}>No contacts</p>
        
}
        


