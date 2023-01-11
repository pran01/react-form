import { useState } from "react";

const AddressForm = ({ country, stage, setStage, address, setAddress }) => {
  const [cityValid, setCityValid] = useState(true);
  const [postcodeValid, setPostcodeValid] = useState(true);
  const [fullAddValid, setFullAddValid] = useState(true);

  const checkFormValid = () => {
    if (!cityValid || address.city === "") {
      return false;
    }
    if (!postcodeValid || address.postcode === "") {
      return false;
    }
    if (!fullAddValid || address.fullAdd === "") {
      return false;
    }
    return true;
  };

  const changeCity = (event) => {
    setAddress({ ...address, city: event.target.value });
    setCityValid(/^[a-zA-z]*$/.test(event.target.value));
  };
  const changePostCode = (event) => {
    setAddress({ ...address, postcode: event.target.value });
    setPostcodeValid(/^[0-9]{6}$/.test(event.target.value));
  };
  const changeFullAdd = (event) => {
    setAddress({ ...address, fullAdd: event.target.value });
    setFullAddValid(event.target.value.lenght !== 0);
  };

  const goPrevious = () => {
    setStage(stage - 1);
  };

  const submitForm = (event) => {
    if (checkFormValid()) {
      console.log(address);
      setStage(stage + 1);
    }
    event.preventDefault();
  };

  return (
    <form
      action=""
      className="flex flex-col w-4/5 items-center text-white text-sm md:text-lg">
      <label
        htmlFor="country"
        className="text-xs md:text-sm self-start ml-4 mt-6">
        Country
      </label>
      <input
        type="text"
        readOnly
        value={country}
        className="w-full h-10 md:h-12 focus:outline-none rounded-md bg-transparent shadow-lg px-4 text-gray-400  border-l-4 border-gray-400"
      />
      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={changeCity}
        className={`w-full h-10 md:h-12 px-4 bg-transparent border-l-4 ${
          cityValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-4`}
      />
      {!cityValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid city name
        </span>
      )}
      <input
        type="number"
        placeholder="Postal Code"
        value={address.postcode}
        onChange={changePostCode}
        className={`w-full h-10 md:h-12 px-4 bg-transparent border-l-4 ${
          postcodeValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-4`}
      />
      {!postcodeValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter a valid postal code
        </span>
      )}
      <input
        type="text"
        placeholder="Address"
        value={address.fullAdd}
        onChange={changeFullAdd}
        className={`w-full h-10 md:h-12 px-4 bg-transparent border-l-4 ${
          fullAddValid ? "border-sky-500" : "border-red-500"
        } focus:outline-none shadow-md rounded-md mt-4`}
      />
      {!fullAddValid && (
        <span className="self-start text-xs md:text-sm text-red-500 mt-2">
          Enter an address
        </span>
      )}
      <div className="self-end mt-6">
        <button
          className="h-10 w-20 border-2 border-sky-500 shadow-md rounded-md"
          onClick={goPrevious}>
          Previous
        </button>
        <button
          className="h-10 w-20 bg-sky-500 shadow-md rounded-md text-black ml-4"
          onClick={submitForm}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
