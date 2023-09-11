import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { FaBuilding, FaChartLine, FaRegFileAlt, FaSearch, FaUserCircle } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineGift } from "react-icons/ai";

const howItWorksData = [
  {
    icon: <AiOutlineCheck />,
    desc: "Create an account and complete your profile. Create an account and complete your profile. Create an account and complete your profile.",
    buttonText: "Sign Up",
  },
  {
    icon: <AiOutlineGift />,
    desc: "Explore donor profiles and connect with like-minded supporters. Explore donor profiles and connect with like-minded supporters.",
    buttonText: "Donors",
  },
  {
    icon: <FaBuilding />,
    desc: "Companies can partner with us to make a positive impact together. Companies can partner with us to make a positive impact together.",
    buttonText: "Companies",
  },
  {
    icon: <BsBarChartLine />,
    desc: "See the tangible results of your contributions in our community. See the tangible results of your contributions in our community.",
    buttonText: "Our Impact",
  },
];

const HowWorks = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle title="How It Works" />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {howItWorksData.map((item, index) => (
            <div
              className="text-center bg-gray-300 px-4 py-10 shadow-lg rounded-lg border hover:scale-105 duration-300"
              key={index}
            >
              <div className="flex justify-center text-4xl text-pink-500 mb-7">
                {item?.icon}
              </div>
              <p className="leading-relaxed mb-4">{item?.desc}</p>
              <h4 className="text-xl text-primary font-noto font-bold">{item?.buttonText}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
