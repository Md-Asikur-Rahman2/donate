import React from "react";
import HomeBanner from "./HomeBanner";
import StandPeople from "./StandPeople";
import HowWorks from "./HowWorks";
import OngoingDonations from "./OngoingDonations";
import CompletedDonations from "./CompletedDonations";
import Counters from "./Counters";
import BottomBanner from "./BottomBanner";
import TypeOfGrant from "./TypeOfGrant";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <StandPeople />
      <HowWorks />
      <TypeOfGrant />
      <OngoingDonations />
      <CompletedDonations />
      <Counters />
      <BottomBanner />
    </>
  );
};

export default HomePage;
