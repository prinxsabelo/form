import { useContext, useEffect, useState } from "react";
import { useParams, useHistory, } from "react-router-dom";
import { QuestionContext } from "../../context/QuestionContext";
import Button from "../../shared/collection/Button";
import BuildHeader from "../components/BuildHeader";
import FormLabel from "../components/FormLabel";
import QuestionType from "../questions/components/QuestionType";

const MobileBuild = () => {
    let history = useHistory();
    const { questions, currentType, setCurrentType, developQuestion } = useContext(QuestionContext);
    let { formId, questionId } = useParams();

    //Fetch Question through formId and questionId
    // setQuestions should function when submit button is availble..
    let q = (questions.find(x => x.formId === formId && x.questionId === questionId));
    const [question, setQuestion] = useState({ questionId: "", formId: "", title: "", type: "" });

    const changeHandler = e => {
        let { questionId, formId, type } = q;
        developQuestion({ title: e.target.value, questionId, formId, type });
    }
    useEffect(() => {
        if (q) {
            setQuestion(q);
        }
        if (currentType) {
            setQuestion(q => ({ ...q, type: currentType }));
            let { questionId, formId, title } = q;
            if (q.type !== currentType) {
                developQuestion({ title, questionId, formId, type: currentType });
            }
        }

    }, [currentType, setQuestion, q, setCurrentType, developQuestion])



    return (
        <>

            <>
                <header>
                    <FormLabel />
                </header>
                {question.type ?
                    <main>

                        <BuildHeader {...question}  >
                            <Button onClick={() => history.goBack()}>
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </Button>
                        </BuildHeader>
                        <div className="w-full bg-white h-5/6  flex justify-center
                                                px-1 shadow rounded  relative">
                            <form className="flex flex-col space-y-6 w-full ">
                                <textarea className="p-2 border w-full text-base rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md "
                                    placeholder="Type your Question Here.." value={question.title} onChange={changeHandler}
                                >
                                </textarea>
                                <QuestionType  {...question} />
                            </form>
                        </div>

                    </main>

                    :
                    <div>Not Found..</div>
                }
                <footer className="fixed bottom-0 border-t w-full p-3 tracking-wider uppercase text-sm">
                    form made of love for you..
                </footer>
            </>

        </>
    )
}
export default MobileBuild;