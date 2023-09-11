import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPlus,
  FaTrash,
  FaTwitter,
} from "react-icons/fa6";

const ContactInfoInputs = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [link, setLink] = useState("");

  const socialMediaOptions = [
    { name: "LinkedIn", value: "linkedin", icon: <FaLinkedin color="#0077B5" /> },
    { name: "Twitter", value: "twitter", icon: <FaTwitter color="#1DA1F2" /> },
    { name: "Instagram", value: "instagram", icon: <FaInstagram color="#E4405F" /> },
    { name: "Facebook", value: "facebook", icon: <FaFacebook color="#1877F2" /> },
  ];

  const handleAddLink = () => {
    if (selectedPlatform && link) {
      setSocialMedia([...socialMedia, { platform: selectedPlatform, link }]);
      setSelectedPlatform("");
      setLink("");
    }
  };

  const handleRemoveLink = (index) => {
    const updatedSocialMedia = socialMedia.filter((_, i) => i !== index);
    setSocialMedia(updatedSocialMedia);
  };

  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Email Address</span>
        </label>
        <input
          type="email"
          placeholder="contact@example.com"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Telephone Number</span>
        </label>
        <div className="input-group">
          <select className="select pr-0" defaultValue="">
            <option disabled value="">
              Country Code
            </option>
            <option value="+61">+61 (Australia)</option>
            <option value="+880">+880 (Bangladesh)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+1">+1 (Canada)</option>
            <option value="+86">+86 (China)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+33">+33 (France)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+91">+91 (India)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
          </select>
          <input
            type="tel"
            placeholder="(###) #### ###"
            className="input placeholder:text-gray-600 w-full"
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Contact Number</span>
        </label>
        <div className="input-group">
          <select className="select pr-0" defaultValue="">
            <option disabled value="">
              Country Code
            </option>
            <option value="+61">+61 (Australia)</option>
            <option value="+880">+880 (Bangladesh)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+1">+1 (Canada)</option>
            <option value="+86">+86 (China)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+33">+33 (France)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+91">+91 (India)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
          </select>
          <input
            type="tel"
            placeholder="(###) #### ###"
            className="input placeholder:text-gray-600 w-full"
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Social Media Link</span>
        </label>
        <div className="input-group">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="select pr-0"
          >
            <option value="" disabled>
              Social Media
            </option>
            {socialMediaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <input
            type="url"
            placeholder="https://www.example.com"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="input placeholder:text-gray-600 w-full"
          />
          <button onClick={handleAddLink} className="btn btn-primary btn-square">
            <FaPlus className="bg-red-5" size={18} />
          </button>
        </div>
        <div className="mt-4">
          {socialMedia.map((item, index) => (
            <div key={index} className="flex items-center gap-3 mb-1">
              <span className="text-xl overflow-hidden">
                {socialMediaOptions.find((option) => option.value === item.platform).icon}
              </span>
              <a href={item.link} target="_blank">
                {item.link}
              </a>
              <span
                className="cursor-pointer text-red-600 hover:text-red-700 duration-200"
                onClick={() => handleRemoveLink(index)}
              >
                <FaTrash size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactInfoInputs;
