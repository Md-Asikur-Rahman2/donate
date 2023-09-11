import React from "react";

const SectionTitle = ({ title, className }) => {
  return (
    <div className="mb-16">
      <h1 className={`text-center text-4xl font-noto font-semibold text-white ${className}`}>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
