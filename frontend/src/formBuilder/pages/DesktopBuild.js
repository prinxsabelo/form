import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import BuildHeader from "../components/BuildHeader";
import QuestionType from "../questions/components/QuestionType";

const DesktopBuild = () => {
    const { developQuestion, currentType, questionDetail, questions } = useContext(QuestionContext);
    let { formId, questionId } = questionDetail;
    let q = (questions.find(x => x.formId === formId && x.questionId === questionId));
    const [question, setQuestion] = useState({ questionId: "", formId: "", title: "", type: "" });
    const changeHandler = e => {
        let { questionId, formId, type } = q;
        developQuestion({ title: e.target.value, questionId, formId, type });
    }
    useEffect(() => {
        console.log(currentType);
        if (q) {
            setQuestion(q);
            if (currentType) {
                setQuestion(q => ({ ...q, type: currentType }));
                let { questionId, formId, title } = q;
                if (q.type !== currentType) {
                    developQuestion({ title, questionId, formId, type: currentType });
                }
            }

        }

    }, [currentType, q, setQuestion, developQuestion])


    return (
        <>
            <div className="hidden md:flex flex-col items-center pt-12 build shadow bg-white">
                {(currentType && question.title) ?
                    <>
                        <BuildHeader  {...question} />
                        <form className="flex flex-col md:justify-end  p-1 bg-white md:w-2/3 ">
                            <textarea className="px-4 py-2 border w-full text-lg rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md "
                                onChange={changeHandler} placeholder="Type your Question Here.." value={question.title}
                            >
                            </textarea>
                            {question.type && <QuestionType type={question.type} questionId={question.questionId} />}

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