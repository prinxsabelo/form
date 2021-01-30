import { createContext, useState } from "react";
import PayloadApi from "./payload-api";

export const Payload = createContext();
const PayloadProvider = props => {
    const [form, setForm] = useState();
    const [questionDetail, setQuestionDetail] = useState({ form_id: null, q_id: null });
    const [currentType, setCurrentType] = useState("");
    const [typeAction, setTypeAction] = useState("");
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [questionTypes, setQuestionTypes] = useState([
        { typeId: 1, label: "Open Text", type: "TEXT" },
        { typeId: 2, label: "Single Choice", type: "SINGLE", },
        { typeId: 3, label: "Multiple Choice", type: "MULTIPLE", },
        { typeId: 4, label: "Star Rating", type: "STAR", },
        { typeId: 5, label: "Yes or No", type: "YN" }
    ]);

    const getForm = (form_id) => {
        const fetchForm = async () => {
            try {
                const data = await PayloadApi;
                const { form } = data;
                setForm(form);
            } catch (err) { }
        };
        fetchForm();
    }
    const developQuestion = qn => {
        console.log(qn);
        const questions = form.questions.map(q => q.q_id === qn.q_id ? qn : q);
        setForm({ ...form, questions });
        console.log(questions);
    }

    //ShowQuestion function works only on desktop..
    const showQuestion = (q_id, type) => {
        setQuestionDetail({ q_id });
        let questionType = questionTypes.find(q => q.type === type);
        setCurrentType(questionType.type);
        setTypeAction("edit");
    }

    return (
        <Payload.Provider value={{
            getForm, setForm,
            form, questionDetail,
            showQuestion, developQuestion,
            currentType, setCurrentType,
            questionTypes, setQuestionTypes,
            drawerIsOpen, setDrawerIsOpen,
            typeAction, setTypeAction,
        }}>
            {props.children}
        </Payload.Provider>
    )
}
export default PayloadProvider;