import { useContext, useEffect } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import BuildHeader from "../components/BuildHeader";
import QuestionType from "../questions/components/QuestionType";

const DesktopBuild = () => {
    const changeHandler = e => {
        developQuestion({ title: e.target.value, questionId, formId, type });
    }
    const { currentType, question, setQuestion, developQuestion } = useContext(QuestionContext);
    const { questionId, title, formId, type } = question;
    useEffect(() => {
        if (currentType.type) {
            developQuestion({ title, questionId, formId, type: currentType.type });
        }
    }, [currentType.type, setQuestion, developQuestion, formId, questionId, title])
    return (
        <>
            <div className="hidden md:flex flex-col items-center pt-12 build shadow bg-white">
                {(currentType && question.title) ?
                    <>
                        <BuildHeader type={currentType.type} />
                        <form className="flex flex-col md:justify-end  p-1 bg-white md:w-2/3 ">
                            <textarea className="px-4 py-2 border w-full text-lg rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md "
                                onChange={changeHandler} placeholder="Type your Question Here.." value={title}
                            >
                            </textarea>
                            <QuestionType type={question.type} questionId={question.questionId} />
                        </form>
                    </>
                    :
                    <div>Pick Question</div>
                }
            </div>
        </>
    )
}
export default DesktopBuild;