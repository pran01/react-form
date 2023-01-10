const AddressForm = ({ country, stage, setStage, address, setAddress }) => {
  const changeCity = (event) => {
    setAddress({ ...address, city: event.target.value });
  };
  const changePostCode = (event) => {
    setAddress({ ...address, postcode: event.target.value });
  };
  const changeFullAdd = (event) => {
    setAddress({ ...address, fullAdd: event.target.value });
  };

  const goPrevious = () => {
    setStage(stage - 1);
  };

  const submitForm = (event) => {
    console.log(address);
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
        className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 text-gray-400  border-l-4 border-gray-400"
      />
      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={changeCity}
        className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 mt-6 border-l-4 border-sky-500"
      />
      <input
        type="number"
        placeholder="Postal Code"
        value={address.postcode}
        onChange={changePostCode}
        className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 mt-4 border-l-4 border-sky-500"
      />
      <input
        type="text"
        placeholder="Address"
        value={address.fullAdd}
        onChange={changeFullAdd}
        className="w-full h-10 focus:outline-none rounded-md bg-transparent shadow-lg px-4 mt-4 border-l-4 border-sky-500"
      />
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
