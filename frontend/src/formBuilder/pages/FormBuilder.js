import { Redirect, useParams } from "react-router-dom";
import FormLabel from "../components/FormLabel";
import Tabs from "../components/tabs/Tabs";
import { ViewportContext } from "../../context/ViewportContext";
import { useContext } from "react";
import TabContent from "../components/tabs/TabContent";
import QuestionList from "../questions/components/QuestionList";
import NavBar from "../../shared/wrapper/NavBar";
const FormBuilder = () => {
    let { formId } = useParams();
    const { width } = useContext(ViewportContext);
    const breakpoint = 768;

    const mobileTabs = [
        { id: 1, label: "Questions", link: `questions` },
        { id: 2, label: "Share", link: `share` },
        { id: 3, label: "Results", link: `results` },
        { id: 4, label: "Settings", link: `settings` }];

    const desktopTabs = [
        { id: 1, label: "Build", link: `build` },
        { id: 2, label: "Share", link: `share` },
        { id: 3, label: "Results", link: `results` },
        { id: 4, label: "Settings", link: `settings` }
    ]

    return (
        <>
            {/* Redirect to fit in for mobile phones.. */}
            {(window.location.pathname === `/form/${formId}/build` && width <= breakpoint) &&
                <Redirect to={`/form/${formId}/questions`} />
            }
            {/* Redirect to fit in for large devices.. */}
            {(window.location.pathname === `/form/${formId}/questions` && width > breakpoint) &&
                <Redirect to={`/form/${formId}/build`} />
            }

            {width > breakpoint && (
                <div className="hidden md:block">
                    <header className="flex w-full  h-16 pt-3  ">
                        <div className="w-1/3" >
                            <FormLabel />
                        </div>
                        <div className="w-1/2 ">
                            <Tabs tabs={desktopTabs} />
                        </div>
                        <div className="bg-gray-100 flex-auto">xxx</div>
                    </header>
                    <main className="flex w-full  mt-1 px-1 absolute top-16 bottom-0 ">

                        <div className="w-1/3 " >

                            <QuestionList />
                        </div>
                        <div className="flex-auto bg-gray-100">
                            <TabContent />
                        </div>
                    </main>
                </div>
            )}
            {width <= breakpoint && (
                <div className="md:hidden">
                    <header>
                        <FormLabel />
                        <Tabs tabs={mobileTabs} />
                    </header>
                    <main>
                        <TabContent />
                    </main>
                    <footer>
                        <NavBar />
                    </footer>
                </div>
            )}
        </>
    )
}
export default FormBuilder