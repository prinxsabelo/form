import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuestionContext } from "../../context/QuestionContext";
import Button from "../../shared/collection/Button";
import BuildHeader from "../components/BuildHeader";
import FormLabel from "../components/FormLabel";

const MobileBuild = () => {
    const { questions, useQType } = useContext(QuestionContext);
    let { formId, questionId } = useParams();

    //Fetch Question through formId and questionId
    // setQuestions should function when submit button is availble..
    const [question, setQuestion,

    ] = useState(questions.find(q => q.questionId === questionId && q.formId === formId));

    const changeTitle = (e) => {
        let { questionId, formId, type } = question;
        setQuestion({ title: e.target.value, type, formId, questionId });
        console.log(question);
    }

    useEffect(() => {

        if (useQType.type) {
            setQuestion(q => ({ ...q, type: useQType.type }))
        }

    }, [useQType.type, setQuestion])


    return (
        <>
            <header>
                <FormLabel />
            </header>
            <main>
                <BuildHeader type={question.type}  >
                    <Button onClick={() => alert('save')}>  save</Button>
                </BuildHeader>
                <div className="w-full bg-white h-5/6  flex justify-center
                                                px-1 shadow-lg rounded  relative">
                    <form className="flex flex-col space-y-6 w-full ">
                        <textarea className="px-4 py-2 border w-full text-base rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md "
                            placeholder="Type your Question Here.." value={question.title} onChange={changeTitle}
                        >
                        </textarea>
                        <div className="flex justify-center">
                            {question.type}
                        </div>
                    </form>
                </div>

            </main>
            <footer className="fixed bottom-0 border-t w-full p-3 tracking-wider uppercase text-sm">
                form made of love for you..
            </footer>
        </>
    )
}
export default MobileBuild;