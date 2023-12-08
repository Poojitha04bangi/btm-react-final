import React, { useState } from "react";
import "./UpdateAudioMessage.css";

const UpdateAudioMessage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleDownload = () => {
    // Add logic for download button if needed
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessage/audiomessageupload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save audio message");
      }

      // Add logic for successful save if needed
      console.log("Audio message saved successfully");
    } catch (error) {
      console.error("Error saving audio message:", error);
    }
  };

  const handleUpdateById = async () => {
    try {
      const response = await fetch(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessage/update/655ef200b47dbbd915045a3e",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update audio message");
      }

      // Add logic for successful update if needed
      console.log("Audio message updated successfully");
    } catch (error) {
      console.error("Error updating audio message:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Update AudioMessage</h1>
        <div className="title-div">
          <p>Title :</p>
          <input id="title" type="text" value={formData.title} onChange={handleChange} />
        </div>
        <div className="artist-dev">
          <p>Description :</p>
          <input id="description" type="text" value={formData.description} onChange={handleChange} />
        </div>
        <div className="artist-dev">
          <p>YouTube URL :</p>
          <input id="url" type="text" value={formData.url} onChange={handleChange} />
        </div>
        <div className="Download">
          <button onClick={handleDownload}>Download</button>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleUpdateById}>Update</button>
        </div>
      </div>
    </div>
  );
};


export default UpdateAudioMessage;