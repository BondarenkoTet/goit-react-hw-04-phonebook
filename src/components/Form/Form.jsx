import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/inputSlice';

export default function Form() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
    name: e.target.name.value,
    number: e.target.number.value,
    id: nanoid(),
};
    if (contacts.find(contact => contact.name === newContact.name)) {
        return ("This contact is already in your phonebook")
    } else {
        dispatch(addContacts(newContact));
    }
    e.target.name.value = '';
    e.target.number.value = '';
};

return (
    <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
            Name
        <input
            type="text"
            name="name"
            className={css.input}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
        <label>
            Number
        <input
            type="tel"
            name="number"
            className={css.input}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </label>
        <button type="submit" className={css.btn}>Add contact</button>
    </form>
);
}
        





        // export default function Form  ()  {
        //     const [name, setName] = useState("");
        //     const [number, setNumber] = useState("");
            
        //     const handleChange = event => {
        //         const {name, value} = event.target;
        
        //         switch (name) {
        //             case "name": setName(value) ;
        //                 break;
        
        //             case "number": setNumber(value);
        //                 break;
        
        //             default: throw new Error();
        //         }
        //     }
            
            // const handleSubmit = e => {
            //         e.preventDefault()
                
            //         const newContact = {
            //             id: nanoid(),
            //             name: e.target.name.value,
            //             number: e.target.number.value
            //         }

                    
            //         addContacts(newContact);
            //         onSubmit (
            //             name,
            //             number,
            //         )
                    
            //     }
        //     const reset = () => {
        //             setName('')
        //             setNumber('')
        //         }
        
        // return (
            
        //     <form onSubmit={handleSubmit} className={css.form}>
        //                 <label className={css.label}
        //                 >Name   
        //                     <input className={css.input}
        //                         type="text"
        //                         name="name" 
                                //onChange={handleChange}
                        //         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        //         required
                        //     />
                        // </label>
                        // <label className={css.label}
                        // >Number
                        //     <input className={css.input}
                        //             type="tel"
                        //             name="number"
                        //             //onChange={handleChange}
                        //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        //             required
                //             />
                //         </label>
                //         <button type="Submit" className={css.btn}>Add contact</button>
                //     </form>     
                //     )
                // }
        