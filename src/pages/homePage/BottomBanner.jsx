import React from "react";
import TogetherBannerImg from "../../assets/images/together-banner.png";

const BottomBanner = () => {
  const sectionStyle = {
    backgroundImage: `url(${TogetherBannerImg})`,
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
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  };

  const contentStyle = {
    position: "relative", // Set to relative to ensure stacking context
    zIndex: 1, // Bring the content on top of the overlay
    color: "#ffffff",
  };

  return (
    <section style={sectionStyle} className="py-32">
      <div style={overlayStyle}></div>
      <div className="container text-center" style={contentStyle}>
        <h1 className="text-2xl sm:text-4xl font-bold">You can make a difference today!</h1>
        <h5 className="sm:text-lg my-6">There's a lot more we can do, together.</h5>
        <button className="btn btn-primary">Donate now</button>
      </div>
    </section>
  );
};

export default BottomBanner;
