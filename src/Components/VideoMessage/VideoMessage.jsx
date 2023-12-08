import React, { useState } from "react";
import "./VideoMessage.css";

const VideoMessage = () => {
  
  const [uploadMessage, setUploadMessage] = useState(null);
  const [formData, setFormData] = useState({
    MainmostFolderName:"",
    SubFolderName:"",
    VideoTitle: "",
    description: "",
    YouTube_Url: "",
    Banner: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Check if the input is a file input
    const inputValue = type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSave = async () => {
    try {
      const formDataForUpload = new FormData();
      formDataForUpload.append('MainmostFolderName', formData.MainmostFolderName);
      formDataForUpload.append('SubFolderName', formData.SubFolderName);
      formDataForUpload.append('VideoTitle', formData.VideoTitle);
      formDataForUpload.append('description', formData.description);
      formDataForUpload.append('YouTube_Url', formData.YouTube_Url);
      formDataForUpload.append('Banner', formData.Banner);

      const response = await fetch(
        "http://ec2-13-233-129-161.ap-south-1.compute.amazonaws.com:8080/v1/video/upload",
        {
          method: "POST",
          body: formDataForUpload,
        }
      );

      if (!response.ok) {
        setUploadMessage("Failed to upload video");
        throw new Error("Failed to upload video");
      }

      setUploadMessage("Video song uploaded successfully");
      // Handle success, e.g., show a success message
      console.log("Video song uploaded successfully");
    } catch (error) {
      setUploadMessage("Error uploading video:", error);
      // Handle errors, e.g., show an error message
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Video Message</h1>
        <div className="title-div">
          <p>MainFolder :</p>
          <input
            type="text"
            name="MainmostFolderName"
            value={formData.MainmostFolderName}
            onChange={handleChange}
          />
        </div>
        <div className="title-div">
          <p>SubFolder :</p>
          <input
            type="text"
            name="SubFolderName"
            value={formData.SubFolderName}
            onChange={handleChange}
          />
        </div>
        <div className="title-div">
          <p>Title :</p>
          <input
            type="text"
            name="VideoTitle"
            value={formData.VideoTitle}
            onChange={handleChange}
          />
        </div>
        <div className="title-div">
          <p>Description :</p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="title-div">
          <p>YouTube URL:</p>
          <input
            type="text"
            name="YouTube_Url"
            value={formData.YouTube_Url}
            onChange={handleChange}
          />
        </div>
        <div className="title-div">
          <p>Banner :</p>
          <input
            type="file"
            name="Banner"
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleSave}>Upload</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
      </div>
   
  </div>
  );
};


export default VideoMessage;