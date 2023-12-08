import React, { useState, useEffect } from "react";
import axios from "axios";


function Addsubfolderaudio() {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [uploadMessage, setUploadMessage] = useState(null);
  const [post, setPost] = useState({
    MainmostFolderName: "",
    SubFolderName: "",
    SubFolderBanner: "",
  });
  const [mainmostFolders, setMainmostFolders] = useState([]); // To store MainmostFolderName options

  useEffect(() => {
    // Fetch MainmostFolderName options when the component mounts
    fetchMainmostFolders();
  }, []);

  const fetchMainmostFolders = async () => {
    try {
      const response = await axios.get(`${apiUrl}/mainfolder/getall`);
      console.log("Response from server:", response.data);
      setMainmostFolders(response.data);
    } catch (error) {
      console.error("Error fetching MainmostFolderName options:", error);
    }
  };
  
  const handleInputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("MainmostFolderName", post.MainmostFolderName);
      formData.append("SubFolderName", post.SubFolderName);
      formData.append("SubFolderBanner", post.SubFolderBanner);

      console.log("Form Data:", Array.from(formData.entries()));

      const response = await axios.post(`${apiUrl}/subfolder/create`, formData);

      console.log("Response from server:", response.data);
      setUploadMessage("Subfolder uploaded successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
      }

      setUploadMessage("Error uploading Subfolder. Please try again.");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Audio Message Subfolder</h1>

        <form onSubmit={handleSubmit}>

        {/* <div className="artist-dev">
  <p>Main Folder Name :</p>
  <select
    name="MainmostFolderName"
    value={post.MainmostFolderName}
    onChange={handleInputChange}
  >
    <option value="">Select Main Folder Name</option>
    {Array.isArray(mainmostFolders) &&
      mainmostFolders.map((folder) => (
        <option key={folder.id} value={folder.MainmostFolderName}>
          {folder.MainmostFolderName}
          console.log({folder.MainmostFolderName});
        </option>
      ))}
  </select>
</div> */}

<div className="artist-dev">
<p>MainFolderName :</p>
             <input
               type="text"
               name="MainmostFolderName"
               value={post.MainmostFolderName}
               onChange={handleInputChange}
             />
          </div>

<div className="artist-dev">
<p>SubFolderName :</p>
             <input
               type="text"
               name="SubFolderName"
               value={post.SubFolderName}
               onChange={handleInputChange}
             />
          </div>

<div className="artist-dev">
             <p>SubFolderBanner:</p>
             <input type="file" name="SubFolderBanner" onChange={handleFileChange} />
           </div>

           <div className="Download">
          <button onClick={handleSubmit}>Upload</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
        </form>
      </div>
    </div>
  );
}

export default Addsubfolderaudio;


