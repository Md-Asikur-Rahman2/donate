import React, { useState } from "react";
import { FaApple, FaBaseballBall, FaHome, FaRegUserCircle } from "react-icons/fa";
import { BiDonateHeart, BiSupport, BiGitPullRequest } from "react-icons/bi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { SiJirasoftware } from "react-icons/si";
import { BsCreditCard2Front } from "react-icons/bs";
import { HiOutlineBars3BottomRight, HiXMark } from "react-icons/hi2";

import { Link, NavLink } from "react-router-dom";

const menuData = [
  { icon: <FaHome />, label: "Home", to: "/" },
  { icon: <BiDonateHeart />, label: "Donate", to: "/donate" },
  {
    icon: <IoCheckmarkDoneCircleOutline />,
    label: "Completed Donations",
    to: "/completed-donations",
  },
  { icon: <BiSupport />, label: "Support", to: "/support" },
  { icon: <BiGitPullRequest />, label: "Apply", to: "/apply" },
  { icon: <BsCreditCard2Front />, label: "Company", to: "/company" },
  { icon: <FaRegUserCircle />, label: "Profile", to: "/profile" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 shadow-md font-noto py-4 z-[1030]">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-4">
              <FaApple size={50} className="text-white" />
              <FaBaseballBall size={44} className="text-pink-400" />
              <SiJirasoftware size={44} className="text-white" />
            </div>
          </Link>

          {/* Menu */}
          <nav
            className={`
          fixed top-0 bg-primary lg:bg-transparent w-full h-full py-8 flex flex-col justify-center items-center gap-y-4 duration-300 z-[1040] lg:static lg:py-0 lg:w-auto lg:h-auto lg:flex lg:flex-row flex-wrap lg:space-x-6 xl:space-x-10 ${
            showMenu ? "left-0" : "-left-full"
          }`}
          >
            {menuData.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive, isPending }) =>
                  `flex lg:flex-col items-center justify-center text-lg font-semibold hover:text-pink-400 duration-300 gap-2 lg:gap-1 ${
                    isPending ? "pending" : isActive ? "text-pink-400" : ""
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}

            {/* Close Menu Icon */}
            <HiXMark
              onClick={() => setShowMenu(false)}
              size={36}
              className="absolute top-4 right-4 lg:hidden cursor-pointer hover:opacity-60 duration-300"
            />
          </nav>

          {/* Show Menu Icon */}
          <HiOutlineBars3BottomRight
            onClick={() => setShowMenu(true)}
            size={36}
            className="lg:hidden cursor-pointer hover:opacity-60 duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
