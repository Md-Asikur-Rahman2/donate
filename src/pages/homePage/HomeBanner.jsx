import React from "react";
import HomeBannerImg from "../../assets/images/HomeBanner.jpg";

const HomeBanner = () => {
  const sectionStyle = {
    backgroundImage: `url(${HomeBannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: "100vh",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <section className="py-28 text-gray-200" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div className="container relative">
        <div className="grid grid-cols-2 place-items-center">
          <div className="hidden lg:block"></div>
          <div className="col-span-2 lg:col-span-1">
            <h5 className="font-bold text-xl capitalize text-success mb-4">Welcome to</h5>
            <h1 className="font-bold capitalize text-2xl leading-tight lg:leading-tight sm:text-4xl md:text-5xl mb-6">
              Global donation <span className="text-success">helpful</span> <br />
              organization
            </h1>

            <div className="text-end lg:text-start">
              <button className="btn btn-success capitalize text-lg">Donate now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
