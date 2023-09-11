import React from "react";

const WithdrawalAmount = () => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">How much money do you need?</span>
        </label>
        <input className="input" type="text" placeholder="Enter the required amount" />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">What is your donation time limit?</span>
        </label>
        <div className="flex items-center">
          <input className="input" type="text" placeholder="Enter total Rs" />
          <span className="mx-2">-</span>
          <input className="input" type="date" placeholder="Enter last date" />
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Your Requirements</span>
        </label>
        <textarea
          className="textarea"
          rows="4"
          placeholder="Enter your requirements"
        ></textarea>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Withdrawal of Grant Amount</span>
        </label>
        <div className="flex items-center">
          <input className="radio" type="radio" id="automatic" name="withdrawalType" />
          <label className="label-text ml-2" htmlFor="automatic">
            Automatic
          </label>

          <input className="radio ml-6" type="radio" id="manual" name="withdrawalType" />
          <label className="label-text ml-2" htmlFor="manual">
            Manual
          </label>
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Withdrawal Method</span>
        </label>
        <select className="select">
          <option value="visa">Automatic - Visa Card</option>
          <option value="paypal">Automatic - PayPal</option>
          <option value="bank">Manual - Bank Transfer</option>
          <option value="mobile">Manual - Mobile Banking</option>
        </select>
      </div>
    </>
  );
};

export default WithdrawalAmount;
