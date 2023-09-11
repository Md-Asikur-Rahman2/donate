import UploadButton from "./UploadButton";

const CaptureButton = ({ buttonText = "Upload", handleModal, circle }) => {
  return (
    <div
      onClick={handleModal}
      className={`w-[100px] h-[100px] bg-[#00000005] border border-[#d9d9d9] ${
        circle ? "rounded-full" : "rounded-lg"
      } flex justify-center items-center text-center cursor-pointer hover:outline-dashed outline-1 outline-primary mt-2 p-1`}
    >
      <UploadButton buttonText={buttonText} className="text-sm" />
    </div>
  );
};

export default CaptureButton;
