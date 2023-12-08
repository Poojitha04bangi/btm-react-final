import React, { useState } from "react";

const apiUrl = process.env.REACT_APP_BASE_URL;
const Shorts = () => {
  // Define state to store form data
  const [uploadMessage, setUploadMessage] = useState(null);

  const [formData, setFormData] = useState({
    ShortTitle: "",
    description: "",
    YouTube_Url: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Fix: use 'value' instead of 'inputValue'
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log("Form Data:", formData);

    try {
      // Use FormData to handle files in the request
      const formDataForUpload = new FormData();
      formDataForUpload.append("ShortTitle", formData.ShortTitle);
      formDataForUpload.append("description", formData.description);
      formDataForUpload.append("YouTube_Url", formData.YouTube_Url);

      // Send a POST request to the server
      const response = await fetch(
        `${apiUrl}/shorts/upload`,
        {
          method: "POST",
          body: formDataForUpload,
        }
      );

      console.log("Response:", response);

      if (!response.ok) {
        setUploadMessage("Failed to upload short");
        throw new Error("Failed to upload short");
      }

      // Handle success
      console.log("Short uploaded successfully");
      setUploadMessage("Short uploaded successfully");
    } catch (error) {
      // Handle errors
      console.error("Error uploading short:", error);
      setUploadMessage("Error uploading short");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Shorts</h1>
        <form onSubmit={handleSubmit}>
          <div className="title-div">
            <p>ShortTitle :</p>
            <input
              type="text"
              name="ShortTitle"
              value={formData.ShortTitle}
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
            <p>YouTube_Url :</p>
            <input
              type="text"
              name="YouTube_Url"
              onChange={handleChange}
            />
          </div>
          <div className="Download">
            <button type="submit">Upload Short</button>
            {uploadMessage && <p>{uploadMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shorts;