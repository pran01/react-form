const PersonalForm = ({ stage, setStage, personalData, setPersonalData }) => {
  const handleSubmit = (e) => {
    console.log(personalData);
    setStage(stage + 1);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-4/5 items-center text-sm md:text-lg">
      <input
        type="text"
        value={personalData.fName}
        onChange={(e) =>
          setPersonalData({ ...personalData, fName: e.target.value })
        }
        placeholder="First Name"
        className="w-full h-12 px-4 bg-transparent border-l-4 mb-4 border-sky-500 
        focus:outline-none shadow-md rounded-md"
      />
      <input
        type="text"
        value={personalData.lName}
        onChange={(e) =>
          setPersonalData({ ...personalData, lName: e.target.value })
        }
        placeholder="Last Name"
        className="w-full h-12 px-4 bg-transparent border-l-4 mb-4 border-sky-500 focus:outline-none shadow-md rounded-md"
      />
      <input
        type="email"
        value={personalData.email}
        onChange={(e) =>
          setPersonalData({ ...personalData, email: e.target.value })
        }
        placeholder="Email"
        className="w-full h-12 px-4 bg-transparent border-l-4 mb-4 border-sky-500 focus:outline-none shadow-md rounded-md"
      />
      <input
        type="number"
        value={personalData.number}
        onChange={(e) =>
          setPersonalData({ ...personalData, number: e.target.value })
        }
        placeholder="Number"
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

export default PersonalForm;
