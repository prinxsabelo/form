import { useState, createContext } from "react";
export const QuestionContext = createContext();
const QuestionContextProvider = (props) => {


    const [questions, setQuestions] = useState(
        [
            { questionId: '1', formId: '1', title: "Tell me if i'm fucked, cos mmyy love for you is extralalmdmdm iiir.", type: 'TEXT' },
            { questionId: '2', formId: '1', title: "Miamixxxxxxxxxx?", type: 'TEXT' },
            // { questionId: '3', formId: '1', title: "Miami fallinf got midnight?", type: 'TEXT' },
            // { questionId: '4', formId: '1', title: "I be your puff daddy?", type: 'TEXT' },
            // { questionId: '5', formId: '1', title: "Turn up for me tonight?", type: 'TEXT' },
            // { questionId: '6', formId: '1', title: "Jealous?", type: 'TEXT' },
            // { questionId: '7', formId: '1', title: "Aware i love you at all", type: 'TEXT' },
            // { questionId: '8', formId: '1', title: "Do you need my drama?", type: 'TEXT' },
            // { questionId: '9', formId: '1', title: "What's your shell about me?", type: 'TEXT' },
            // { questionId: '10', formId: '1', title: "What's your mission?", type: 'TEXT' },
            // { questionId: '11', formId: '1', title: "Fallig for my love?", type: 'TEXT' },
            // { questionId: '12', formId: '1', title: "Do i got your back?", type: 'TEXT' },
            // { questionId: '13', formId: '1', title: "Can i get drama?", type: 'TEXT' },
            // { questionId: '14', formId: '1', title: "I be your puff daddy?", type: 'TEXT' },
            // { questionId: '15', formId: '1', title: "Turn up for me tonight?", type: 'TEXT' },
            // { questionId: '16', formId: '1', title: "Jealous?", type: 'TEXT' },
            // { questionId: '17', formId: '1', title: "Aware i love you at all", type: 'TEXT' },
        ]
    );

    const [questionTypes, setQuestionTypes] = useState([
        { typeId: 1, label: "Open Text", type: "TEXT" },
        { typeId: 2, label: "Single Choice", type: "SINGLE", },
        { typeId: 3, label: "Multiple Choice", type: "MULTIPLE", },
        { typeId: 4, label: "Star Rating", type: "STAR", },
        { typeId: 5, label: "Yes or No", type: "YN" }
    ]);

    const [currentType, setCurrentType] = useState("");
    const [typeAction, setTypeAction] = useState("");
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [questionDetail, setQuestionDetail] = useState({ formId: null, questionId: null });

    //ShowQuestion function works only on desktop..
    const showQuestion = (formId, questionId, type) => {
        console.log(formId, questionId, type);
        setQuestionDetail({ formId, questionId });
        let questionType = questionTypes.find(q => q.type === type);
        setCurrentType(questionType.type);
        setTypeAction("edit");
    }

    // Develop questions works on both mobile and desktop.. Sending data to db..
    const developQuestion = qn => {
        // console.log(qn);
        const q = questions.map(q => q.questionId === qn.questionId ? qn : q);
        setQuestions(q);
    }
    const addQuestion = type => {
        alert(`add question for ${type}`);

    }
    return <QuestionContext.Provider value={{

        questions, setQuestions,
        currentType, setCurrentType,
        questionTypes, setQuestionTypes,
        showQuestion, developQuestion,
        drawerIsOpen, setDrawerIsOpen,
        typeAction, setTypeAction,
        addQuestion, questionDetail
    }}>
        {props.children}
    </QuestionContext.Provider>
}
export default QuestionContextProvider