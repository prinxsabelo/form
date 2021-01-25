import { useContext, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import Backdrop from "../../shared/collection/Backdrop";
import { QuestionContext } from "../../context/QuestionContext";
import Drawer from "../../shared/collection/Drawer";
import Button from "../../shared/collection/Button";

const FormLabel = (props) => {
    const { drawerIsOpen, setDrawerIsOpen, setTypeAction, } = useContext(QuestionContext);
    const openDrawer = () => {
        setTypeAction("new");

        setDrawerIsOpen(true);
    };
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };
    let { formId } = useParams();
    // console.log(formId);
    const changeHandler = e => {
        setTitle(e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();

        editForm(title, formId);
    }
    const addQuestion = () => {
        drawerIsOpen
            ? closeDrawer()
            : openDrawer();
    }
    const { forms, editForm } = useContext(FormContext);
    let form = { title: "" };
    form = forms.find(f => f.formId === formId || { title: "" });

    const [title, setTitle] = useState(form.title);
    let buildCheck = false;
    if (window.location.pathname.search("build") !== -1) {
        buildCheck = true;
    } else {
        buildCheck = false;
    }
    let history = useHistory();
    return <>
        <div className="hidden md:flex items-center mt-1 space-x-1 px-3">
            <div className="flex justify-center items-center space-x-2">
                <NavLink to="/forms" className="px-4 py-2 bg-black rounded text-white">
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </NavLink>
                <div>
                    <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </div>

            </div>

            <form className="w-1/2 ">
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
                <div className="bg-gray-600 h-10 w-10 rounded text-white flex items-center justify-center">
                    IM
                </div>
            </div>
            <div className="flex flex-auto justify-center">

                <button className="px-4 py-2 text-white bg-gray-800 hover:shadow-lg rounded outline-none focus:outline-none" type="button"
                    onClick={addQuestion}
                    style={{ transition: "all .30s ease" }}>
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
                <Drawer show={drawerIsOpen} action="new" formId={formId} />

                {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

            </div>
        </div>
        <div className="md:hidden">
            <div className="flex items-center border-b-4 border-gray-300 shadow">
                <div className="w-3/4  flex items-center py-1 ">
                    <button onClick={() => history.goBack()} className="w-10 flex items-center justify-center p-2">
                        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <span className="p-2">
                        {title}
                    </span>

                </div>
                <div className="flex-auto  flex items-center justify-end  py-1 pt-2 pr-1">
                    <Button >Edit Form</Button>
                </div>
            </div>
        </div>
    </>
}
export default FormLabel;