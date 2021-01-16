import './Drawer.css';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { QuestionContext } from '../../context/QuestionContext';
import { useContext, useRef } from 'react';
import QTypeIcon from './QTypeIcon';
import { useParams } from 'react-router-dom';
const Drawer = props => {
    let { formId, questionId } = useParams();
    // const { formId } = props;
    const nodeRef = useRef(null)
    const { useQType, questionTypes, question, setUseQType,
        setDrawerIsOpen, qTypeAction } = useContext(QuestionContext);
    let type = "";
    if (useQType && qTypeAction === "edit") {
        type = useQType.type;
    } else {
        type = "";
    }
    const setQType = (type) => {
        console.log(type);
        if (question.questionId) {
            formId = question.formId;
            questionId = question.questionId;
        }
        setUseQType({ type, formId });
        console.log(formId, questionId);

        setDrawerIsOpen(false);
    }

    let content = (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.show}
            timeout={400}
            classNames={qTypeAction === "new" ? `slide-in-left` : `slide-in-right`}
            mountOnEnter
            unmountOnExit
        >
            <aside className={qTypeAction === "new" ? `drawer` : `edit-drawer`} onClick={props.onClick}>
                <div className="flex justify-center mt-2 border-b-2">
                    <h3 className="text-center px-6 py-3 text-lg">
                        {qTypeAction === "new" ? "Choose " : "Change "} Question Type
                    </h3>
                </div>
                <div>
                    {questionTypes.map((qt, index) =>
                        <div key={index} onClick={() => setQType(qt.type)}
                            className={`${type === qt.type ? 'bg-gray-200' : ''}
                                    cursor-pointer flex space-x-4 border-r-2 m-2
                                    shadow border-b-2 border-l-2 items-center hover:bg-gray-200
                                `}
                        >
                            <div className="p-2 ">
                                <QTypeIcon type={qt.type} />
                            </div>
                            <div className="tracking-wide">
                                <span className="text-normal"> {qt.label}</span>

                            </div>
                        </div>
                    )}
                </div>
            </aside>
        </CSSTransition>
    );

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}
export default Drawer