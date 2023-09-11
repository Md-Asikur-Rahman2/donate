import DonationList from "./DonationList";
import GiveTipsAmount from "./GiveTips";
import PayDuration from "./PayDuration";
import SelectedAmount from "./SelectedAmount";
import TimeDifferenceUpdater from "./Time";
import TotalDonation from "./TotalDonation";
import VlountierTips from "./VlountierTips";
import donationData from "./donationData.json";

const DonationSecoundary = () => {
  const { currentDonation, goal, giverCount } = donationData.donationInfo;

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-[#198f50] text-center mb-4">
          ${currentDonation}
        </h1>

        <div className="flex justify-center items-center ">
          <div className="flex-2/4 mr-5">
            <h1 className="text-xl font-bold mb-4">Goal : {goal}</h1>
          </div>

          <div className="flex-2/4">
            <h1 className="text-xl font-bold mb-4">Giver : {giverCount}</h1>
          </div>
        </div>
        <TimeDifferenceUpdater />
        <hr className="my-3 p-2" />

        <PayDuration />
        <hr className="my-4 p-2" />
        <SelectedAmount />
        <hr className="m-2 p-2" />
        <GiveTipsAmount />
        <hr className="m-2 p-2" />
        <VlountierTips />
        <hr className="m-2 p-2" />
        <TotalDonation />
        <hr className="m-2 p-2" />
        <DonationList />
      </div>
    </div>
  );
};

export default DonationSecoundary;
