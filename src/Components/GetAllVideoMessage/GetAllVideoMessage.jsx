// import React, { useState, useEffect } from "react";
// import { Table, Button, Space } from "antd";
// import axios from "axios";

// const GetAllVideoMessage = () => {
//   const [data, setData] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/video/getall"
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(
//         `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/update/${selectedItem._id}`,
//         { /* Updated data */ }
//       );
//       console.log("Update successful:", response.data);
//       fetchData();
//     } catch (error) {
//       console.error("Error updating data:", error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(
//         `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/delete/${selectedItem._id}`
//       );
//       console.log("Delete successful:", response.data);
//       fetchData();
//       setSelectedItem(null);
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//   };

//   const columns = [
//     {
//       title: "Message Title",
//       dataIndex: "MessageTitle",
//       key: "MessageTitle",
//     },
//     {
//       title: "Description",
//       dataIndex: "description",
//       key: "description",
//     },
//     {
//       title: "YouTube URL",
//       dataIndex: "YouTube_Url",
//       key: "YouTube_Url",
//     },
//     {
//       title: "Banner",
//       dataIndex: "Banner_Location",
//       key: "Banner_Location",
//       render: (text) => <img src={text} alt="Banner" style={{ width: "50px" }} />,
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <Space>
//           <Button onClick={() => setSelectedItem(record)}>Update</Button>
//           <Button onClick={() => handleDelete(record)}>Delete</Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <h1>Video Messages</h1>
//       <Table dataSource={data} columns={columns} rowKey="_id" />

//       {selectedItem && (
//         <div>
//           <h2>Selected Item</h2>
//           <p>Title: {selectedItem.MessageTitle}</p>
//           <p>Description: {selectedItem.description}</p>
//           <p>YouTube URL: {selectedItem.YouTube_Url}</p>
//           <img src={selectedItem.Banner_Location} alt="Banner" />

//           <Button onClick={handleUpdate}>Update</Button>
//           <Button onClick={handleDelete}>Delete</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetAllVideoMessage;
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import axios from "axios";

function GetAllVideoMessages() {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/videomessage/getall`);
      setFetchedData(response.data.videos);
      console.log("API Response:", response.data.videos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      console.log("Deleting video with ID:", videoId);
      const response = await axios.delete(
        `${apiUrl}/videomessage/delete/${videoId}`
      );

      if (!response.data.success) {
        throw new Error(`Failed to delete video. Status: ${response.status}`);
      }

      setFetchedData((prevData) =>
        prevData.filter((video) => video._id !== videoId)
      );
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div>
      <h1>Fetched Video Messages:</h1>
      {fetchedData.length > 0 ? (
        <table className="video-table">
          <thead>
            <tr>
              {/* <th>Banner</th> */}
              <th>Message Title</th>
              <th>Mainmost Folder Name</th>
              <th>Sub Folder Name</th>
              <th>Description</th>
              <th>YouTube Url</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((video) => (
              <tr key={video._id} className="video-details">
                {/* <td>
                  <div className="video-info">
                    <img
                      src={video.Banner}
                      alt="Banner"
                      className="banner"
                    />
                  </div>
                </td> */}
                <td>{video.Videotitle}</td>
                <td>{video.MainmostFolderName}</td>
                <td>{video.SubFolderName}</td>
                <td>{video.description}</td>
                <td>{video.YoutubeUrl}</td>
                <td>
                  <button
                    onClick={() => deleteVideo(video._id)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GetAllVideoMessages;
