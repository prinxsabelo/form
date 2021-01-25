import QuestionList from "../questions/components/QuestionList"

const Questions = (props) => {
    return <div>
        <div className="flex p-1">
            <input placeholder="Search Question" className="border h-8 border-red-500 w-full p-2 rounded-lg focus:rounded-lg" />
        </div>
        <QuestionList />
    </div>
}
export default Questions;