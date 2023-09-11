
// import  { useState } from 'react';
// const SelectedAmount = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [donationValue, setDonationValue] = useState('');

//   const predefinedDonationAmounts = [10, 20, 50, 150];

//   const handleButtonClick = (amount) => {
//     setSelectedButton(amount);
//     setDonationValue(amount.toString());
//   };

//   const handleDonationInputChange = (event) => {
//     const value = event.target.value;
//     setSelectedButton(null); // Clear selected button when user types a custom value
//     setDonationValue(value);
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4 m-4">
//       <div className="flex space-x-4">
//         {predefinedDonationAmounts.map((amount) => (
//           <button
//             key={amount}
//             className={`px-4 py-2 rounded-lg focus:outline-none ${
//               selectedButton === amount
//                 ? 'bg-[#f472b6] text-white'
//                 : 'bg-gray-300 text-gray-600'
//             }`}
//             onClick={() => handleButtonClick(amount)}
//           >
//             {amount}
//           </button>
//         ))}
//       </div>
//       <div className="flex flex-col items-center space-y-2">
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 p-4 rounded"
//           onClick={() => {
//             setSelectedButton(null); // Clear selected button when "Custom Donate" is clicked
//             document.getElementById('donationInput').focus();
//           }}
//         >
//           Custom Donate
//         </button>
//         <input
//           id="donationInput"
//           type="number"
//           value={donationValue}
//           onChange={handleDonationInputChange}
//           className="mt-2 p-2 border border-gray-300 rounded"
//         />
//       </div>
//     </div>
//   );
// };

// export default SelectedAmount;


import  { useState } from 'react';

const SelectedAmount = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [donationValue, setDonationValue] = useState('');

  const predefinedDonationAmounts = [10, 20, 50, 150];

  const handleButtonClick = (amount) => {
    setSelectedButton(amount);
    setDonationValue(amount.toString());
    
  };

  const handleDonationInputChange = (event) => {
    const value = event.target.value;
    setSelectedButton(null); 
    setDonationValue(value);
  };

  return (
    <div className="flex flex-col items-center space-y-4 m-4">
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
  );
};

export default SelectedAmount;

  

  





















