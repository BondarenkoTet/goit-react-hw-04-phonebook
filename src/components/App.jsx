
import Form from "./Form/Form";
import  ContactList  from "./Contact/ContactList";
import Filter from "./Filter/Filter";


export default function App() {

  return (
    <>
      <h1>Phonebook</h1>
        <Form />
      <h2>Contacts</h2> 
        <Filter/>
        <ul>
          <ContactList />
        </ul>    
    </>
  )
}



// const App = () => {
  
//   const [contacts, setContacts] = useState(() => { 
//     return JSON.parse(window.localStorage.getItem("contacts")) ?? "";
//   })
//   const [filter, setFilter] = useState("");
  
//   useEffect(() => {
//     window.localStorage.setItem("contacts", JSON.stringify(contacts));
//     }, [contacts])
  
//   const handleAddContact = newContact => {
//     if (contacts.find(contact => contact.name === newContact.name)) {
//       alert(`${newContact.name} is already in your contacts.`);
//     } else {
//       setContacts([...contacts, newContact])
//       window.localStorage.setItem('contacts', JSON.stringify(contacts))
//     }
//   };
// const formSubmithandler = data => {
//     console.log(data)
//   };

//   const changeFilter= (event) => {
//     setFilter(event.target.value)
// };

//     const getVisibleContacts = () => {
//     return contacts.filter(contact =>
//       (contact.name.toLowerCase().includes(filter))
//       )
//   }

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//     } 
  
//   const visibleContacts = getVisibleContacts();

//   return (
//     <>
//       <h1>Phonebook</h1>
//         <Form onSubmit={formSubmithandler}
//           addContact={handleAddContact}
//           contacts={contacts}
//         />
//         <h2>Contacts</h2> 
//           <Filter
//           value={filter}
//           onChange={changeFilter}
//         />
//         <ContactList 
//           contactsArr={visibleContacts}
//           deleteContact={deleteContact}
//         />
//     </>
//   )
// }

// export default App








 



