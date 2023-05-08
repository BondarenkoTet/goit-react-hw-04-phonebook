import { useDispatch } from "react-redux";
import {filteredContacts} from "redux/inputSlice"
import css from "./Filter.module.css"

export default function Filter() {
    const dispatch =useDispatch();

    const onFilter = e => {
        dispatch(filteredContacts(e.target.value))
    };

    return (
    <>
    <label className={css.label}>Find contacts by name
        <input className={css.input}
            type="text"
            name="name"
            onChange={onFilter}
        />
    </label>
    </>
    )
}


