import { useState } from "react";

function Forms() {
  //   const [nameValue, setNameValue] = useState("");

  //   function handleText(event) {
  //     setNameValue(event.target.value);
  //     console.log(event.target.value);
  //   }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function submitForm(event) {
    event.preventDefault();

    // console.log(nameValue);
    console.log("onsubmit", formData);
    // setFormData({
    //   name: "",
    //   email: "",
    // });
  }

//   console.log(formData);

  return (
    <div>
      <div className="bg-indigo-400 w-100 m-auto text-center p-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Forms</h1>
        <form onSubmit={submitForm}>
          <input
            // value={nameValue}
            // onChange={handleText}
            value={formData.name}
            onChange={handleFormData}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="p-2 rounded-md w-full border-2 my-4 focus:outline-0"
          />
          <input
            // value={nameValue}
            // onChange={handleText}
            onChange={handleFormData}
            value={formData.email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 rounded-md w-full border-2 my-4 focus:outline-0"
          />
          <button
            type="submit"
            className="bg-amber-400 rounded-md px-3 py-2 hover:cursor-pointer font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forms;
