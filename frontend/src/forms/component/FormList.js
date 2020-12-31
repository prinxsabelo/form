import FormItem from "./FormItem";

const FormList = ({ forms }) => {

    return (
        <div className="formlist overflow-y-auto md:px-12 md:pl-16">
            {forms.map((form, index) => (
                <FormItem form={form} key={form.formId} index={index} />
            ))}
        </div>
    )


}
export default FormList;