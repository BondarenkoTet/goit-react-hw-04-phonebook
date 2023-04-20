import  React, { useEffect, useState } from 'react';
import Form from "./Form/Form";
import  ContactList  from "./Contact/ContactList";
import Filter from "./Filter/Filter";
//import { useTransition } from "react";
//import { isCompositeComponent } from "react-dom/test-utils";


const App = () => {

  const [contacts, setContacts] = useState(() => { 
    return JSON.parse(window.localStorage.getItem("contacts")) ?? "";
  })
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])
  
  const handleAddContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in your contacts.`);
    } else {
      setContacts(...contacts, newContact)
      window.localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  };
const formSubmithandler = data => {
    console.log(data)
  };

  const changeFilter= (event) => {
    setFilter(event.target.value)
};

    const getVisibleContacts = () => {
    return contacts.filter(contact =>
      (contact.name.toLowerCase().includes(filter.toLowerCase()))
      )
  }

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    } 
  
  const visibleContacts = getVisibleContacts();
  return (
    <>
      <h1>Phonebook</h1>
        <Form onSubmit={formSubmithandler}
          addContact={handleAddContact}
          contacts={contacts}
        />
        <h2>Contacts</h2> 
          <Filter
          value={filter}
          onChange={changeFilter}
        />
        <ContactList 
          contactsArr={visibleContacts}
          deleteContact={deleteContact}
        />
    </>
  )
}

export default App


// class App extends React.Component {

//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: ''
// };

// componentDidMount() {
//   console.log("App componentDidMount");
//   const contacts = localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//   this.setState({contacts: parsedContacts})
//   }
// };

// componentDidUpdate(prevProps, prevState) {

//   if(this.state.contacts !== prevState.contacts) {
    //localStorage.setItem("contacts", JSON.stringify(this.state.contacts)); 
    
// }
// }

// handleAddContact = newContact => {
//   if (this.state.contacts.find(contact => contact.name === newContact.name)) {
//     alert(`${newContact.name} is already in your contacts.`);
//   } else {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   }
// };
// formSubmithandler = data => {
//   console.log(data)
// };

// changeFilter= (event) => {
//   this.setState({filter: event.currentTarget.value})
// };

// getVisibleContacts = () => {
// return this.state.contacts.filter(contact =>
//   contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
// }
// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// render () {
//   const visibleContacts = this.getVisibleContacts();
  
//   return (
//     <>
//       <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmithandler}
//           addContact={this.handleAddContact}
//           contacts={this.state.contacts}
//         />
//       <h2>Contacts</h2> 
//         <Filter
//           value={this.state.filter}
//           onChange={this.changeFilter}
//         />
//         <ContactList 
//           contactsArr={visibleContacts}
//           deleteContact={this.deleteContact}
//         />
//     </>
//     )  
// } 



