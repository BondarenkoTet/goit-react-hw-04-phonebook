import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
    contacts: [],
    filter: ""
}
    const inputSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
    addContacts: (state, action) => {
        state.contacts.push(action.payload);
    },
    deleteContacts: (state, action) => {
        state.contacts= state.contacts.filter(contact => contact.id !== action.payload);
    },
        filteredContacts: (state, action) => {
            state.filter = action.payload;   
    }
}
})

export const { addContacts, deleteContacts, filteredContacts } =
    inputSlice.actions;

export const contactsReducer = inputSlice.reducer

