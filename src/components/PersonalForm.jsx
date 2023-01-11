import { useState } from "react";

const PersonalForm = ({ stage, setStage, personalData, setPersonalData }) => {
  const [fNameValid, setFNameValid] = useState(true);
  const [lNameValid, setLNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [numberValid, setNumberValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const checkFormValid = () => {
    if (!fNameValid || personalData.fName === "") {
      return false;
    }
    if (!lNameValid || personalData.lName === "") {
      return false;
    }
    if (!emailValid || personalData.email === "") {
      return false;
    }
    if (!numberValid || personalData.number === "") {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    if (checkFormValid()) {
      console.log(personalData);
      setStage(stage + 1);
    }
    console.log(formValid);
    e.preventDefault();
  };

  const changeEmail = (event) => {
    setPersonalData({ ...personalData, email: event.target.value });
    setEmailValid(
      event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    );
    setFormValid(checkFormValid());
  };

  const changeFName = (event) => {
    setPersonalData({ ...personalData, fName: event.target.value });
    setFNameValid(/^[A-Za-z]*$/.test(event.target.value));
    setFormValid(checkFormValid());
  };
  const changeLName = (event) => {
    setPersonalData({ ...personalData, lName: event.target.value });
    setLNameValid(/^[A-Za-z]*$/.test(event.target.value));
    setFormValid(checkFormValid());
  };
  const changeNumber = (event) => {
    setPersonalData({ ...personalData, number: event.target.value });
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
        value={personalData.fName}
        onChange={changeFName}
        placeholder="First Name"
        className={`w-full h-12 px-4 bg-transparent border-l-4 ${
          fNameValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-4`}
      />
      {!fNameValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid name
        </span>
      )}
      <input
        type="text"
        value={personalData.lName}
        onChange={changeLName}
        placeholder="Last Name"
        className={`w-full h-12 px-4 bg-transparent border-l-4 ${
          lNameValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-4`}
      />
      {!lNameValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid name
        </span>
      )}
      <input
        type="email"
        value={personalData.email}
        onChange={changeEmail}
        placeholder="Email"
        className={`w-full h-12 px-4 bg-transparent border-l-4 ${
          emailValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-4`}
      />
      {!emailValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid email
        </span>
      )}
      <input
        type="number"
        value={personalData.number}
        onChange={changeNumber}
        placeholder="Number"
        className={`w-full h-12 px-4 bg-transparent border-l-4 ${
          numberValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-4`}
      />
      {!numberValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid 10 digit number
        </span>
      )}
      <input
        type="submit"
        className={`h-10 w-20 bg-sky-500 shadow-md rounded-md self-end cursor-pointer mt-6`}
        value={"Next"}
      />
    </form>
  );
};

export default PersonalForm;
