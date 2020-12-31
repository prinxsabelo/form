import FormLabel from "../components/FormLabel";
import QuestionList from "../components/questions/components/QuestionList";
import TabContent from "../components/tabs/TabContent";
import Tabs from "../components/tabs/Tabs"

const FormBuilder = () => {

    const tabs = [
        { id: 1, label: "Build", link: `build` },
        { id: 2, label: "Share", link: `share` },
        { id: 3, label: "Results", link: `results` },
        { id: 4, label: "Settings", link: `settings` }
    ];
    return <>
        <header className="flex w-full  h-16 pt-3 px-1 ">
            <div className="w-1/3" >
                <FormLabel />
            </div>
            <div className="w-1/2 bg-gray-200">
                <Tabs tabs={tabs} />

            </div>
            <div className="bg-gray-300 flex-auto">xxx</div>
        </header>
        <main className="flex w-full  mt-1 px-1 absolute top-16 bottom-0 bg-gray-900">
            <div className="w-1/3 text-white" >
                <QuestionList />
            </div>
            <div className="flex-auto bg-gray-200">
                <TabContent />
            </div>
        </main>
    </>
}
export default FormBuilder;