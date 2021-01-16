import { useState, createContext } from "react";
export const QuestionContext = createContext();
const QuestionContextProvider = (props) => {


    const [questions, setQuestions] = useState(
        [

            { questionId: '1', formId: '1', title: "Tell me if i'm fucked, cos mmyy love for you is extralalmdmdm iiir.", typeId: '1' },
            { questionId: '2', formId: '1', title: "Miamixxxxxxxxxx?", typeId: '1' },
            { questionId: '3', formId: '1', title: "Miami fallinf got midnight?", typeId: '1' },
            { questionId: '4', formId: '3', title: "I be your puff daddy?", typeId: '1' },
            { questionId: '5', formId: '1', title: "Turn up for me tonight?", typeId: '1' },
            { questionId: '6', formId: '2', title: "Jealous?", typeId: '1' },
            { questionId: '7', formId: '4', title: "Aware i love you at all", typeId: '1' },
            { questionId: '8', formId: '1', title: "Do you need my drama?", typeId: '1' },
            { questionId: '9', formId: '3', title: "What's your shell about me?", typeId: '1' },
            { questionId: '10', formId: '1', title: "What's your mission?", typeId: '1' },
            { questionId: '11', formId: '1', title: "Fallig for my love?", typeId: '1' },
            { questionId: '12', formId: '3', title: "Do i got your back?", typeId: '1' },
            { questionId: '13', formId: '1', title: "Can i get drama?", typeId: '1' },
            { questionId: '14', formId: '3', title: "I be your puff daddy?", typeId: '1' },
            { questionId: '15', formId: '1', title: "Turn up for me tonight?", typeId: '1' },
            { questionId: '16', formId: '2', title: "Jealous?", typeId: '1' },
            { questionId: '17', formId: '4', title: "Aware i love you at all", typeId: '1' },
        ]
    );
    const [question, setQuestion] = useState({ questionId: "", formId: "", title: "", typeId: "" });
    const [questionTypes, setQuestionTypes] = useState([
        { typeId: '1', label: "Open Text", type: "text" },
        { typeId: '2', label: "Single Choice", type: "single", },
        { typeId: '3', label: "Multiple Choice", type: "multiple", },
        { typeId: '4', label: "Star Rating", type: "star", },
        { typeId: '5', label: "Yes or No", type: "yn" }
    ]);
    const [useQType, setUseQType] = useState(null);
    const [qTypeAction, setQTypeAction] = useState(null);

    const showQuestion = (formId, questionId) => {
        console.log(qTypeAction, formId, questionId);
        // formId = parseInt(formId);
        // questionId = parseInt(questionId);
        let quest = questions.find(q => q.questionId === questionId && q.formId === formId);
        setQuestion(quest);
        let questionType = questionTypes.find(q => q.typeId === quest.typeId);
        setUseQType(questionType);
        setQTypeAction("edit");

    }
    const settitle = qn => {
        setQuestion(qn);
        const q = questions.map(q => q.questionId === qn.questionId ? qn : q);
        setQuestions(q);
    }
    const setQLabel = qn => {
        console.log(qn);
        setQuestion(qn);
    }

    return <QuestionContext.Provider value={{
        questions, setQuestions,
        question, setQuestion, useQType,
        questionTypes, setQuestionTypes,
        showQuestion, settitle, setQLabel
    }}>
        {props.children}
    </QuestionContext.Provider>
}
export default QuestionContextProvider