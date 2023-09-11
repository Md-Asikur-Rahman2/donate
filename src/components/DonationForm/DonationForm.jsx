import { Checkbox, Input, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;
const { TextArea } = Input;

const DonationFrom = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    occupation: "",
    email: "",
    phoneNumber: "",
    country: "",
    stateProvince: "",
    city: "",
    zipCode: "",
  });
  const [showInput, setShowInput] = useState(false);
  const [showInputtwo, setShowInputTwo] = useState(false);

  const [errors, setErrors] = useState({});

  const options = ['This is truly inspiring ', 'You are Amazing', 'Youre making a differnce'];
  const [selectedValue, setSelectedValue] = useState('');

  const PhoneNumberForm = () => {
  
    const [formData, setFormData] = useState({
      countryCode: '+1', 
      phoneNumber: '',

    })};




  const handleButtonClick = (option) => {
    setSelectedValue(option);
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can handle form submission logic here.
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateFormData = (data) => {
    let errors = {};

    // Custom validation rules go here
    if (!data.fullName.trim()) {
      errors.fullName = "Full Name is ";
    }

    if (!data.occupation.trim()) {
      errors.occupation = "Occupation is ";
    }

    if (!data.email.trim()) {
      errors.email = "Email is ";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is ";
    }

    if (!data.country.trim()) {
      errors.country = "Country is ";
    }

    if (!data.stateProvince.trim()) {
      errors.stateProvince = "State/Province is ";
    }

    if (!data.city.trim()) {
      errors.city = "City is ";
    }

    if (!data.zipCode.trim()) {
      errors.zipCode = "Zip Code is ";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangetwo = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleCheckboxChange = (e) => {
    setShowInput(e.target.checked);
  };

  const handleCheckboxChange2 = (e) => {
    setShowInputTwo(e.target.checked);
  };
  return (
    <>
      <div className="container">
        <div className="bg-gray-200  p-5">
          <h2 className="text-3xl font-semibold p-3 mb-4"> Donattion Form</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4">
              <div>
                <Checkbox className="m-2" onChange={onChange}>
                  Hide My Name and profile picture
                </Checkbox>
              </div>
              <div>
                <Checkbox className="m-2" onChange={onChangetwo}>
                  Hide donation amount from public view
                </Checkbox>
              </div>

              <div>
                <Checkbox className="m-2" onChange={handleCheckboxChange}>
                  This donation is on behalf of a company
                </Checkbox>
                {showInput && (
                  <div style={{ marginTop: "10px" }}>
                    <TextArea rows={4} placeholder=" Enter Some Thing " />
                  </div>
                )}
              </div>
              <div>
                <Checkbox
                  className="m-2 font-semibold text-lg"
                  onChange={handleCheckboxChange2}
                >
                  Write Us a Comments
                </Checkbox>
                {showInputtwo && (
                  <div className="grid grid-cols-2 gap-4">
                    <div style={{ marginTop: "10px" }}>
                      <TextArea
                        rows={4}
                        value={selectedValue}
                        placeholder=" Enter Some Thing "
                      />
                    </div>

                    <div className="">
                      <div className="m-4">
                        <div className="space-x-2">
                          {options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleButtonClick(option)}
                              className="m-2 rounded bg-slate-300 p-3"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4"></div>
            </div>

            <div className=""></div>
          </div>

          <form
            className="bg-white p-8 rounded shadow-md p grid gap-6 grid-cols-1 
        md:grid-cols-2  sm:grid-cols-1 sm:gap-2 "
            onSubmit={handleSubmit}
          >
            <div className="mb-4 sm:mb-1 m-4">
              <label
                htmlFor="fullName"
                className="font-bold mb-2  text-gray-600 "
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2  focus:outline-none ${
                  errors.fullName ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Your Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div className="mb-4 sm:mb-1 m-4">
              <label
                htmlFor="occupation"
                className=" font-bold mb-2  text-gray-600 "
              >
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2 focus:outline-none ${
                  errors.occupation ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Your Occupation"
              />
              {errors.occupation && (
                <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>
              )}
            </div>
            <div className="mb-4 sm:mb-1 m-4">
              <label
                htmlFor="email"
                className=" font-bold mb-2  text-gray-600 "
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2 focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4 sm:mb-1  m-4 flex">
             
              <select
                value={formData.countryCode}
                onChange={(e) => handleChange("countryCode", e.target.value)}
                className="px-4 py-2 border-b-2 focus:outline-none"
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
              </select>

              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2 focus:outline-none ${
                  errors.country ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Your Number"
              />


{errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
            </div>
           

            <div className="mb-4  sm:mb-1 m-4">
              <label
                htmlFor="country"
                className=" font-bold mb-2  text-gray-600 "
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2 focus:outline-none ${
                  errors.country ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Your Country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>
            <div className="mb-4  sm:mb-1 m-4">
              <label
                htmlFor="stateProvince"
                className=" font-bold mb-2  text-gray-600 "
              >
                State/Province
              </label>
              <input
                type="text"
                id="stateProvince"
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2 focus:outline-none ${
                  errors.stateProvince
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Your State/Province"
              />
              {errors.stateProvince && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.stateProvince}
                </p>
              )}
            </div>
            <div className="mb-4  sm:mb-1 m-4">
              <label htmlFor="city" className=" font-bold mb-2  text-gray-600 ">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2 focus:outline-none ${
                  errors.city ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Your City"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>
            <div className="mb-4 sm:mb-1 m-4">
              <label
                htmlFor="zipCode"
                className=" font-bold mb-2  text-gray-600 "
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={`w-full px-4 py-2 border-b-2 focus:outline-none ${
                  errors.zipCode ? "border-red-500" : "focus:border-blue-500"
                }`}
                placeholder="Your Zip Code"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
              )}
            </div>

            <div className="mb-4 sm:mb-1 m-4"></div>

            <div>
              <div className="border mt-3 border-green-500 p-4">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold">Total Donation :</div>
                  <div className="font-semibold">
                    <span className="text-green-600">$34</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end m-5">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded">
                  Donate Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonationFrom;
