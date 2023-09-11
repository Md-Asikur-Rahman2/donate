const VlountierTips = () => {
  const handleRadioClick = (value) => {
    console.log(value);
  };

  return (
    <div className=" flex">
      <p className="bg-[#198d50] text-white p-2 rounded-sm mr-5"> Volentear Tips :</p>
      <label className="inline-flex mx-2 items-center">
        <input
          type="radio"
          className="form-radio h-4 w-4  text-indigo-600"
          name="radioGroup"
          value="00"
          onClick={() => handleRadioClick(0)}
        />
        <span className="ml-2">NO</span>
      </label>

      <label className="inline-flex  mx-2 items-center">
        <input
          type="radio"
          className="form-radio h-4 w-4  text-indigo-600"
          name="radioGroup"
          value="15"
          onClick={() => handleRadioClick("15")}
        />
        <span className="ml-2">15</span>
      </label>

      <label className="inline-flex mx-2 items-center">
        <input
          type="radio"
          className="form-radio h-4 w-4  text-indigo-600"
          name="radioGroup"
          value="20"
          onClick={() => handleRadioClick("20")}
        />
        <span className="ml-2">20</span>
      </label>
    </div>
  );
};

export default VlountierTips;
