import PropTypes from "prop-types"; // Import PropTypes
import moment from "moment";

const Donation = ({ donation, rank }) => {
  const { image, name, amount, date } = donation;

  const timeAgo = moment(date).fromNow();

  return (
    <>
      <div className="gap-4 flex">
        <p className="mt-3 font-bold">{rank}</p>
        <div className=" bg-gray-100   flex-shrink-0">
          <img src={image} alt="User Avatar" className="w-12 h-12 rounded-full" />
        </div>
        <div className="relative bg-gray-100 p-2">
          <div className="rounded-lg">
            <div className="absolute text-gray-400 right-0 top-0">
              <span className="font-bold">{timeAgo}</span>
            </div>
            <p className="text-gray-800  font-bold">{name}</p>
            <p className="">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, neque.{" "}
            </p>
            <div className="flex justify-between ">
              <div className="mt-3">
                <span className="font-semibold text-green-600 ">{amount} </span>
                <sub className="text-green-500"> + 10 $ gift</sub>
              </div>
            </div>
          </div>
          <hr className="mt-2 text-black " />
        </div>
      </div>
    </>
  );
};

export default Donation;
