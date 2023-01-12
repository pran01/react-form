const StateLoader = ({ stage }) => {
  return (
    <div className="flex items-center justify-center mt-6 text-xs text-white">
      <div className="flex flex-col items-center">
        <div
          className={`w-6 h-6 rounded-full bg-${
            stage >= 1 ? "sky-500" : "gray-400"
          } text-sm flex justify-center items-center mb-2`}>
          1
        </div>
        Benificiary
      </div>
      <hr className="w-10 mx-2" />
      <div className="flex flex-col items-center">
        <div
          className={`w-6 h-6 rounded-full bg-${
            stage >= 2 ? "sky-500" : "gray-400"
          } text-sm flex justify-center items-center mb-2`}>
          2
        </div>
        Bank Details
      </div>
      <hr className="w-10 mx-2" />
      <div className="flex flex-col items-center">
        <div
          className={`w-6 h-6 rounded-full bg-${
            stage >= 3 ? "sky-500" : "gray-400"
          } text-sm flex justify-center items-center mb-2`}>
          3
        </div>
        Address
      </div>
    </div>
  );
};

export default StateLoader;
