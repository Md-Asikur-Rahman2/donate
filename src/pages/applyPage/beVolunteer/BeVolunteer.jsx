import React, { useState } from "react";
import { message, Steps } from "antd";
import PersonalInfoInputs from "./PersonalInfoInputs";
import VolunteerContactInputs from "./VolunteerContactInputs";
import PublicContactInputs from "./PublicContactInputs";

const steps = [
  {
    title: "Volunteer personal info",
    content: <PersonalInfoInputs />,
  },
  {
    title: "Volunteer Contact info",
    content: <VolunteerContactInputs />,
  },
  {
    title: "Public contact info",
    content: <PublicContactInputs />,
  },
];

const BeVolunteer = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item, index) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps current={current} items={items} />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-6 ">
        {steps[current].content}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-6 mt-10">
        {current > 0 && (
          <button className="btn btn-primary btn-sm" onClick={() => prev()}>
            Previous
          </button>
        )}
        {current < steps.length - 1 && (
          <button className="btn btn-primary btn-sm ml-auto" onClick={(e) => next()}>
            Next
          </button>
        )}
        {current === steps.length - 1 && (
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </button>
        )}
      </div>
    </>
  );
};

export default BeVolunteer;
