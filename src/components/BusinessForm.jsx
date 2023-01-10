const BusinessForm = ({ stage, setStage, businessData, setBusinessData }) => {
  const handleSubmit = (e) => {
    console.log(businessData);
    setStage(stage + 1);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-4/5 items-center text-sm md:text-lg">
      <input
        type="text"
        value={businessData.cname}
        onChange={(e) =>
          setBusinessData({ ...businessData, cname: e.target.value })
        }
        placeholder="Company Name"
        className="w-full h-12 px-4 bg-transparent border-l-4 mb-4 border-sky-500 focus:outline-none shadow-md rounded-md"
      />
      <input
        type="email"
        value={businessData.email}
        onChange={(e) =>
          setBusinessData({ ...businessData, email: e.target.value })
        }
        placeholder="Company Email"
        className="w-full h-12 px-4 bg-transparent border-l-4 mb-4 border-sky-500 focus:outline-none shadow-md rounded-md"
      />
      <input
        type="number"
        value={businessData.number}
        onChange={(e) =>
          setBusinessData({ ...businessData, number: e.target.value })
        }
        placeholder="Contact Number"
        className="w-full h-12 px-4 bg-transparent border-l-4 mb-4 border-sky-500 focus:outline-none shadow-md rounded-md"
      />
      <input
        type="submit"
        className="h-10 w-20 bg-sky-500 shadow-md rounded-md self-end cursor-pointer"
        value={"Next"}
      />
    </form>
  );
};

export default BusinessForm;
