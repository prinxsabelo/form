import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { QuestionContext } from "../../context/QuestionContext";
import Button from "../../shared/collection/Button";
import BuildHeader from "../components/BuildHeader";
import FormLabel from "../components/FormLabel";



const MobileBuild = () => {
    const changeTitle = e => {
        setQuestionData({ title: e.target.value });
    }
    const { questions, questionTypes } = useContext(QuestionContext);
    let { formId, questionId } = useParams();

    // formId = parseInt(formId);
    // questionId = parseInt(questionId);
    let questionType;
    const question = questions.find(q => q.questionId === questionId && q.formId === formId);
    if (question) {
        questionType = questionTypes.find(q => q.type === question.type);
    }

    const [questionData, setQuestionData] = useState(question);
    return (
        <>
            <header>
                <FormLabel />
            </header>
            <main>
                {
                    questionData ? (
                        <>
                            <BuildHeader label={questionType.label} title={questionData.title} formId={question.formId}  >
                                <Button onClick={() => alert('save')}>  save</Button>
                            </BuildHeader>
                            <div className="w-full bg-white h-5/6  flex justify-center
                                                px-1 shadow-lg rounded  relative">
                                <form className="flex flex-col space-y-6 w-full ">
                                    <textarea className="px-4 py-2 border w-full text-base rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md " onChange={changeTitle}
                                        placeholder="Type your Question Here.." value={questionData.title}
                                    >
                                    </textarea>
                                    <div className="text-sm flex flex-col" >
                                        <label className="text-center ">Feel free to give people a response to their answer..</label>
                                        <textarea className="mt-2 px-4 py-2 border w-full rounded-md question-textarea
                                                focus:outline-none focus:shadow-md hover:shadow-md "
                                            placeholder="Type your Feedback response here.."
                                        >
                                        </textarea>
                                    </div>
                                </form>
                            </div>
                        </>

                    ) : (
                            <div>Question Not Found..</div>
                        )

                }
            </main>
            <footer className="fixed bottom-0 border-t w-full p-3 tracking-wider uppercase text-sm">
                FORM made of love for you..
            </footer>

        </>
    )
}
export default MobileBuild;