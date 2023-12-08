import React, { useState } from "react";
import "./Articals.css";

const Articals = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  // Define state to store form data
  const [uploadMessage, setUploadMessage] = useState(null);
  const [formData, setFormData] = useState({
    ArticleTitle: "",
    content: "",
    Banner: null, // Add banner property to store the file
    pdfFile:null,
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
      formDataForUpload.append('ArticleTitle', formData.ArticleTitle);
      formDataForUpload.append('content', formData.content);
      formDataForUpload.append('pdfFile', formData.pdfFile);
      formDataForUpload.append('Banner', formData.Banner); // Append the banner file

      // Send a POST request to the server
      const response = await fetch(
        
        `${apiUrl}/article/uploadarticles`,
        {
          method: "POST",
          body: formDataForUpload,
        }
      );
  
      console.log("Response:", response);
  
      if (!response.ok) {
        setUploadMessage("Failed to upload article");
        throw new Error("Failed to upload article");
      }
  
      // Handle success, e.g., show a success message
      console.log("Article uploaded successfully");
      setUploadMessage("Article uploaded successfully");
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error uploading article:", error);
      setUploadMessage("Error uploading article");
    }
  };
  

  return (
    <div className="container">
      <div>
        <h1>Articles</h1>
        <div className="title-div">
          <p>Title :</p>
          <input
            type="text"
            name="ArticleTitle"
            value={formData.ArticleTitle}
            onChange={handleChange}
          />
        </div>
        <div className="artist-dev">
          <p>Content :</p>
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
       
        <div className="artist-dev">
          <p>Banner :</p>
          <input
            type="file"
            name="Banner"
            // value={formData.BannerKey}
            onChange={handleChange}
          />
        </div>

        <div className="artist-dev">
          <p>PDF :</p>
          <input
            type="file"
            name="pdfFile"
            // value={formData.BannerKey}
            onChange={handleChange}
          />
        </div>

        <div>
          <button onClick={handleSubmit}>Upload Article</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Articals;