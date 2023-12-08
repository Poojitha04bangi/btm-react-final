// import React, { useState } from 'react';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     ticket_type: '',
//     count: ''
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [id]: value
//     }));
//   };

//   const handleSubmit = () => {
//     fetch("http://192.168.29.120:8080/v1/ticket/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data); // Log the response for debugging
//     })
//     .catch(error => {
//       console.error("Fetch error:", error);
//     });
//   };

//   return (
//     <div>
//       <div>
//         <center>
//           <form>
//             <input
//               id="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <br></br>
//             <input
//               id="mobile"
//               placeholder="Mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//             <br></br>
//             <input
//               id="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <br></br>
//             <input
//               id="ticket_type"
//               placeholder="Ticket Type"
//               value={formData.ticket_type}
//               onChange={handleChange}
//             />
//             <br></br>
//             <input
//               id="count"
//               placeholder="Count"
//               value={formData.count}
//               onChange={handleChange}
//             />
//             <br></br>
//             <button type="button" onClick={handleSubmit}>Submit</button>
//           </form>
//         </center>
//       </div>
//     </div>
//   );
// };

// export default MyForm;
