import React, { useRef, useState } from "react";
import { Modal, Button } from "antd";
import Webcam from "react-webcam";
import { FaCameraRotate } from "react-icons/fa6";
import { TbCapture } from "react-icons/tb";

const videoConstraints = {
  width: 300,
  height: 300,
};

const CaptureModal = ({ modalState, handleModalOpen, captureState, photoSize }) => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user"); // "user" for front, "environment" for back

  const toggleCamera = () => {
    setFacingMode(facingMode === "user" ? "environment" : "user");
  };

  return (
    <Modal
      centered
      title="Take a photo"
      open={modalState}
      onCancel={handleModalOpen}
      footer={[
        <button
          key="volunteerPhotoCaptureModalClose"
          className="btn btn-error btn-sm normal-case"
          onClick={handleModalOpen}
        >
          Close
        </button>,
      ]}
    >
      <div className="flex flex-col items-center">
        <Webcam
          mirrored={facingMode === "user"}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ ...videoConstraints, facingMode: facingMode }}
        />

        <div className="mt-5">
          <button
            key="switchCamerButton"
            title="Rotate camera"
            className="btn btn-primary btn-sm normal-case mr-3"
            onClick={toggleCamera}
          >
            <FaCameraRotate size={24} />
          </button>

          <button
            key="captureButton"
            title="Take a photo"
            className="btn btn-primary btn-sm normal-case"
            onClick={() => {
              captureState(webcamRef.current.getScreenshot(photoSize));
              handleModalOpen();
            }}
          >
            <TbCapture size={24} />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CaptureModal;
