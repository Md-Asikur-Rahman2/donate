const TotalDonation = () => {
  return (
    <div>
      <div className="border border-green-500 p-4">
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
  );
};

export default TotalDonation;
