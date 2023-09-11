
import PropTypes from 'prop-types'; // Import PropTypes
import Donation from './Donation';
import donationsData from "./donations.json"
import{ BsTrophyFill} from "react-icons/bs"


const DonationList = () => {
  const sortedDonations = [...donationsData].sort((a, b) => b.amount - a.amount);

  return (
    <>
<div>
<div className="flex justify-between bg-white ">
        <div className="my-4  mt-3">
          <div className="font-bold flex text-black "> <BsTrophyFill  size={40} />
            <p className='ml-6 pt-2 font-bold text-xl'> TOP Donners </p>
            </div>
        

        </div>
        <div className="text-black ">      
          <span className="font-bold text-2xl mr-5">1080</span>
        </div>
      </div>
   </div>


<div className="bg-gray-100 p-4 rounded-md">

{sortedDonations.map((donation,index) => (
 

  <Donation   key={index} donation={donation} rank={index+1} />
))}

</div>

    </>
   
  );
};

// DonationList.propTypes = {
//   donation: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//       date: PropTypes.string.isRequired 
//     })
//   ).isRequired,
// };

export default DonationList;
