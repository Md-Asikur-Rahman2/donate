import React from "react";
import USA from "../../assets/images/usa-flag.jpg";
import UK from "../../assets/images/uk-flag.jpg";

import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPinterest,
  FaPrint,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import ApplePay from "../../assets/images/payments/ApplePay.svg";
import GooglePay from "../../assets/images/payments/GooglePay.svg";
import Mastercard from "../../assets/images/payments/Mastercard.svg";
import Paypal from "../../assets/images/payments/Paypal.svg";
import Payoneer from "../../assets/images/payments/Payoneer.svg";
import Visa from "../../assets/images/payments/Visa.svg";

const paymentMethods = [ApplePay, GooglePay, Mastercard, Paypal, Payoneer, Visa];

const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook color="#1877F2" />,
    link: "https://www.facebook.com/your-page",
  },
  {
    name: "Twitter",
    icon: <FaTwitter color="#1DA1F2" />,
    link: "https://www.twitter.com/your-profile",
  },
  {
    name: "Instagram",
    icon: <FaInstagram color="#E4405F" />,
    link: "https://www.instagram.com/your-profile",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin color="#0A66C2" />,
    link: "https://www.linkedin.com/in/your-profile",
  },
  {
    name: "YouTube",
    icon: <FaYoutube color="#FF0000" />,
    link: "https://www.youtube.com/your-channel",
  },
  {
    name: "Pinterest",
    icon: <FaPinterest color="#BD081C" />,
    link: "https://www.pinterest.com/your-profile",
  },
  {
    name: "Discord",
    icon: <FaDiscord color="#7289DA" />,
    link: "https://www.discord.com/your-server",
  },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-white">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-noto font-bold mb-5">Head office of the company</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="flex gap-4 items-center mb-5">
                  <img className="w-16" src={USA} alt="USA" />
                  <span className="text-2xl font-poppins">USA</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaHome size={19} />
                    <span className="font-poppins">New York, NY 10012</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaEnvelope size={19} />
                    <span className="font-poppins">info@exmaple.com</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaPhone size={19} />
                    <span className="font-poppins">+ 01 234 567 88</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaPrint size={19} />
                    <span className="font-poppins">+ 01 234 567 89</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4 items-center mb-5">
                  <img className="w-16" src={UK} alt="UK" />
                  <span className="text-2xl font-poppins">UK</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaHome size={19} />
                    <span className="font-poppins">London, 23012</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaEnvelope size={19} />
                    <span className="font-poppins">info@exmaple.com</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaPhone size={19} />
                    <span className="font-poppins">+ 01 234 567 88</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaPrint size={19} />
                    <span className="font-poppins">+ 01 234 567 89</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                <button className="btn btn-success">Subscribe</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-noto font-bold mb-4">Company</h3>

            <div className="flex flex-col gap-1 capitalize">
              <Link to="#" className="link link-hover">
                Cookies
              </Link>
              <Link to="#" className="link link-hover">
                Contact Us
              </Link>
              <Link to="#" className="link link-hover">
                Help & support
              </Link>
              <Link to="#" className="link link-hover">
                About us
              </Link>
              <Link to="#" className="link link-hover">
                Terms & policy
              </Link>
              <Link to="#" className="link link-hover">
                Return policy
              </Link>
              <Link to="/global-locations" className="link link-hover">
                Global locations
              </Link>
              <Link to="#" className="link link-hover">
                Global businesses
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-noto font-bold mb-4">Donating is noble act</h3>

            <div className="flex flex-col gap-1 capitalize">
              <Link to="#" className="link link-hover">
                Global donate
              </Link>
              <Link to="#" className="link link-hover">
                Voluntee
              </Link>
              <Link to="#" className="link link-hover">
                Withdraw funds
              </Link>
              <Link to="#" className="link link-hover">
                Virtues of giving
              </Link>
              <Link to="#" className="link link-hover">
                Donate in honor
              </Link>
              <Link to="#" className="link link-hover">
                Donation rules
              </Link>
              <Link to="#" className="link link-hover">
                Donation provisions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-12">
        <div className="container">
          <div className="flex flex-wrap justify-center mb-4">
            {paymentMethods.map((method, index) => (
              <img
                className="w-20 sm:w-24 md:w-28"
                src={method}
                alt={`Payment Method ${index}`}
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                to={social?.link}
                target="_blank"
                className="text-gray-600 hover:text-gray-900 mx-2"
              >
                <span className="text-3xl md:text-4xl">{social?.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
