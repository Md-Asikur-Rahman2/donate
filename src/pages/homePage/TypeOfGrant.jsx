import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import {
  BsBriefcaseFill,
  BsFillBookmarkHeartFill,
  BsFillCalendarEventFill,
  BsHeartPulseFill,
} from "react-icons/bs";
import { PiHandHeartFill, PiSirenFill } from "react-icons/pi";
import { BiBuildings, BiSolidChurch, BiWorld } from "react-icons/bi";
import { TbWheelchair } from "react-icons/tb";
import { IoColorPaletteSharp } from "react-icons/io5";
import { GiBrokenBone, GiDeer, GiPodiumWinner } from "react-icons/gi";
import { RiCommunityFill } from "react-icons/ri";
import { MdCastForEducation, MdGrass, MdOutlineSportsHandball } from "react-icons/md";
import { FaBriefcase, FaChild, FaExclamationCircle } from "react-icons/fa";
import { BiChurch } from "react-icons/bi";

const grantTypeData = [
  {
    label: "Medical",
    icon: <BsHeartPulseFill color="#F44336" />,
  },
  {
    label: "Education",
    icon: <MdCastForEducation color="#2196F3" />,
  },
  {
    label: "Animals",
    icon: <GiDeer color="#4CAF50" />,
  },
  {
    label: "Employment",
    icon: <FaBriefcase color="#FFC107" />,
  },
  {
    label: "Physical disability",
    icon: <TbWheelchair color="#FF5722" />,
  },
  {
    label: "Religious institutions",
    icon: <BiSolidChurch color="#9C27B0" />,
  },
  {
    label: "Orphanage",
    icon: <FaChild color="#3F51B5" />,
  },
  {
    label: "Environment",
    icon: <MdGrass />,
  },
  {
    label: "Natural disaster",
    icon: <FaExclamationCircle color="#795548" />,
  },
  {
    label: "Developmental work",
    icon: <BiBuildings color="#8BC34A" />,
  },
  {
    label: "Sports",
    icon: <MdOutlineSportsHandball color="#00BCD4" />,
  },
  {
    label: "Other",
    icon: <BiWorld color="#607D8B" />,
  },
];
const TypeOfGrant = () => {
  return (
    <section className="py-20 bg-success">
      <div className="container">
        <SectionTitle title="Type of grant" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 text-center">
          {grantTypeData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center p-4">
                <span className="bg-gray-200 p-6 text-primary text-5xl xl:text-6xl rounded-full">
                  {item?.icon}
                </span>
              </div>
              <h4 className="text-white text-lg font-semibold">{item?.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypeOfGrant;
