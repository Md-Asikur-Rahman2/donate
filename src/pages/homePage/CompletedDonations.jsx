import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import USA from "../../assets/images/usa-flag.jpg";
import UK from "../../assets/images/uk-flag.jpg";
import DonationImage from "../../assets/images/donation-image.png";
import CompletedDonationCard from "../../components/cards/CompletedDonationCard";

const CompletedDonationsData = [
  {
    _id: "613a9c256b6eef0015f3e663",
    category: "Education",
    goal: 10000,
    raised: 12000,
    giver: 364,
    description: "Supporting underprivileged children's education",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-16",
  },
  {
    _id: "613a9c256b6eef0015f3e664",
    category: "Healthcare",
    goal: 15000,
    raised: 15000,
    giver: 152,
    description: "Providing medical aid to rural communities",
    countryFlag: UK,
    image: DonationImage,
    date: "2023-08-12",
  },
  {
    _id: "613a9c256b6eef0015f3e665",
    category: "Environment",
    goal: 8000,
    raised: 8000,
    giver: 219,
    description: "Planting trees and conserving natural habitats",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-09",
  },
  {
    _id: "613a9c256b6eef0015f3e666",
    category: "Animal Welfare",
    goal: 5000,
    raised: 5000,
    giver: 87,
    description: "Rescuing and caring for abandoned animals",
    countryFlag: UK,
    image: DonationImage,
    date: "2023-08-20",
  },
  {
    _id: "613a9c256b6eef0015f3e667",
    category: "Community Development",
    goal: 12000,
    raised: 12000,
    giver: 327,
    description: "Empowering local communities through sustainable projects",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-18",
  },
  {
    _id: "613a9c256b6eef0015f3e365",
    category: "Environment",
    goal: 8000,
    raised: 8000,
    giver: 219,
    description: "Planting trees and conserving natural habitats",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-09",
  },
  {
    _id: "613a9c256b6eef0015f3e668",
    category: "Education",
    goal: 10000,
    raised: 10000,
    giver: 364,
    description: "Supporting underprivileged children's education",
    countryFlag: USA,
    image: DonationImage,
    date: "2023-08-16",
  },
  {
    _id: "613a9c256b6eef0015f3e554",
    category: "Healthcare",
    goal: 15000,
    raised: 15000,
    giver: 152,
    description: "Providing medical aid to rural communities",
    countryFlag: UK,
    image: DonationImage,
    date: "2023-08-12",
  },
];

const CompletedDonations = () => {
  return (
    <section className="py-20 bg-success">
      <div className="container">
        <SectionTitle className="text-white" title="Completed Donations" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CompletedDonationsData.map((donation) => {
            const raisedPercentage = Math.round((donation.raised / donation.goal) * 100);

            return (
              <CompletedDonationCard
                key={donation?._id}
                donation={donation}
                raisedPercentage={raisedPercentage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompletedDonations;
