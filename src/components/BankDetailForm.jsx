import { useState } from "react";

const BankDetailForm = ({
  country,
  setCountry,
  stage,
  setStage,
  bankDetails,
  setBankDetails,
}) => {
  const currencies = {
    India: "INR",
    USA: "USD",
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

  const changeAccountType = (event) => {
    setBankDetails({
      ...bankDetails,
      forUSA: { ...bankDetails.forUSA, type: event.target.value },
    });
  };

  const goPrevious = () => {
    setStage(stage - 1);
  };

  const goNext = () => {
    console.log(bankDetails);
    setStage(stage + 1);
  };

  return (
    <form className="flex flex-col w-4/5 text-white mt-4 text-sm md:text-lg">
      <label htmlFor="country">
        Select Country
        <select
          value={country}
          name=""
          id="country"
          onChange={changeCountry}
          className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 border-b-4 border-sky-500">
          <option value="India" className="text-black">
            India
          </option>
          <option value="USA" className="text-black">
            United States of America
          </option>
        </select>
      </label>
      <label className="mt-4">Currency</label>
      <input
        type="text"
        readOnly
        value={currencies[country]}
        className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 text-gray-400 border-l-4 border-gray-400"
      />
      <label className="mt-4">Bank Details format</label>
      {country === "India" && (
        <input
          type="text"
          readOnly
          value="Indian Local"
          className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 text-gray-400 border-l-4 border-gray-400"
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
        <div className="mt-6">
          <input
            type="text"
            placeholder="IFSC Code"
            name=""
            id=""
            className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 border-l-4 border-sky-500"
            value={bankDetails.forIndia.ifsc}
            onChange={(e) =>
              setBankDetails({
                ...bankDetails,
                forIndia: { ...bankDetails.forIndia, ifsc: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Account number"
            name=""
            id=""
            className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 mt-4 border-l-4 border-sky-500"
            value={bankDetails.forIndia.acno}
            onChange={(e) =>
              setBankDetails({
                ...bankDetails,
                forIndia: { ...bankDetails.forIndia, acno: e.target.value },
              })
            }
          />
        </div>
      )}

      {country === "USA" && bankDetails.forUSA.format === "Local" && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="ACH routing  number"
            name=""
            id=""
            className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 border-l-4 border-sky-500"
            value={bankDetails.forUSA.ach}
            onChange={(e) =>
              setBankDetails({
                ...bankDetails,
                forUSA: { ...bankDetails.forUSA, ach: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Account number"
            name=""
            id=""
            className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 my-2 border-l-4 border-sky-500"
            value={bankDetails.forUSA.acno}
            onChange={(e) =>
              setBankDetails({
                ...bankDetails,
                forUSA: { ...bankDetails.forUSA, acno: e.target.value },
              })
            }
          />
          <label htmlFor="account-type" className="">
            Account Type
            <select
              value={bankDetails.forUSA.type}
              name=""
              id="account-type"
              onChange={changeAccountType}
              className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 border-b-4 border-sky-500">
              <option value="Checking" className="text-black">
                Checking
              </option>
              <option value="Saving" className="text-black">
                Savings
              </option>
            </select>
          </label>
        </div>
      )}
      {country === "USA" && bankDetails.forUSA.format === "Swift" && (
        <div>
          <input
            type="text"
            placeholder="Swift Code"
            name=""
            id=""
            className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 mt-4 border-l-4 border-sky-500"
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
      <div className="self-end mt-6">
        <button
          className="h-10 w-20 border-2 border-sky-500 shadow-md rounded-md"
          onClick={goPrevious}>
          Previous
        </button>
        <button
          className="h-10 w-20 bg-sky-500 shadow-md rounded-md text-black ml-4"
          onClick={goNext}>
          Next
        </button>
      </div>
    </form>
  );
};

export default BankDetailForm;
