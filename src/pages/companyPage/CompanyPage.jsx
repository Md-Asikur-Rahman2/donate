import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const CompanyPage = () => {
  return (
    <section className="py-20 bg-success">
      <div className="container">
        {/* Table 1 */}
        <SectionTitle title="Our Company" />

        <div className="overflow-x-auto mb-16">
          <table className="table table-zebra font-poppins bg-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="text-lg font-noto bg-primary text-white">
                <th>Serial No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Title</th>
                <th>Mobile Number</th>
                <th>Gmail</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    01
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>CEO</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    02
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>CEO</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    03
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>CEO</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    04
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>CEO</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    05
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>CEO</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    06
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>CEO</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <SectionTitle title="Volunteers" />

        <div className="mb-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ID Select */}
          <input
            type="text"
            placeholder="Type ID"
            className="input input-bordered bg-primary text-white placeholder:text-white input-lg w-full"
          />

          {/* Country Select */}
          <select className="select select-bordered select-lg w-full bg-primary text-white">
            <option disabled selected>
              Country
            </option>
            <option>Bangladesh</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>United Kingdom</option>
            <option>Germany</option>
            <option>France</option>
            <option>Japan</option>
            <option>China</option>
          </select>

          {/* State Select */}
          <select className="select select-bordered select-lg w-full bg-primary text-white">
            <option disabled selected>
              State/Province
            </option>
            <option>California</option>
            <option>Texas</option>
            <option>New York</option>
            <option>Florida</option>
            <option>Ontario</option>
            <option>Quebec</option>
            <option>Maharashtra</option>
            <option>Tamil Nadu</option>
          </select>

          {/* City Select */}
          <select className="select select-bordered select-lg w-full bg-primary text-white">
            <option disabled selected>
              City
            </option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Houston</option>
            <option>Miami</option>
            <option>San Francisco</option>
            <option>Seattle</option>
            <option>Toronto</option>
            <option>London</option>
            <option>Paris</option>
            <option>Tokyo</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra font-poppins bg-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="text-lg font-noto bg-primary text-white">
                <th>Serial No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Gmail</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    01
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    02
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    03
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    04
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    05
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
              <tr className="text-base">
                <td>
                  <span className="bg-primary text-white w-8 h-8 flex justify-center items-center rounded-md text-xl">
                    06
                  </span>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img
                        src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Hart Hagerty</td>
                <td>+44 4649 4548 45</td>
                <td>hart@example.com</td>
                <td>Bangladesh, Dhaka</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompanyPage;
