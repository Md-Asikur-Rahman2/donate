import React, { useCallback, useState } from "react";
import { Modal, Upload } from "antd";
import CaptureModal from "../CaptureModal";
import CaptureButton from "../CaptureButton";
import UploadButton from "../UploadButton";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const VolunteerContactInputs = () => {
  // Webcam Capture States
  const [webcamModalOpen, setWebcamModalOpen] = useState(false);
  const [capturedWebcamImage, setCapturedWebcamImage] = useState("");
  const [currentContext, setCurrentContext] = useState("");

  // Volunteer States
  const [volunteerPhotoPreviewOpen, setVolunteerPhotoPreviewOpen] = useState(false);
  const [volunteerPreviewImage, setVolunteerPreviewImage] = useState("");
  const [volunteerPhotoPreviewTitle, setVolunteerPhotoPreviewTitle] = useState("");
  const [volunteerPhotos, setVolunteerPhotos] = useState([]);

  // Identity States
  const [NID, setNID] = useState(true);
  const [identityPhotoPreviewOpen, setIdentityPhotoPreviewOpen] = useState(false);
  const [identityPreviewImage, setIdentityPreviewImage] = useState("");
  const [identityPhotoPreviewTitle, setIdentityPhotoPreviewTitle] = useState("");
  const [identityPhotos, setIdentityPhotos] = useState([]);

  // Document States
  const [documentPreviewOpen, setDocumentPreviewOpen] = useState(false);
  const [documentPreview, setDocumentPreview] = useState("");
  const [documentPreviewTitle, setDocumentPreviewTitle] = useState("");
  const [documents, setDocuments] = useState([]);

  // Handle Webcam Capture Photos
  const handleWebcamModalOpen = useCallback((context) => {
    setWebcamModalOpen(!webcamModalOpen);
    setCurrentContext(context);
  }, []);

  const capturedWebcamPhoto = useCallback((imageSrc, prevPhotos) => {
    setCapturedWebcamImage(imageSrc);

    let arr = [];

    if (prevPhotos) {
      arr = [...prevPhotos];
    } else {
      arr = [];
    }

    const webcamFile = {
      uid: Math.floor(Math.random() * 1000000),
      name: `${Math.floor(Math.random() * 1000000)}.jpg`,
      status: "error",
      url: imageSrc,
    };

    arr.push(webcamFile);
    return arr;
  }, []);

  const captureWebcamPhoto = useCallback(
    (imageSrc) => {
      let arr = [];

      if (currentContext === "volunteer") {
        arr = capturedWebcamPhoto(imageSrc, volunteerPhotos);
        setVolunteerPhotos(arr);
      } else if (currentContext === "identity") {
        arr = capturedWebcamPhoto(imageSrc, identityPhotos);
        setIdentityPhotos(arr);
      }

      handleWebcamModalOpen("");
    },
    [
      currentContext,
      capturedWebcamPhoto,
      volunteerPhotos,
      identityPhotos,
      handleWebcamModalOpen,
    ]
  );

  // Handle Volunteer Photos
  const handleVolunteerPhotoCancel = useCallback(
    () => setVolunteerPhotoPreviewOpen(false),
    []
  );

  const handleVolunteerPhoto = useCallback(async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setVolunteerPreviewImage(file.url || file.preview);
    setVolunteerPhotoPreviewOpen(true);
    setVolunteerPhotoPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  }, []);

  const handleVolunteerPhotoChange = useCallback(({ fileList: newFileList }) => {
    setVolunteerPhotos(newFileList);
  }, []);

  // Handle Identify Photos
  const handleIdentityPhotoCancel = useCallback(() => setIdentityPhotoPreviewOpen(false), []);

  const handleIdentityPhoto = useCallback(async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setIdentityPreviewImage(file.url || file.preview);
    setIdentityPhotoPreviewOpen(true);
    setIdentityPhotoPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  }, []);

  const handleIdentityPhotoChange = useCallback(({ fileList: newFileList }) => {
    setIdentityPhotos([]);
  }, []);

  // Handle Documents
  const handleDocumentCancel = useCallback(() => setDocumentPreviewOpen(false), []);

  const handleDocument = useCallback(async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setDocumentPreview(file.url || file.preview);
    setDocumentPreviewOpen(true);
    setDocumentPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
  }, []);

  const handleDocumentChange = useCallback(({ fileList: newFileList }) => {
    setDocuments(newFileList);
  }, []);

  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Photo of Volunteer</span>
        </label>
        {volunteerPhotos.length > 0 ? (
          <Upload
            className="mt-2"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-circle"
            fileList={volunteerPhotos}
            onPreview={handleVolunteerPhoto}
            onChange={handleVolunteerPhotoChange}
          >
            {volunteerPhotos.length >= 1 ? null : (
              <UploadButton buttonText="Volunteer photo" />
            )}
          </Upload>
        ) : (
          <CaptureButton
            buttonText="Volunteer photo"
            handleModal={() => handleWebcamModalOpen("volunteer")}
            circle
          />
        )}
        {currentContext === "volunteer" && (
          <CaptureModal
            modalState={webcamModalOpen}
            handleModalOpen={() => handleWebcamModalOpen("")}
            captureState={captureWebcamPhoto}
            photoSize={{ width: 300, height: 300 }}
          />
        )}

        {/* Preview Modal */}
        <Modal
          centered
          open={volunteerPhotoPreviewOpen}
          title={volunteerPhotoPreviewTitle}
          footer={null}
          onCancel={handleVolunteerPhotoCancel}
        >
          <img
            className="border bg-green-400"
            alt="example"
            style={{
              width: "100%",
            }}
            src={volunteerPreviewImage}
          />
        </Modal>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Photo of NID or Birth Certificate</span>
        </label>
        <select
          onChange={() => {
            setNID(!NID);
            setIdentityPhotos([]);
          }}
          className="select"
          defaultValue="nid"
        >
          <option value="nid">NID</option>
          <option value="birth">Birth Certificate</option>
        </select>

        {NID ? (
          identityPhotos.length > 1 ? (
            <Upload
              className="mt-2"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={identityPhotos}
              onPreview={handleIdentityPhoto}
              onChange={handleIdentityPhotoChange}
              maxCount={2}
            >
              {identityPhotos.length >= 2 ? null : (
                <UploadButton
                  buttonText={identityPhotos.length <= 0 ? "NID front" : "NID back"}
                />
              )}
            </Upload>
          ) : (
            <>
              <CaptureButton
                buttonText={identityPhotos.length <= 0 ? "NID front" : "NID back"}
                handleModal={() => handleWebcamModalOpen("identity")}
              />
              {currentContext === "identity" && (
                <CaptureModal
                  modalState={webcamModalOpen}
                  handleModalOpen={() => handleWebcamModalOpen("")}
                  captureState={captureWebcamPhoto}
                  photoSize={{ width: 640, height: 480 }}
                />
              )}
            </>
          )
        ) : (
          <>
            {identityPhotos.length > 0 ? (
              <Upload
                className="mt-2"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={identityPhotos}
                onPreview={handleIdentityPhoto}
                onChange={handleIdentityPhotoChange}
                maxCount={2}
              >
                {identityPhotos.length >= 1 ? null : (
                  <UploadButton buttonText="Birth Certificate" />
                )}
              </Upload>
            ) : (
              <>
                <CaptureButton
                  buttonText="Birth Certificate"
                  handleModal={() => handleWebcamModalOpen("identity")}
                />
                {currentContext === "identity" && (
                  <CaptureModal
                    modalState={webcamModalOpen}
                    handleModalOpen={() => handleWebcamModalOpen("")}
                    captureState={captureWebcamPhoto}
                    photoSize={{ width: 413, height: 531 }}
                  />
                )}
              </>
            )}
          </>
        )}
        <Modal
          open={identityPhotoPreviewOpen}
          title={identityPhotoPreviewTitle}
          footer={null}
          onCancel={handleIdentityPhotoCancel}
        >
          <img
            className="border bg-green-400"
            alt="example"
            style={{
              width: "100%",
            }}
            src={identityPreviewImage}
          />
        </Modal>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Other Documents</span>
        </label>
        <Upload
          className="mt-2"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={documents}
          onPreview={handleDocument}
          onChange={handleDocumentChange}
          maxCount={5}
        >
          {documents.length >= 5 ? null : <UploadButton buttonText="Upload" />}
        </Upload>
        <Modal
          open={documentPreviewOpen}
          title={documentPreviewTitle}
          footer={null}
          onCancel={handleDocumentCancel}
        >
          <img
            className="border bg-green-400"
            alt="example"
            style={{
              width: "100%",
            }}
            src={documentPreview}
          />
        </Modal>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Email</span>
        </label>
        <input
          type="email"
          placeholder="info@site.com"
          className="input placeholder:text-gray-600"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Telephone Number</span>
        </label>
        <div className="input-group">
          <select className="select pr-0" defaultValue="">
            <option disabled value="">
              Country Code
            </option>
            <option value="+61">+61 (Australia)</option>
            <option value="+880">+880 (Bangladesh)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+1">+1 (Canada)</option>
            <option value="+86">+86 (China)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+33">+33 (France)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+91">+91 (India)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
          </select>
          <input
            type="tel"
            placeholder="(###) #### ###"
            className="input placeholder:text-gray-600 w-full"
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg">Contact Number</span>
        </label>
        <div className="input-group">
          <select className="select pr-0" defaultValue="">
            <option disabled value="">
              Country Code
            </option>
            <option value="+61">+61 (Australia)</option>
            <option value="+880">+880 (Bangladesh)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+1">+1 (Canada)</option>
            <option value="+86">+86 (China)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+33">+33 (France)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+91">+91 (India)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
          </select>
          <input
            type="tel"
            placeholder="(###) #### ###"
            className="input placeholder:text-gray-600 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default VolunteerContactInputs;
