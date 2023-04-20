//import React from "react";
import { nanoid } from "nanoid";
import css from "./Form.module.css"
import React, { useState } from 'react';


const Form = ({addContact, onSubmit}) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    
    const handleChange = event => {
        const {name, value} = event.target;

        switch (name) {
            case "name": setName(value) ;
                break;

            case "number": setNumber(value);
                break;

            default: throw new Error();
        }
    }
    
    const handleSubmit = event => {
            event.preventDefault()
        
            const newContact = ({name, number})
            
            addContact(newContact);

            onSubmit (
                name,
                number,
            )
            reset()
        }
    
    const reset = () => {
            setName('')
            setNumber('')
        }

        const nameInputId = nanoid(5);
        const numberInputId = nanoid(5);

return (
    
    <form onSubmit={handleSubmit} className={css.form}>
                <label className={css.label} htmlFor={nameInputId}>Name   
                    <input className={css.input}
                        type="text"
                        name="name" 
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={nameInputId}
                    />
                </label>
                <label className={css.label} htmlFor={nameInputId}>Number
                    <input className={css.input}
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            id={numberInputId}
                    />
                </label>
                <button type="Submit" className={css.btn}>Add contact</button>
            </form>     
            )
        }
// };

// )
// }

export default Form
        
// class Form extends React.Component {
//     state = {
//         name: '',
//         number: '',
//     }

//     nameInputId = nanoid(8);
//     numberInputId = nanoid(8);

//     handleChange = event => {
//         const {name, value} = event.currentTarget
        
//         this.setState ({[name]: value})
//     }

//     handleSubmit = event => {
//         event.preventDefault()
    
//         const newContact = this.state;

//         this.props.addContact(newContact);
//         this.props.onSubmit ({
//             name: this.state.name,
//             number: this.state.number,
//         })
//         this.reset()
//     }

//     reset = () => {
//         this.setState({contacts: [], name: '',number: ''})
//     }

//     render () {
//         return (
//             <form onSubmit={this.handleSubmit} className={css.form}>
//                 <label className={css.label} htmlFor={this.nameInputId}>Name   
//                     <input className={css.input}
//                         type="text"
//                         name="name" 
//                         value={this.state.name}
//                         onChange= {this.handleChange}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         id={this.nameInputId}
//                     />
//                 </label>
//                 <label className={css.label} htmlFor={this.nameInputId}>Number
//                     <input className={css.input}
//                             type="tel"
//                             name="number"
//                             value={this.state.number}
//                             onChange={this.handleChange}
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             required
//                             id={this.numberInputId}
//                     />
//                 </label>
//                 <button type="Submit" className={css.btn}>Add contact</button>
//             </form>     
//             )
//         }
// };

// export default Form;
