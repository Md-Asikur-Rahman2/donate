import { useState } from "react";

function PayDuration() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    console.log(`Selected Button: ${buttonName}`);
  };

  return (
    <div className="flex justify-center items-center space-x-2 m-2">
      <button
        className={`px-4 py-2 rounded-lg focus:outline-none ${
          selectedButton === "OneTime"
            ? "bg-[#198f50] text-white"
            : "bg-gray-300 text-gray-600"
        }`}
        onClick={() => handleButtonClick("OneTime")}
      >
        One-Time
      </button>
      <button
        className={`px-4 py-2 rounded-lg focus:outline-none ${
          selectedButton === "Mounthly"
            ? "bg-[#198f50] text-white"
            : "bg-gray-300 text-gray-600"
        }`}
        onClick={() => handleButtonClick("Mounthly")}
      >
        Mounthly
      </button>
      <button
        className={`px-4 py-2 rounded-lg focus:outline-none ${
          selectedButton === "Yearly"
            ? "bg-[#198f50] text-white"
            : "bg-gray-300 text-gray-600"
        }`}
        onClick={() => handleButtonClick("Yearly")}
      >
        Yearly
      </button>
    </div>
  );
}

export default PayDuration;
