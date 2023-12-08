import React, { useState } from "react";


const Banner = () => {
  const [uploadMessage, setUploadMessage] = useState(null);
  const apiUrl = process.env.REACT_APP_BASE_URL;
  // Define state to store form data
  const [formData, setFormData] = useState({
    file: null, // Add Banner property to store
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
  // Handle form submission
const handleSubmit = () => {
  console.log("Form Data:", formData);

  // Use FormData to handle files in the request
  const formDataForUpload = new FormData();
  formDataForUpload.append('file', formData.file);

  // Send a POST request to the server
  fetch(
    // "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/bannerupload",
   ` ${apiUrl}/banner/bannerupload`,
    {
      method: "POST",
      body: formDataForUpload,
    }
  )
    .then(response => {

      console.log("Response:", response);

      if (!response.ok) {
        setUploadMessage("Failed to upload Banner");
        throw new Error("Failed to upload Banner");
      }

      // Handle success
      console.log("Banner uploaded successfully");
      setUploadMessage("Banner uploaded successfully");
    })
    .catch(error => {
      // Handle errors
      console.error("Error uploading Banner:", error);
      setUploadMessage("Error uploading Banner");
    });
};

  return (
    <div className="container">
      <div>
        <h1>Banner</h1>
        <div className="url-dev">
          
          <input
            type="file"
            name="file"
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

export default Banner;