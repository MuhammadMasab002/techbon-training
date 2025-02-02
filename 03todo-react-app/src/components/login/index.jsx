import { loginFormElements } from "../config/index.config";
import CommonForm from "../common-form";
import { useState } from "react";

const initialFormData = {
  email: "",
  password: "",
};

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    console.log(loginFormData);

    setLoginFormData(initialFormData);
  }

  return (
    <div className="w-120 bg-indigo-950 m-auto px-6 py-12 rounded-xl shadow-lg shadow-amber-400">
      <h1 className="text-xl font-bold text-center">Login Form</h1>
      <div className="flex flex-col items-center my-6">
        <CommonForm
          buttonText={"Login"}
          onhandleSubmit={handleLoginFormSubmit}
          formData={loginFormData}
          setFormData={setLoginFormData}
          formControls={loginFormElements}
        />
      </div>
    </div>
  );
}

export default LoginComponent;
