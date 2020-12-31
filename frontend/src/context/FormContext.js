import { useState, createContext, useContext } from "react";
import { Context } from "./Context";
import { v4 as uuid } from "uuid";

export const FormContext = createContext();
const FormContextProvider = (props) => {

    const { setShowModal, setModalContent } = useContext(Context);
    const [title, setTitle] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        setTitle("");
        setShowModal(false);
        setForms([...forms, { title, date: "Nov 20, 2020", formId: uuid(), response: 0 }])
    }
    const addForm = () => {
        setModalContent({
            header: 'Create form',
            placeholder: 'Give your form a name',
            type: "form",
            className: `fixed bg-white 
                                top-28 left-4 right-4 p-4 z-50 rounded
                                md:top-1/4 md:bottom-1/4 md:left-1/3 md:w-1/3  `,
        });
        setShowModal(true);
    }
    const editForm = (title, formId) => {

        let formIndex = forms.findIndex(f => f.formId === formId);
        if (formIndex !== -1) {
            forms[formIndex].title = title;
            setForms(forms);
        }

    }
    const [forms, setForms] = useState([
        { formId: '1', title: "Black cofee game", response: 5, date: "Dec 25, 2020" },
        { formId: '2', title: "Danegrous introduction", response: 5, date: "Jan 1, 2021" },
        { formId: '3', title: "Reconsider Baby", response: 9, date: "OCt 21, 1997" },
        { formId: '4', title: "Dirty for you beyond", response: 8, date: "May 11, 2007" },
        { formId: '5', title: "Starting Introducion", response: 10, date: "Jun 11, 3007" },
        { formId: '6', title: "Tell visual fault", response: 7, date: "Feb 13, 2000" },
        { formId: '7', title: "Sleep and worried", response: 3, date: "Nov 11, 2003" },
        { formId: '8', title: "My thoughts", response: 9, date: "Sep 11, 2002" },
        { formId: '9', title: "Wetin dey xup", response: 4, date: "Jan 23, 2004" },
        { formId: '10', title: "Dirty for you beyond", response: 8, date: "May 11, 2007" },
        { formId: '11', title: "Starting Introducion", response: 10, date: "Jun 11, 3007" },
        { formId: '12', title: "Tell visual fault", response: 7, date: "Feb 13, 2000" },
    ]);
    return <FormContext.Provider value={{ addForm, editForm, forms, title, setTitle, submitForm }}>
        {props.children}
    </FormContext.Provider>
}
export default FormContextProvider;