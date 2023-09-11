import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { BiDonateHeart } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { RiSeedlingLine } from "react-icons/ri";

const data = [
  {
    label: "Donate",
    icon: <BiDonateHeart />,
    button: "Donate now",
  },
  {
    label: "Volunteer",
    icon: <FaRegHandshake />,
    button: "Be a volunteer",
  },
  {
    label: "Fundrise",
    icon: <RiSeedlingLine />,
    button: "Fundrise now",
  },
];

const StandPeople = () => {
  return (
    <section className="py-20 bg-success text-white">
      <div className="container">
        <SectionTitle title="Let's stand by the helpless people" />

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt20">
          {data.map((item, index) => (
            <div className="text-center" key={index}>
              <h3 className="flex justify-center text-8xl text-pink-400 mb-4">{item?.icon}</h3>
              <h4 className="text-2xl font-bold font-jakartaSans mb-6">{item?.label}</h4>
              <button className="btn btn-secondary px-10 rounded-full">{item?.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandPeople;
