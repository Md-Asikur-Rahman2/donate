import React from "react";

const PersonalInfoInputs = () => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Title</span>
        </label>
        <input
          type="text"
          placeholder="Enter your title"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">First Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Father's Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter your father's name"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Mother's Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter your mother's name"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Date of birth</span>
        </label>
        <input type="date" className="input" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Gender</span>
        </label>
        <select className="input">
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Marital Status</span>
        </label>
        <select className="input">
          <option value="">Select marital status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Blood Group</span>
        </label>
        <input
          type="text"
          placeholder="Enter your blood group"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Educational Qualification</span>
        </label>
        <input
          type="text"
          placeholder="Enter your educational qualification"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Occupation</span>
        </label>
        <input
          type="text"
          placeholder="Enter your occupation"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Country</span>
        </label>
        <input
          type="text"
          placeholder="Enter your country"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">State/Province</span>
        </label>
        <input
          type="text"
          placeholder="Enter your state/province"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">City</span>
        </label>
        <input
          type="text"
          placeholder="Enter your city"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Zip Code</span>
        </label>
        <input
          type="text"
          placeholder="Enter your zip code"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control lg:col-span-2 xl:col-span-3">
        <label className="label">
          <span className="label-text text-lg">Address</span>
        </label>
        <textarea
          placeholder="Enter your address"
          className="textarea h-28 placeholder:text-gray-600"
        ></textarea>
      </div>
    </>
  );
};

export default PersonalInfoInputs;
