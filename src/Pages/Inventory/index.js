// // TicketForm.js
// import React, { useState } from 'react';

// const TicketForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     ticket_type: '',
//     count: ''
//   });

//   const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
//   const [formError, setFormError] = useState(null);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // Check if any form field is empty
//     if (Object.values(formData).some(value => value === '')) {
//       setFormError('Please fill in all fields before submitting.');
//       return;
//     }

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
//       setIsSubmitSuccess(true);
//       setFormError(null); // Clear any previous form errors
//     })
//     .catch(error => {
//       console.error("Error submitting form:", error); // Log the error for debugging
//       setFormError('Error submitting form. Please try again.'); // Set the form error message
//     });
//   };

//   return (
//     <div>
//       <div>
//         <center>
//           <form>
//             <input id="name" placeholder="Name" onChange={handleInputChange} value={formData.name} />
//             <br></br>
//             <input id="mobile" placeholder="Mobile" onChange={handleInputChange} value={formData.mobile} />
//             <br></br>
//             <input id="email" placeholder="Email" onChange={handleInputChange} value={formData.email} />
//             <br></br>
//             <input id="ticket_type" placeholder="Ticket Type" onChange={handleInputChange} value={formData.ticket_type} />
//             <br></br>
//             <input id="count" placeholder="Count" onChange={handleInputChange} value={formData.count} />
//             <br></br>
//             <button type="button" onClick={handleSubmit}>Submit</button>
//           </form>
//           {formError && <p style={{ color: 'red' }}>{formError}</p>}
//           {isSubmitSuccess && <p>Form submitted successfully!</p>}
//         </center>
//       </div>
//     </div>
//   );
// };

// export default TicketForm;

// // function Inventory() {
// //   const [loading, setLoading] = useState(false);
// //   const [dataSource, setDataSource] = useState([]);

// //   useEffect(() => {
// //     setLoading(true);
// //     getInventory().then((res) => {
// //       setDataSource(res.products);
// //       setLoading(false);
// //     });
// //   }, []);

// //   return (
// //     <Space size={20} direction="vertical">
// //       <Typography.Title level={4}>Payment Details</Typography.Title>
// //        <Table
// //         loading={loading}
// //         columns={[
// //           {
// //             title: "Thumbnail",
// //             dataIndex: "thumbnail",
// //             render: (link) => {
// //               return <Avatar src={link} />;
// //             },
// //           },
// //           {
// //             title: "Name Of The Event",
// //             dataIndex: "title",
// //           },
// //           {
// //             title: "Price",
// //             dataIndex: "price",
// //             render: (value) => <span>${value}</span>,
// //           },

// //         ]}
// //         dataSource={dataSource}
// //         pagination={{
// //           pageSize: 5,
// //         }}
// //       ></Table>
// //     </Space>
// //   );
// // }
// // export default Inventory;
