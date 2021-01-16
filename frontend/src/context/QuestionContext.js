import { useState, createContext } from "react";
export const QuestionContext = createContext();
const QuestionContextProvider = (props) => {


    const [questions, setQuestions] = useState(
        [
            { questionId: '1', formId: '1', title: "Tell me if i'm fucked, cos mmyy love for you is extralalmdmdm iiir.", type: 'TEXT' },
            { questionId: '2', formId: '1', title: "Miamixxxxxxxxxx?", type: 'TEXT' },
            { questionId: '3', formId: '1', title: "Miami fallinf got midnight?", type: 'TEXT' },
            { questionId: '4', formId: '1', title: "I be your puff daddy?", type: 'TEXT' },
            { questionId: '5', formId: '1', title: "Turn up for me tonight?", type: 'TEXT' },
            { questionId: '6', formId: '1', title: "Jealous?", type: 'TEXT' },
            { questionId: '7', formId: '1', title: "Aware i love you at all", type: 'TEXT' },
            { questionId: '8', formId: '1', title: "Do you need my drama?", type: 'TEXT' },
            { questionId: '9', formId: '1', title: "What's your shell about me?", type: 'TEXT' },
            { questionId: '10', formId: '1', title: "What's your mission?", type: 'TEXT' },
            { questionId: '11', formId: '1', title: "Fallig for my love?", type: 'TEXT' },
            { questionId: '12', formId: '1', title: "Do i got your back?", type: 'TEXT' },
            { questionId: '13', formId: '1', title: "Can i get drama?", type: 'TEXT' },
            { questionId: '14', formId: '1', title: "I be your puff daddy?", type: 'TEXT' },
            { questionId: '15', formId: '1', title: "Turn up for me tonight?", type: 'TEXT' },
            { questionId: '16', formId: '1', title: "Jealous?", type: 'TEXT' },
            { questionId: '17', formId: '1', title: "Aware i love you at all", type: 'TEXT' },
        ]
    );
    const [question, setQuestion] = useState({ questionId: "", formId: "", title: "", type: "" });
    const [questionTypes, setQuestionTypes] = useState([
        { typeId: 1, label: "Open Text", type: "TEXT" },
        { typeId: 2, label: "Single Choice", type: "SINGLE", },
        { typeId: 3, label: "Multiple Choice", type: "MULTIPLE", },
        { typeId: 4, label: "Star Rating", type: "STAR", },
        { typeId: 5, label: "Yes or No", type: "YN" }
    ]);
    const [useQType, setUseQType] = useState({ type: "" });
    const [qTypeAction, setQTypeAction] = useState("");
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    //ShowQuestion function works only on desktop..
    const showQuestion = (formId, questionId) => {
        let quest = questions.find(q => q.questionId === questionId && q.formId === formId);
        setQuestion(quest);
        let questionType = questionTypes.find(q => q.type === quest.type);
        setUseQType(questionType);
        setQTypeAction("edit");

    }

    //Settitle works regardless of screens..
    const settitle = qn => {
        setQuestion(qn);
        const q = questions.map(q => q.questionId === qn.questionId ? qn : q);
        setQuestions(q);
    }
    // const developQuestion = question => {
    //     let que = questions.map(q => q.questionId === question.questionId);
    //     que.title = "xxx";
    //     setQuestion(que);
    //     console.log(question);
    //     // console.log(question);
    // }
    return <QuestionContext.Provider value={{
        questions, setQuestions,
        question, setQuestion, useQType, setUseQType,
        questionTypes, setQuestionTypes,
        showQuestion, settitle,
        drawerIsOpen, setDrawerIsOpen,
        qTypeAction, setQTypeAction,
    }}>
        {props.children}
    </QuestionContext.Provider>
}
export default QuestionContextProvider