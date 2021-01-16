import { useContext } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import BuildHeader from "../components/BuildHeader";

const DesktopBuild = () => {
    const changeHandler = e => {
        // console.log(e);

        settitle({ title: e.target.value, questionId, formId, type });
    }
    const { useQType, question, settitle } = useContext(QuestionContext);
    const { questionId, title, formId, type } = question;
    // console.log(title);
    // console.log(useQType, question);
    return (
        <>
            <div className="hidden md:flex flex-col justify-center items-center build">
                {(useQType && question.title) ?
                    <>
                        <BuildHeader type={useQType.type} />
                        <div className="w-2/3 bg-white h-5/6  flex justify-center p-8 shadow-lg rounded  relative">
                            <form className="flex flex-col space-y-3 w-full ">
                                <textarea className="px-4 py-2 border w-full text-lg rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md "
                                    onChange={changeHandler} placeholder="Type your Question Here.." value={title}
                                >

                                </textarea>
                            </form>
                        </div>
                    </>
                    :
                    <div>Pick Question</div>
                }
            </div>
        </>
    )
}
export default DesktopBuild;