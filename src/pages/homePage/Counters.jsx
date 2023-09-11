import React from "react";

const Counters = () => {
  const counters = [
    { label: "Years", value: 5 },
    { label: "Dollars", value: 150000 },
    { label: "Donors", value: 1000 },
    { label: "Projects", value: 50 },
    { label: "Countries", value: 20 },
    { label: "Companies", value: 30 },
  ];

  return (
    <section className="py-20 bg-amber-600">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-8 text-center text-white">
          <div>
            <h4 className="text-3xl sm:text-4xl font-bold mb-1">21</h4>
            <p className="text-lg sm:text-xl font-medium">years</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-bold mb-1">175+</h4>
            <p className="text-lg sm:text-xl font-medium">countries</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-bold mb-1">571</h4>
            <p className="text-lg sm:text-xl font-medium">companies</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-bold mb-1">34,745</h4>
            <p className="text-lg sm:text-xl font-medium">projects</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-bold mb-1">1,752,008</h4>
            <p className="text-lg sm:text-xl font-medium">donors</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-bold mb-1">$844M</h4>
            <p className="text-lg sm:text-xl font-medium">dollars</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
