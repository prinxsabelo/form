const QuestionType = (props) => {
    const { type, questionId } = props;
    console.log(questionId);
    return (
        <div className="flex justify-center w-full mt-2">
            {
                type === "TEXT" &&
                <div>
                    OPEN TEXT
                    <div>
                        <input className="border border-red-400" />
                    </div>
                </div>
            }
            {
                type === "SINGLE" &&
                <div>

                    SINGLE CHOICE
                </div>
            }
            {
                type === "MULTIPLE" &&
                <div>
                    MULTIPLE CHOICE
                </div>
            }
            {
                type === "STAR" &&
                <div>
                    STAR
                </div>
            }
            {type === "YN" &&
                <div>
                    YN
                </div>
            }
        </div>
    )

}
export default QuestionType;