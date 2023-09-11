import React, { useState } from "react";
import BannerImage from "../../assets/images/volunteer.jpg";
import BeVolunteer from "./beVolunteer/BeVolunteer";
import ApplyForDonation from "./applyForDonation/ApplyForDonation";

const ApplyPage = () => {
  const [volunteerApply, setVolunteerApply] = useState(false);

  const sectionStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  return (
    <section className="py-20" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center flex-wrap gap-4 justify-center sm:justify-between mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold font-noto text-center text-gray-300">
            {volunteerApply ? "Be a Volunteer!" : "Apply for Donation!"}
          </h1>
          <button
            onClick={() => setVolunteerApply(!volunteerApply)}
            className="btn btn-primary btn-sm sm:btn-md"
          >
            {volunteerApply ? "Apply for Donation" : "Be a Volunteer"}
          </button>
        </div>

        {/* <form> */}
        <div className="p-5 py-8 sm:p-8 bg-gray-200 rounded-xl">
          {volunteerApply ? <BeVolunteer /> : <ApplyForDonation />}
        </div>
      </div>
    </section>
  );
};

export default ApplyPage;
