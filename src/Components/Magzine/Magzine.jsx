// import React, { useState } from "react";
// import "./Magzine.css";

// const Magzine = () => {
//   // Define state to store form data
//   const [uploadMessage, setUploadMessage] = useState(null);

//   const [formData, setFormData] = useState({
//     MagazineTitle: "",
//     description: "",
//     pdf: null,
//     Bannerpdf: null,
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     // Check if the input is a file input
//     const inputValue = type === "file" ? files[0] : value;

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
//       formDataForUpload.append("MagazineTitle", formData.MagazineTitle);
//       formDataForUpload.append("description", formData.description);
//       formDataForUpload.append("pdf", formData.pdf);
//       formDataForUpload.append("Bannerpdf", formData.Bannerpdf);

//       // Send a POST request to the server
//       const response = await fetch(
//         "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/magazineupload",
//         {
//           method: "POST",
//           body: formDataForUpload,
//         }
//       );

//       console.log("Response:", response);

//       if (!response.ok) {
//         setUploadMessage("Failed to upload magazine");
//         throw new Error("Failed to upload magazine");
//       }

//       // Handle success
//       console.log("Magazine uploaded successfully");
//       setUploadMessage("Magazine uploaded successfully");
//     } catch (error) {
//       // Handle errors
//       console.error("Error uploading magazine:", error);
//       setUploadMessage("Error uploading magazine");
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <h1>Magazine</h1>
//         <div className="title-div">
//           <p>Title :</p>
//           <input
//             type="text"
//             name="MagazineTitle"
//             value={formData.MagazineTitle}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="artist-dev">
//           <p>Description :</p>
//           <input
//             type="text"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="url-dev">
//           <p>Pdf :</p>
//           <input
//             type="file"
//             name="pdf"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="url-dev">
//           <p>Banner Pdf :</p>
//           <input
//             type="file"
//             name="Bannerpdf"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="Download">
//           <button onClick={handleSubmit}>Upload Magazine</button>
//           {uploadMessage && <p>{uploadMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Magzine;

import React, { useState } from "react";
import "./Magzine.css";

const Magzine = () => {
  // Define state to store form data
  const [uploadMessage, setUploadMessage] = useState(null);
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    MagazineTitle: "",
    description: "",
    pdf: null,
    Bannerpdf: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Check if the input is a file input
    const inputValue = type === "file" ? files[0] : value;

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
      formDataForUpload.append("MagazineTitle", formData.MagazineTitle);
      formDataForUpload.append("description", formData.description);
      formDataForUpload.append("pdf", formData.pdf);
      formDataForUpload.append("Bannerpdf", formData.Bannerpdf);

      // Send a POST request to the server
      const response = await fetch(
        // "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/magazineupload",
        `${apiUrl}/magazine/magazineupload`,
        {
          method: "POST",
          body: formDataForUpload,
        }
      );

      console.log("Response:", response);

      if (!response.ok) {
        setUploadMessage("Failed to upload magazine");
        throw new Error("Failed to upload magazine");
      }

      // Handle success
      console.log("Magazine uploaded successfully");
      setUploadMessage("Magazine uploaded successfully");
    } catch (error) {
      // Handle errors
      console.error("Error uploading magazine:", error);
      setUploadMessage("Error uploading magazine");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Magazine</h1>
        <div className="title-div">
          <p>Title :</p>
          <input
            type="text"
            name="MagazineTitle"
            value={formData.MagazineTitle}
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
          <p>Pdf :</p>
          <input
            type="file"
            name="pdf"
            onChange={handleChange}
          />
        </div>
        <div className="url-dev">
          <p>Banner  :</p>
          <input
            type="file"
            name="Bannerpdf"
            onChange={handleChange}
          />
        </div>
        <div className="Download">
          <button onClick={handleSubmit}>Upload Magazine</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Magzine;