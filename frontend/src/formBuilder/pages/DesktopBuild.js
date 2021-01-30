import { useContext, useEffect, useState } from "react";
import { Payload } from "../../context/Payload";
import BuildHeader from "../components/BuildHeader";
import QuestionType from "../questions/components/QuestionType";

const DesktopBuild = () => {
    const { questionDetail, form, currentType, developQuestion } = useContext(Payload);
    const { q_id } = questionDetail;

    const [question, setQuestion] = useState();
    const changeHandler = e => {
        // console.log(question);
        const { type, properties } = question;
        // let { questionId, form_id, type } = question;
        developQuestion({ title: e.target.value, q_id, properties, type });
    }
    useEffect(() => {
        if (form && form.questions) {
            let q = (form.questions.find(x => x.q_id === q_id));
            setQuestion(q);
            if (q && (q.type !== currentType)) {
                let { q_id, title, properties } = q;
                developQuestion({ title, q_id, properties, type: currentType });
            }
        }
        if (question) {
            // console.log(question);
        }

    }, [form, question, q_id, currentType, developQuestion]);

    return (
        <>
            <div className="hidden md:flex flex-col items-center pt-12 build shadow bg-white">
                {(currentType && (question && question.title)) ?
                    <>
                        <BuildHeader  {...question} />
                        <form className="flex flex-col md:justify-end  p-1 bg-white md:w-2/3 ">
                            <textarea className="px-4 py-2 border w-full text-lg rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md "
                                onChange={changeHandler} placeholder="Type your Question Here.." value={question.title}
                            >
                            </textarea>
                            {(question && question.type) && <QuestionType {...question} />}

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