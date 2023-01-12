import { useState } from "react";

const BankDetailForm = ({
  country,
  setCountry,
  stage,
  setStage,
  bankDetails,
  setBankDetails,
}) => {
  const [IfscValid, setIfscValid] = useState(true);
  const [acnoValid, setAcnoValid] = useState(true);
  const [achValid, setAchValid] = useState(true);
  const [acnoUSAValid, setAcnoUSAValid] = useState(true);

  const currencies = {
    India: "INR",
    USA: "USD",
  };

  const checkFormValidity = () => {
    if (country === "India") {
      if (!IfscValid || bankDetails.forIndia.ifsc === "") {
        return false;
      }
      if (!acnoValid || bankDetails.forIndia.acno === "") {
        return false;
      }
    } else {
      if (!achValid || bankDetails.forUSA.ach === "") {
        return false;
      }
      if (!acnoUSAValid || bankDetails.forUSA.acno === "") {
        return false;
      }
    }
    return true;
  };

  const changeCountry = (event) => {
    setCountry(event.target.value);
  };

  const changeFormat = (event) => {
    setBankDetails({
      ...bankDetails,
      forUSA: { ...bankDetails.forUSA, format: event.target.value },
    });
  };

  const changeACH = (event) => {
    setBankDetails({
      ...bankDetails,
      forUSA: { ...bankDetails.forUSA, ach: event.target.value },
    });
    setAchValid(/^[0-9]{6}$/.test(event.target.value));
  };

  const changeAcnoUSA = (event) => {
    setBankDetails({
      ...bankDetails,
      forUSA: { ...bankDetails.forUSA, acno: event.target.value },
    });
    setAcnoUSAValid(/^[0-9]*$/.test(event.target.value));
  };

  const changeAccountType = (event) => {
    setBankDetails({
      ...bankDetails,
      forUSA: { ...bankDetails.forUSA, type: event.target.value },
    });
  };

  const changeIFSC = (event) => {
    setBankDetails({
      ...bankDetails,
      forIndia: { ...bankDetails.forIndia, ifsc: event.target.value },
    });
    setIfscValid(/^[A-Z]{4}0[A-Z0-9]{6}$/.test(event.target.value));
  };

  const changeAcNoIndia = (event) => {
    setBankDetails({
      ...bankDetails,
      forIndia: { ...bankDetails.forIndia, acno: event.target.value },
    });
    setAcnoValid(/^[0-9]*$/.test(event.target.value));
  };

  const goPrevious = () => {
    setStage(stage - 1);
  };

  const goNext = (event) => {
    if (checkFormValidity()) {
      console.log(bankDetails);
      setStage(stage + 1);
    }
    event.preventDefault();
  };

  return (
    <form className="flex flex-col w-4/5 text-white mt-4 text-sm md:text-lg">
      <label htmlFor="country" className="text-xs md:text-sm self-start ml-4">
        Select Country
      </label>
      <select
        value={country}
        name=""
        id="country"
        onChange={changeCountry}
        className="w-full h-10 md:h-12 focus:outline-none rounded-md bg-sky-500/60 placeholder:text-gray-300 shadow-lg px-4 border-b-4 border-sky-500">
        <option value="India" className="text-black">
          India
        </option>
        <option value="USA" className="text-black">
          United States of America
        </option>
      </select>
      <label className="text-xs md:text-sm self-start ml-4 mt-4">
        Currency
      </label>
      <input
        type="text"
        readOnly
        value={currencies[country]}
        className="w-full h-10 md:h-12 focus:outline-none rounded-md bg-sky-500/60 placeholder:text-gray-300 shadow-lg px-4 text-gray-400 border-l-4 border-gray-400"
      />
      <label className="text-xs md:text-sm self-start ml-4 mt-4">
        Bank Details format
      </label>
      {country === "India" && (
        <input
          type="text"
          readOnly
          value="Indian Local"
          className="w-full h-10 md:h-12 focus:outline-none rounded-md bg-sky-500/60 placeholder:text-gray-300 shadow-lg px-4 text-gray-400 border-l-4 border-gray-400"
        />
      )}
      {country === "USA" && (
        <div className="flex flex-col w-full">
          <div className="flex justify-start">
            <input
              type="radio"
              value="Local"
              id="local"
              name="format"
              checked={bankDetails.forUSA.format === "Local"}
              onChange={changeFormat}
              className="mr-4"
            />
            <label htmlFor="local" className="font-bold">
              Local Bank Details
            </label>
          </div>
          <div className="flex justify-start">
            <input
              type="radio"
              value="Swift"
              id="swift"
              name="format"
              checked={bankDetails.forUSA.format === "Swift"}
              onChange={changeFormat}
              className="mr-4"
            />
            <label htmlFor="swift" className="font-bold">
              Swift Code
            </label>
          </div>
        </div>
      )}

      {country === "India" && (
        <div className="flex flex-col mt-2">
          <input
            type="text"
            placeholder="IFSC Code"
            name=""
            id=""
            className={`w-full h-10 md:h-12 px-4 bg-sky-500/60 placeholder:text-gray-300 border-l-4 ${
              IfscValid ? "border-sky-500" : "border-red-500"
            } focus:outline-none shadow-md rounded-md mt-4`}
            value={bankDetails.forIndia.ifsc}
            onChange={changeIFSC}
          />
          {!IfscValid && (
            <span className="self-start text-xs md:text-sm text-red-500 mt-2">
              Enter a valid IFSC code
            </span>
          )}
          <input
            type="text"
            placeholder="Account number"
            name=""
            id=""
            className={`w-full h-10 md:h-12 px-4 bg-sky-500/60 placeholder:text-gray-300 border-l-4 ${
              acnoValid ? "border-sky-500" : "border-red-500"
            } focus:outline-none shadow-md rounded-md mt-4`}
            value={bankDetails.forIndia.acno}
            onChange={changeAcNoIndia}
          />
          {!acnoValid && (
            <span className="self-start text-xs md:text-sm text-red-500 mt-2">
              Enter a valid Account Number
            </span>
          )}
        </div>
      )}

      {country === "USA" && bankDetails.forUSA.format === "Local" && (
        <div className="flex flex-col mt-2">
          <input
            type="text"
            placeholder="ACH routing number"
            name=""
            id=""
            className={`w-full h-10 md:h-12 px-4 bg-sky-500/60 placeholder:text-gray-300 border-l-4 ${
              achValid ? "border-sky-500" : "border-red-500"
            } focus:outline-none shadow-md rounded-md`}
            value={bankDetails.forUSA.ach}
            onChange={changeACH}
          />
          {!achValid && (
            <span className="self-start text-xs md:text-sm text-red-500 ml-4">
              Enter a valid 6 digit ACH number
            </span>
          )}
          <input
            type="text"
            placeholder="Account number"
            name=""
            id=""
            className={`w-full h-10 md:h-12 px-4 bg-sky-500/60 placeholder:text-gray-300 border-l-4 ${
              acnoUSAValid ? "border-sky-500" : "border-red-500"
            } focus:outline-none shadow-md rounded-md mt-2`}
            value={bankDetails.forUSA.acno}
            onChange={changeAcnoUSA}
          />
          {!acnoUSAValid && (
            <span className="self-start text-xs md:text-sm text-red-500 ml-4">
              Enter a valid Account number
            </span>
          )}
          <label
            htmlFor="account-type"
            className="text-xs md:text-sm self-start ml-4 mt-4">
            Account Type
          </label>
          <select
            value={bankDetails.forUSA.type}
            name=""
            id="account-type"
            onChange={changeAccountType}
            className="w-full h-10 md:h-12 focus:outline-none rounded-md bg-sky-500/60 placeholder:text-gray-300 shadow-lg px-4 border-b-4 border-sky-500">
            <option value="Checking" className="text-black">
              Checking
            </option>
            <option value="Saving" className="text-black">
              Savings
            </option>
          </select>
        </div>
      )}
      {country === "USA" && bankDetails.forUSA.format === "Swift" && (
        <div>
          <input
            type="text"
            placeholder="Swift Code"
            name=""
            id=""
            className="w-full h-10 md:h-12 focus:outline-none rounded-md bg-sky-500/60 placeholder:text-gray-300 shadow-lg px-4 mt-4 border-l-4 border-sky-500"
            value={bankDetails.forUSA.swift}
            onChange={(e) =>
              setBankDetails({
                ...bankDetails,
                forUSA: { ...bankDetails.forUSA, swift: e.target.value },
              })
            }
          />
        </div>
      )}
      <div className="self-center mt-6">
        <button
          className="h-10 w-32 border-2 border-sky-500 shadow-md rounded-md"
          onClick={goPrevious}>
          Previous
        </button>
        <button
          className="h-10 w-32 bg-sky-500 shadow-md rounded-md text-black ml-4"
          onClick={goNext}>
          Next
        </button>
      </div>
    </form>
  );
};

export default BankDetailForm;
