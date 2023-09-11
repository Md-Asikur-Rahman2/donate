import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CompletedDonationCard = ({ donation, raisedPercentage }) => {
  return (
    <div
      key={donation._id}
      className="bg-gray-200 text-gray-700 rounded-md overflow-hidden shadow-md"
    >
      <div className="relative">
        <img
          src={donation.image}
          alt={donation.category}
          className="w-full h-48 lg:h-52 object-cover bg-gray-400"
        />

        <img
          src={donation.countryFlag}
          alt="Country Flag"
          className="w-14 h-8 absolute top-4 left-4"
        />

        <Link
          to={`/category/${donation._id}`}
          className="btn btn-sm capitalize btn-success absolute right-4 bottom-4"
        >
          {donation.category}
        </Link>
      </div>

      <div className="p-5">
        <h3 className="uppercase font-semibold">You can donate various goods for citizens</h3>

        <div className="relative">
          <div
            className="text-[10px] text-center pt-[2px] absolute top-0"
            style={{
              left: `calc(100% - 17px)`,
            }}
          >
            {/* Circle */}
            <span className="absolute top-8 left-2 w-4 h-4 rounded-full bg-primary z-10"></span>

            {/* Heart */}
            <span>
              <BsFillHeartFill size={32} color="#dd0d0d" />
            </span>

            {/* Percentage */}
            <span className="absolute top-[5px] left-0 w-full h-full flex justify-center text-white">
              100%
            </span>
          </div>

          <progress
            className="progress bg-gray-500 progress-success w-full mt-9 mb-3"
            value={raisedPercentage}
            max="100"
          ></progress>
        </div>

        <div className="flex gap-2 items-center justify-between">
          <div>
            Raised: <span className="text-primary">${donation.raised}</span>
          </div>
          <div>
            <span className="font-semibold whitespace-nowrap">53 days ago</span>
          </div>
          <div className="text-end">
            Goal: <span className="text-primary">${donation.goal}</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 text-xl leading-none font-semibold text-white text-center bg-primary">
        Completed
      </div>
    </div>
  );
};

export default CompletedDonationCard;
