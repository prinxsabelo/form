import { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FormContext } from "../../context/FormContext";

const FormLabel = (props) => {
    let { formId } = useParams();

    const changeHandler = e => {
        setTitle(e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();

        editForm(title, formId);
    }
    const { forms, editForm } = useContext(FormContext);
    let form = forms.find(f => f.formId === formId);
    const [title, setTitle] = useState(form.title);
    let buildCheck = false;
    if (window.location.pathname.search("build") !== -1) {
        buildCheck = true;
    } else {
        buildCheck = false;
    }

    return <>
        <div className="flex items-center mt-1 space-x-1">
            <div className="flex justify-center items-center space-x-2">
                <NavLink to="/forms" className="px-4 py-2 bg-black rounded text-white">
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </NavLink>
                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </div>
            <form className="w-2/3 ">
                {buildCheck ?
                    (
                        <input value={title} onChange={changeHandler} onBlur={submitForm}
                            placeholder="Enter Form Name"
                            className="w-full px-4 py-2 border border-gray-800 rounded" />)
                    : (
                        <div className="px-4 py-2">{title}</div>
                    )
                }
            </form>
            <div className="flex flex-auto justify-center">
                <div className="bg-gray-600 h-11 w-11 rounded text-gray-100 flex items-center justify-center">
                    IM
                </div>
            </div>
        </div>

    </>
}
export default FormLabel;