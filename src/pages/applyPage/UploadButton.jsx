import { PlusOutlined } from "@ant-design/icons";

const UploadButton = ({ buttonText = "Upload", className }) => {
  return (
    <div>
      <PlusOutlined />
      <div
        className={className}
        style={{
          marginTop: 8,
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default UploadButton;
