import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 176,
  height: 176,
  facingMode: "user",
};

const BeVolunteer = () => {
  const [capturedImage, setCapturedImage] = useState("");

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  return (
    <div className="container p-12 pl-96">
      <img className="my-8 w-44 h-44" src={capturedImage} alt="Image" />

      <Webcam
        audio={false}
        height={176}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={176}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture} className="btn btn-error mt-10">
        Capture photo
      </button>
    </div>
  );
};

export default BeVolunteer;
