import  { useState } from 'react';

const GiveTipsAmount = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [donationValue, setDonationValue] = useState('');

  const predefinedDonationAmounts = [10, 20,30];

  const handleButtonClick = (amount) => {
    setSelectedButton(amount);
    setDonationValue(amount.toString());
    
  };

  const handleDonationInputChange = (event) => {
    const value = event.target.value;
    setSelectedButton(null); // Clear selected button when user types a custom value
    setDonationValue(value);
  };

  return (

<div className=" flex  gap-3">

<div>
  <p className="bg-primary whitespace-nowrap text-white p-2 rounded-sm" > Give Tips :</p>
  
  </div>



<div className='flex '> 

  <div className="flex flex-col items-center ">
    <div className="flex flex-wrap gap-3 items-center  justify-center">

      <div>  {predefinedDonationAmounts.map((amount) => (
        <button
          key={amount}
          className={`px-4 py-2 rounded-lg mr-2 focus:outline-none  ${
            selectedButton === amount
              ? 'bg-[#f472b6] text-white'
              : 'bg-gray-300 text-gray-600'
          }`}
          onClick={() => handleButtonClick(amount)}
        >
          {amount}
        </button>
      ))} </div>
     
       <input
         min={0}
        placeholder='$ Custom Value'
        id="donationInput"
        type="number"
        value={donationValue}
        onChange={handleDonationInputChange}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
    <div className="flex flex-col items-center space-y-2">
     
      
     
    </div>
  </div>
      </div> 
    </div>
    

  );
};

export default GiveTipsAmount;






