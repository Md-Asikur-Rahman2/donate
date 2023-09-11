import { Tabs } from "antd";
import {
  BsFillHeartFill,
  BsMessenger,
  BsPrinterFill,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaCopy } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { useEffect, useState } from "react";
import copy from "clipboard-copy";
import DonationSecoundary from "./DonationSecoundary";
import ImageMain from "./Documents/ImageMain";
import VideoGallery from "./Video/VideoPlayer";
import moment from "moment";

const DonationDetails = () => {
  const [url, setUrl] = useState(window.location.href);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const targetPercentage = 56;
    let currentPercentage = 0;

    const interval = setInterval(() => {
      if (currentPercentage < targetPercentage) {
        currentPercentage++;
        setPercentage(currentPercentage);
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust the interval speed for smoother animation

    return () => {
      clearInterval(interval);
    };
  }, []);

  const commentsData = [
    {
      id: 1,
      name: "John Doe",
      image: "https://source.unsplash.com/300x300/?woman",
      content: "This is a great article!",
      role: "Engineer",
      timestamp: "2023-08-24T13:45:00Z",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://source.unsplash.com/300x300/?woman",
      content: "This is a great article!",
      role: "Designer",
      timestamp: "2023-08-24T13:45:00Z",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "https://source.unsplash.com/300x300/?woman",
      content: "This is a great article!",
      role: "Manager",
      timestamp: "2023-08-24T13:45:00Z",
    },
  ];

  const Comment = (commentsData) => (
    <div className="flex border bg-slate-100 p-4 mb-4 rounded-md">
      <img
        src={commentsData.image}
        alt={`${commentsData.name}'s profile`}
        className="w-12 h-12 rounded-full   mr-4"
      />
      <div>
        <div className="text-gray-700 mb-2 text-lg font-semibold">
          {commentsData.name}
          <sup className="ml-2  font-normal text-gray">{`${moment(
            commentsData.timestamp
          ).fromNow()}`}</sup>
        </div>
        <div className="text-gray-900 text-base">{` " ${commentsData.content} "`}</div>
      </div>
    </div>
  );

  const OverviewLabel = (
    <>
      {/* <button className="bg-[#198D50] text-white font-bold py-2 px-1  text-base rounded-md hover:text-[#f472b6] sm:text-sm p-1 ">
        Overview
      </button> */}
      <button className="bg-[#198D50] text-white font-bold py-2 px-1 text-base rounded-md hover:text-[#f472b6] sm:py-2 sm:px-3 md:py-2 md:px-2 ">
        Overview
      </button>
    </>
  );
  const OverviewContent = (
    <div className="container mx-auto">
      <h4 className="text-xl font-bold mb-2">Story</h4>
      <p className="sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti hic exercitationem
        earum architecto accusamus impedit reprehenderit similique assumenda sequi debitis est
        molestiae eos provident voluptates obcaecati esse, facere at odit. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Deleniti hic exercitationem earum architecto
        accusamus impedit reprehenderit similique assumenda sequi debitis est molestiae eos
        provident voluptates obcaecati esse, facere at odit. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Deleniti hic exercitationem earum architecto accusamus
        impedit reprehenderit similique assumenda sequi debitis est molestiae eos provident
        voluptates obcaecati esse, facere at odit.
      </p>
    </div>
  );
  const DocumentsLabel = (
    <>
      <button className="bg-[#198D50] text-white font-bold py-2 px-1 text-base rounded-md hover:text-[#f472b6] sm:py-2 sm:px-3 md:py-2 md:px-2 ">
        Documents
      </button>
    </>
  );
  const DocumentsContent = (
    <>
      <div className="flex">
        <div className="ml-4">
          <ImageMain />
        </div>
      </div>
    </>
  );

  const VideoLabel = (
    <>
      <button className="bg-[#198D50] text-white font-bold py-2 px-1 text-base rounded-md hover:text-[#f472b6] sm:py-2 sm:px-3 md:py-2 md:px-2 ">
        Video
      </button>
    </>
  );
  const VideoContent = (
    <>
      <div>
        <VideoGallery />
      </div>
    </>
  );

  const CommentsLabel = (
    <>
      <button className="bg-[#198D50] text-white font-bold py-2 px-1 text-base rounded-md hover:text-[#f472b6] sm:py-2 sm:px-3 md:py-2 md:px-2 ">
        Comments
      </button>
    </>
  );
  const CommentsContent = (
    <>
      {commentsData.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </>
  );
  const ShareLabel = (
    <>
      <button className="bg-primary text-white font-semibold py-2 px-1  rounded-md hover:text-[#f472b6]">
        SHARE
      </button>
    </>
  );
  const ShareContent = (
    <div className="mt-4">
      <div className="flex flex-wrap gap-4 justify-center text-white">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#385795]">
          <a href="#">
            <BiLogoFacebook size={18} />
          </a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#19a2f7]">
          <a href="#">
            <BsTwitter size={18} />
          </a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#999999]">
          <a href="#">
            <TfiEmail size={18} />
          </a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#27d26a]">
          <a href="#">
            <BsWhatsapp size={18} />
          </a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#0084fe]">
          <a href="#">
            <BsMessenger size={18} />
          </a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#0175b4]">
          <a href="#">
            <BiLogoLinkedin size={18} />
          </a>
        </div>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#0175b4]">
          <a className="" href="#">
            <BsPrinterFill size={18} />
          </a>
        </div>
      </div>

      <div className="flex items-center mt-6 justify-center">
        <div className="form-control p-2 mt-3">
          <div className="input-group">
            <input
              readOnly
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="input text-black input-bordered"
            />
            <button className="btn btn-success" onClick={handleCopy}>
              <FaCopy /> {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const items = [
    {
      key: "1",
      label: OverviewLabel,
      children: OverviewContent,
    },
    {
      key: "2",
      label: DocumentsLabel,
      children: DocumentsContent,
    },
    {
      key: "3",
      label: VideoLabel,
      children: VideoContent,
    },
    {
      key: "4",
      label: CommentsLabel,
      children: CommentsContent,
    },

    {
      key: "5",
      label: ShareLabel,
      children: ShareContent,
    },
    {
      key: "6",
      label: ShareLabel,
      children: ShareContent,
    },
    {
      key: "7",
      label: ShareLabel,
      children: ShareContent,
    },

    {
      key: "8",
      label: ShareLabel,
      children: ShareContent,
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/12 p-4">
            <h1 className="font-bold mb-6 text-2xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className="overflow-hidden">
              <img
                className="h-[300px] sm:h-[350px] md:h-[400px] xl:h-[450px] w-full object-cover"
                src="https://source.unsplash.com/1250x1650/?beach,nature"
                alt="image"
              />

              <Tabs tabBarGutter={10} defaultActiveKey="1" items={items} centered />
            </div>
          </div>
          <div className="lg:w-5/12 p-4">
            <div className="flex justify-center items-center  bg-gray-100">
              <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-center items-center">
                  <div className="relative ">
                    <span>
                      <BsFillHeartFill size={100} color="#dd0d0d" />
                    </span>

                    <span className="absolute text-xl text-white pb-6 font-bold flex top-0 left-0  w-full h-full  justify-center items-center">
                      {percentage}%
                    </span>
                  </div>
                </div>

                <DonationSecoundary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationDetails;
