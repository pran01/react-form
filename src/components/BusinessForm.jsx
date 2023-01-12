import { useState } from "react";

const BusinessForm = ({ stage, setStage, businessData, setBusinessData }) => {
  const [emailValid, setEmailValid] = useState(true);
  const [cNameValid, setCNameValid] = useState(true);
  const [numberValid, setNumberValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const checkFormValid = () => {
    if (!cNameValid || businessData.cName === "") {
      return false;
    }
    if (!emailValid || businessData.email === "") {
      return false;
    }
    if (!numberValid || businessData.number === "") {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    if (checkFormValid()) {
      console.log(businessData);
      setStage(stage + 1);
    }
    e.preventDefault();
  };
  const changeEmail = (event) => {
    setBusinessData({ ...businessData, email: event.target.value });
    setEmailValid(
      event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    );
  };
  const changeCName = (event) => {
    setBusinessData({ ...businessData, cName: event.target.value });
    setCNameValid(/^[A-Za-z]*$/.test(event.target.value));
    setFormValid(checkFormValid());
  };
  const changeNumber = (event) => {
    setBusinessData({ ...businessData, number: event.target.value });
    setNumberValid(
      /^[0-9]*$/.test(event.target.value) && event.target.value.length === 10
    );
    setFormValid(checkFormValid());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-4/5 items-center text-sm md:text-lg text-white">
      <input
        type="text"
        value={businessData.cName}
        onChange={changeCName}
        placeholder="Company Name"
        className={`w-full h-12 px-4 bg-sky-500/60 placeholder:text-gray-300 border-l-4 ${
          cNameValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-6`}
      />
      {!cNameValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid name
        </span>
      )}
      <input
        type="email"
        value={businessData.email}
        onChange={changeEmail}
        placeholder="Email"
        className={`w-full h-12 px-4 bg-sky-500/60 placeholder:text-gray-300 border-l-4 ${
          emailValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-6`}
      />
      {!emailValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid email
        </span>
      )}
      <input
        type="number"
        value={businessData.number}
        onChange={changeNumber}
        placeholder="text"
        className={`w-full h-12 px-4 bg-sky-500/60 placeholder:text-gray-300 border-l-4 ${
          numberValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-6`}
      />
      {!numberValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid 10 digit number
        </span>
      )}
      <input
        type="submit"
        className={`h-10 w-32 bg-sky-500 shadow-md rounded-md self-center cursor-pointer mt-6`}
        value={"Next"}
      />
    </form>
  );
};

export default BusinessForm;
