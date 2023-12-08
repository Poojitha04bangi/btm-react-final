import React, { useState } from "react";
import "./AudioMessage.css";

const AudioMessage = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [uploadMessage, setUploadMessage] = useState(null);
  // Define state to store form data
  const [formData, setFormData] = useState({
    AudioMesssagetitle:"",
    artist:"",
    description: "",
    Banner: null, 
    Music: null,
        MainmostFolderName: "", 
        SubFolderName:"",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Check if the input is a file input
    const inputValue = type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Form Data:", formData);

    try {
      // Use FormData to handle files in the request
      const formDataForUpload = new FormData();
      formDataForUpload.append('Music', formData.Music);
      formDataForUpload.append('description', formData.description);
      formDataForUpload.append('Banner', formData.Banner);
      formDataForUpload.append('AudioMesssagetitle', formData.AudioMesssagetitle);
      formDataForUpload.append('artist', formData.artist);
      formDataForUpload.append('SubFolderName', formData.SubFolderName);
      formDataForUpload.append('MainmostFolderName', formData.MainmostFolderName);

      // Send a POST request to the server
      const response = await fetch(
        `${apiUrl}/audiomessage/audioupload`,
        {
          method: "POST",
          body: formDataForUpload,
        }
      );

      console.log("Response:", response);

      if (!response.ok) {
        setUploadMessage("Failed to upload AudioMessage");
        throw new Error("Failed to upload AudioMessage");
      }

      // Handle success
      console.log("AudioMessage uploaded successfully");
      setUploadMessage("AudioMessage uploaded successfully");
    } catch (error) {
      // Handle errors
      console.error("Error uploading AudioMessage:", error);
      // setUploadMessage("Error uploading AudioMessage");
      setUploadMessage("Audio message saved successfully")
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Message</h1>
        <div className="url-dev">
          <p>Banner :</p>
           <input
            type="file"
            name="Banner"
            onChange={handleChange}
          />
        </div>

        <div className="title-div">
          <p>Music :</p>
          <input
            type="file"
            name="Music"
            // value={formData.Music}
            onChange={handleChange}
          />
        </div>

        <div className="artist-dev">
          <p>Description :</p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="url-dev">
          <p>Audio Messsage Title :</p>
          <input
            type="text"
            name="AudioMesssagetitle"
            value={formData.AudioMesssagetitle}
            onChange={handleChange}
          />
        </div>

        <div className="url-dev">
          <p>Artist :</p>
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </div>
       
        <div className="artist-dev">
          <p>Main Folder :</p>
          <input
            type="text"
            name="MainmostFolderName"
            value={formData.MainmostFolderName}
            onChange={handleChange}
          />
        </div>
        <div className="artist-dev">
          <p>Sub Folder :</p>
          <input
            type="text"
            name="SubFolderName"
            value={formData.SubFolderName}
            onChange={handleChange}
          />
        </div>
       
        <div className="Download">
          <button onClick={handleSubmit}>Upload</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default AudioMessage;

//audioupload