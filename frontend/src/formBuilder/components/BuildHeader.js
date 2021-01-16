import { useContext } from "react";
import Button from "../../shared/collection/Button"

import { QuestionContext } from "../../context/QuestionContext";
import Drawer from "../../shared/collection/Drawer";
const BuildHeader = ({ type, children }) => {

    const { drawerIsOpen, setDrawerIsOpen, setQTypeAction, questionTypes, useQType, setUseQType } = useContext(QuestionContext);
    let qType = questionTypes.find(qt => qt.type === type);

    const openDrawer = () => {
        if (!useQType.type && qType.type) {
            setUseQType({ type: qType.type })
        }
        setDrawerIsOpen(true);
        setQTypeAction("edit");

    };

    return (
        <div className="flex justify-between md:justify-end md:-mr-4 p-1 bg-gray-100 w-full md:w-2/3 text-right">
            {qType &&
                <Button onClick={openDrawer}>
                    {qType.label}
                </Button>
            }
            {children}

            <Drawer show={drawerIsOpen} />
        </div>
    )
}
export default BuildHeader