import MultipleType from "./types/MultipleType";
import SingleType from "./types/SingleType";
import StarType from "./types/StarType";
import TextType from "./types/TextType";
import YNType from "./types/YNType";

const QuestionType = (props) => {
    const { type } = props;

    return (
        <div className="flex justify-center w-full mt-2">
            {
                type === "TEXT" && <TextType {...props} />
            }
            {
                type === "SINGLE" && <SingleType {...props} />
            }
            {
                type === "MULTIPLE" && <MultipleType  {...props} />
            }
            {
                type === "STAR" && <StarType {...props} />
            }
            {
                type === "YN" && <YNType {...props} />
            }
        </div>
    )

}
export default QuestionType;