import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";

const OngoingDonationCard = ({ donation, raisedPercentage }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-700 text-white rounded-md overflow-hidden shadow-md">
      <div className="relative">
        <img
          src={donation.image}
          alt={donation.category}
          className="w-full h-48 lg:h-52 object-cover bg-gray-600"
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
        <h4 className="text-gray-300 font-semibold">{donation.description}</h4>

        <div className="relative">
          {/* <div
                      style={{
                        left: `calc(${raisedPercentage}% - 14px)`,
                        clipPath:
                          "polygon(100% 0, 100% 60%, 60% 60%, 51% 80%, 40% 60%, 0 60%, 0 0)",
                        clipPath:
                          "path('M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z')",
                      }}
                      className="w-12 h-12 text-xs text-center pt-[2px] bg-success absolute top-0"
                    >
                      {raisedPercentage}%
                    </div> */}
          <div
            className="text-xs text-center pt-[2px] absolute top-0"
            style={{
              left: `calc(${raisedPercentage}% - 17px)`,
            }}
          >
            {/* Circle */}
            <span className="absolute top-8 left-2 w-4 h-4 rounded-full bg-primary z-10"></span>

            {/* Heart */}
            <span>
              <BsFillHeartFill size={32} color="#dd0d0d" />
            </span>

            {/* Percentage */}
            <span className="absolute top-[5px] left-0 w-full h-full flex justify-center">
              {raisedPercentage}%
            </span>
          </div>

          <progress
            className="progress bg-gray-500 progress-success w-full mt-9 mb-3"
            value={raisedPercentage}
            max="100"
          ></progress>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            Raised: <span className="text-success">${donation.raised}</span>
          </div>
          <div>
            Goal: <span className="text-success">${donation.goal}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>Posted: 34 days ago</div>
          <div>Giver: 344</div>
        </div>

        <div className="flex justify-between items-center">
          <Link to="#" className="btn btn-sm">
            View
          </Link>

          <button
            className="btn btn-sm btn-success"
            onClick={() => navigate("/donationDetails")}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default OngoingDonationCard;
