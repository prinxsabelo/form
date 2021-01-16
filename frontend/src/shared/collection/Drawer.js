import './Drawer.css';
import ReactDOM from 'react-dom';
import { QuestionContext } from '../../context/QuestionContext';
import { useContext, useRef } from 'react';
import QTypeIcon from './QTypeIcon';
import { CSSTransition } from 'react-transition-group';
const Drawer = props => {
    const nodeRef = useRef(null);
    const { useQType, setUseQType, questionTypes, setDrawerIsOpen, qTypeAction } = useContext(QuestionContext);
    console.log(useQType);
    const setQType = (type) => {
        setUseQType({ type });
        setDrawerIsOpen(false);
    }
    let content = (
        <CSSTransition
            nodeRef={nodeRef} in={props.show} timeout={400} mountOnEnter unmountOnExit
            classNames={qTypeAction === "new" ? `slide-in-left` : `slide-in-right`}>
            <aside className={qTypeAction === "new" ? `drawer` : `edit-drawer`} onClick={props.onClick}>
                <div className="flex justify-center mt-2 border-b-2">
                    <h3 className="text-center px-6 py-3 text-lg">
                        {qTypeAction === "new" ? "Choose " : "Change "} Question Type
                    </h3>
                </div>
                <div>
                    {questionTypes.map(qt =>
                        <div key={qt.typeId} onClick={() => setQType(qt.type)}
                            className={`cursor-pointer flex space-x-4 border-r-2 m-2
                            shadow border-b-2 border-l-2 items-center hover:bg-gray-200 hover:text-gray-800
                            ${qt.type === useQType.type ? 'bg-gray-800  text-yellow-100' : ''}`}
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
        </CSSTransition>)
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}
export default Drawer