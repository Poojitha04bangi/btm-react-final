// import React, { useState } from "react";
// import "./Contact.css";

// const Contact = () => {
//   const apiUrl = process.env.REACT_APP_BASE_URL;
//   // Define state to store form data
//   const [uploadMessage, setUploadMessage] = useState(null);
//   const [formData, setFormData] = useState({
//     Name: "",
//     Mobile: "",
//     Message: "", // Add banner property to store the file
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
    
//     // Check if the input is a file input
//     const inputValue = type === 'file' ? files[0] : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: inputValue,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     console.log("Form Data:", formData);
  
//     try {
//       // Use FormData to handle files in the request
//       const formDataForUpload = new FormData();
//       formDataForUpload.append('Name', formData.Name);
//       formDataForUpload.append('Mobile', formData.Mobile);
//       formDataForUpload.append('Message', formData.Message);
     

//       // Send a POST request to the server
//       const response = await fetch(
//         `${apiUrl}/ContactUs/createmessage`,
//         {
//           method: "POST",
//           body: formDataForUpload,
//         }
//       );
  
//       console.log("Response:", response);
  
//       if (!response.ok) {
//         setUploadMessage("Failed to upload magazine");
//         throw new Error("Failed to upload article");
//       }
  
//       // Handle success, e.g., show a success message
//       console.log("Article uploaded successfully");
//       setUploadMessage("Article uploaded successfully");
//     } catch (error) {
//       // Handle errors, e.g., show an error message
//       console.error("Error uploading article:", error);
//       setUploadMessage("Error uploading magazine");
//     }
//   };
  

//   return (
//     <div className="container">
//       <div>
//         <h1>Contact Us</h1>
//         <div className="title-div">
//           <p>Name :</p>
//           <input
//             type="text"
//             name="Name"
//             value={formData.Name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="artist-dev">
//           <p>Mobile :</p>
//           <input
//             type="text"
//             name="Mobile"
//             value={formData.Mobile}
//             onChange={handleChange}
//           />
//         </div>
       
//         <div className="artist-dev">
//           <p>Message :</p>
//           <input
//             type="text"
//             name="Message"
//             value={formData.Message}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <button onClick={handleSubmit}>Upload</button>
//           {uploadMessage && <p>{uploadMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  // Define state to store form data
  const [uploadMessage, setUploadMessage] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    Mobile: "",
    Message: "", // Assuming this is a file upload field
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
      formDataForUpload.append('Name', formData.Name);
      formDataForUpload.append('Mobile', formData.Mobile);
      formDataForUpload.append('Message', formData.Message);

      // Send a POST request to the server
      const response = await fetch(
        `${apiUrl}/ContactUs/createmessage`,
        {
          method: "POST",
          body: formDataForUpload,
        }
      );
  
      console.log("Response:", response);
  
      if (!response.ok) {
        setUploadMessage("Failed to upload message");
        throw new Error("Failed to upload message");
      }
  
      // Handle success, e.g., show a success message
      console.log("Message uploaded successfully");
      setUploadMessage("Message uploaded successfully");
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error uploading message:", error);
      setUploadMessage("Error uploading message");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Contact Us</h1>
        <div className="title-div">
          <p>Name :</p>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="artist-dev">
          <p>Mobile :</p>
          <input
            type="text"
            name="Mobile"
            value={formData.Mobile}
            onChange={handleChange}
          />
        </div>
       
        <div className="artist-dev">
          <p>Message :</p>
          <input
            type="text" 
            name="Message"
            onChange={handleChange}
          />
        </div>

        <div>
          <button onClick={handleSubmit}>Upload</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
