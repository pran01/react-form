const ModeSelector = ({ setIndividual }) => {
  const changeToBusiness = (event) => {
    event.target.classList.toggle("bg-sky-500");
    event.target.classList.toggle("text-white");
    document.querySelector("#individual-btn").classList.toggle("bg-sky-500");
    document.querySelector("#individual-btn").classList.toggle("text-white");
    setIndividual(false);
  };

  const changeToIndividual = (event) => {
    event.target.classList.toggle("bg-sky-500");
    event.target.classList.toggle("text-white");

    document.querySelector("#business-btn").classList.toggle("bg-sky-500");
    document.querySelector("#business-btn").classList.toggle("text-white");
    setIndividual(true);
  };

  return (
    <div className="w-4/5 h-8 mt-6 mb-4 flex items-center justify-around">
      <div
        className="w-1/3 h-8 flex justify-center items-center border-2 border-sky-500 bg-sky-500 cursor-pointer rounded-md"
        onClick={changeToIndividual}
        id="individual-btn">
        Individual
      </div>
      <div
        className="w-1/3 h-8 flex justify-center items-center border-2 border-sky-500 cursor-pointer rounded-md text-white"
        onClick={changeToBusiness}
        id="business-btn">
        Business
      </div>
    </div>
  );
};

export default ModeSelector;
