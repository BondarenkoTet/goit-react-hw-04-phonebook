import { createAction  } from "@reduxjs/toolkit";

export const addContacts = createAction("tasks/addContacts");
export const deleteContacts = createAction("tasks/deleteContacts");
export const filterContacts= createAction("tasks/filterContacts");