import { useState } from "react";
import { registerFormElements } from "../config/index.config";
import CommonForm from "../common-form";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  // confirmPassword: "",
  // lastName: "",
  // dateOfBirth: "",
  // gender: "",
  // termsAndConditions: false,
  // privacyPolicy: false,
  // grecaptchaToken: "",
  // errorMessage: ""
};

function Register() {
  const [registerFormData, setRegisterFormData] = useState(initialFormData);

  function handleRegisterFormSubmit(event) {
    event.preventDefault();
    console.log(registerFormData);

    setRegisterFormData(initialFormData);
  }

  return (
    <div className="w-120 bg-indigo-950 m-auto px-6 py-12 rounded-xl shadow-lg shadow-amber-400">
      <h1 className="text-xl font-bold text-center">Login Form</h1>
      <div className="flex flex-col items-center my-6">
        <CommonForm
          onhandleSubmit={handleRegisterFormSubmit}
          buttonText={"Register"}
          formControls={registerFormElements}
          formData={registerFormData}
          setFormData={setRegisterFormData}
        />
      </div>
    </div>
  );
}

export default Register;
