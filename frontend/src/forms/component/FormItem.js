import { NavLink } from "react-router-dom";
import FormLink from "./FormLink";
const FormItem = ({ form, index }) => {

    const actionsArr = [
        {
            id: 1,
            action: "share",
            name: "Share",
        },
        {
            id: 2,
            action: "results",
            name: " Results",
        },
        {
            id: 3,
            action: "build",
            name: "Edit"
        }
    ]

    return (

        <div className={`flex px-2 py-1 md:px-6 md:py-3 md:m-3 bg-white items-center md:border-2  border-black md:rounded
                    ${index > 0 ? 'border-t border-t-4' : ''}`} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-8 h-8 md:hidden" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
            </svg>

            <div className="w-full md:hidden">
                <h4 className="tracking-wide capitalize"> {form.title}</h4>
                <div className="flex space-x-4 items-center ">
                    <div>
                        <span className="text-xs tracking-wide"> {form.response} responses</span>
                    </div>
                    <div>
                        <span className="text-xs tracking-wide">Modified on {form.date}</span>
                    </div>

                </div>
            </div>
            <div className="hidden md:flex space-x-16 w-full items-center ">
                <NavLink className="w-1/3" to={`/form/${form.formId}/build`} >
                    <h3 className="text-xl"> {form.title}</h3>
                    <p className="text-sm"> modified on {form.date}</p>
                </NavLink>
                <div className="w-24  whitespace-nowrap">
                    {form.response} responses
                    </div>
                {actionsArr.map(a => <FormLink {...a} key={a.id} formId={form.formId} />)}


            </div>
        </div>


    )


}
export default FormItem;