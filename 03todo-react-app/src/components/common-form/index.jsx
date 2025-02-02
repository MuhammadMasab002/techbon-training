import InputFunc from "../common-inputs";

const formInputTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",

  //   number: InputFunc,
  //   email: InputFunc,
  //   checkbox: InputFunc,
  //   radio: InputFunc,
  //   file: InputFunc,
  //   password: InputFunc,
};

function CommonForm({ formControls = [], formData, setFormData, buttonText, onhandleSubmit }) {
  function renderFormElement(getCurrentElement) {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formInputTypes.INPUT:
        content = (
          <InputFunc
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              });
            }}
          />
        );
        break;

      default:
        break;
    }

    return content;
  }

  return (
    <form onSubmit={onhandleSubmit}>
      {formControls.length
        ? formControls.map((singleFormElement) =>
            renderFormElement(singleFormElement)
          )
        : null}

      <div className="text-center mt-6">
        <button className="bg-blue-700 text-md font-bold text-white py-3 rounded-md hover:cursor-pointer hover:bg-blue-500 px-10 ">
          {buttonText || "Submit"}
        </button>
      </div>
    </form>
  );
}

export default CommonForm;
