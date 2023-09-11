import React from "react";
import USA from "../../assets/images/usa-flag.jpg";
import UK from "../../assets/images/uk-flag.jpg";
import DonationImage from "../../assets/images/donation-image.png";
import OngoingDonationCard from "../../components/cards/OngoingDonationCard";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const DonationsData = [
  {
    _id: "613a9c256b6eef0015f3e663",
    category: "Education",
    goal: 10000,
    raised: 7000,
    giver: 364,
    description: "Supporting underprivileged children's education",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-16",
  },
  {
    _id: "613a9c256b6eef0015f3e664",
    category: "Healthcare",
    goal: 15000,
    raised: 6200,
    giver: 152,
    description: "Providing medical aid to rural communities",
    countryFlag: UK,
    image: DonationImage,
    date: "2023-08-12",
  },
  {
    _id: "613a9c256b6eef0015f3e665",
    category: "Environment",
    goal: 8000,
    raised: 3700,
    giver: 219,
    description: "Planting trees and conserving natural habitats",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-09",
  },
  {
    _id: "613a9c256b6eef0015f3e666",
    category: "Animal Welfare",
    goal: 5000,
    raised: 2100,
    giver: 87,
    description: "Rescuing and caring for abandoned animals",
    countryFlag: UK,
    image: DonationImage,
    date: "2023-08-20",
  },
  {
    _id: "613a9c256b6eef0015f3e667",
    category: "Community Development",
    goal: 12000,
    raised: 8000,
    giver: 327,
    description: "Empowering local communities through sustainable projects",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-18",
  },
  {
    _id: "613a9c256b6eef0015f3e365",
    category: "Environment",
    goal: 8000,
    raised: 3700,
    giver: 219,
    description: "Planting trees and conserving natural habitats",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-09",
  },
  {
    _id: "613a9c256b6eef0015f3e668",
    category: "Education",
    goal: 10000,
    raised: 4500,
    giver: 364,
    description: "Supporting underprivileged children's education",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-16",
  },
  {
    _id: "613a9c256b6eef0015f3e554",
    category: "Healthcare",
    goal: 15000,
    raised: 14000,
    giver: 152,
    description: "Providing medical aid to rural communities",
    countryFlag: UK,
    image: DonationImage,
    date: "2023-08-12",
  },
];

const DonatePage = () => {
  return (
    <section className="py-20 bg-success">
      <div className="container">
        <div className="bg-primary mb-8 p-4 xl:flex items-center justify-between gap-4 rounded-md">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center justify-between xl:justify-start flex-grow">
            {/* Country Select */}
            <select className="select bg-teal-200 w-full xl:w-auto focus:outline-none">
              <option disabled selected>
                Country
              </option>
              <option>Bangladesh</option>
              <option>India</option>
              <option>Pakistan</option>
            </select>

            {/* Category Select */}
            <select className="select bg-teal-200 w-full xl:w-auto focus:outline-none">
              <option disabled selected>
                Category
              </option>
              <option>Medical</option>
              <option>Education</option>
              <option>Employment</option>
              <option>Physical disablity</option>
              <option>Religious institutions</option>
              <option>Orphange</option>
              <option>Natural disaster</option>
              <option>Development work</option>
              <option>Sports</option>
              <option>Animals</option>
              <option>Other</option>
            </select>

            {/* Type Select */}
            <select className="select bg-teal-200 w-full xl:w-auto focus:outline-none">
              <option disabled selected>
                Type
              </option>
              <option>Company</option>
              <option>Public</option>
              <option>Volunteer</option>
            </select>

            {/* Mode Select */}
            <select className="select bg-teal-200 w-full xl:w-auto focus:outline-none">
              <option disabled selected>
                Mode
              </option>
              <option>Normal</option>
              <option>Medium</option>
              <option>Emergency</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4 mt-4 xl:mt-0">
            {/* Search */}
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input bg-teal-200 text-gray-700 placeholder:text-gray-600 focus:outline-none 2xl:w-96"
                />
                <button className="btn btn-square btn-success border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sort Select */}
            <select className="select bg-teal-200 focus:outline-none">
              <option disabled selected>
                Sort
              </option>
              <option>New</option>
              <option>Old</option>
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DonationsData.map((donation) => {
            const raisedPercentage = Math.round((donation.raised / donation.goal) * 100);

            return (
              <OngoingDonationCard
                key={donation?._id}
                donation={donation}
                raisedPercentage={raisedPercentage}
              />
            );
          })}
        </div>

        {/* Pagination */}
        <div className="text-center mt-8">
          <div className="join">
            <button className="join-item btn btn-primary">
              <BiChevronsLeft />
              Previous
            </button>
            <button className="join-item btn btn-primary">5</button>
            <button className="join-item btn btn-primary btn-active">2</button>
            <button className="join-item btn btn-primary">6</button>
            <button className="join-item btn btn-primary">7</button>
            <button className="join-item btn btn-primary">
              Next
              <BiChevronsRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
