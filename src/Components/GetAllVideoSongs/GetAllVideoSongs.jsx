import React, { useState, useEffect } from "react";

function GetAllVideoSongs() {
     const apiUrl = process.env.REACT_APP_BASE_URL;
  const [fetchedData, setFetchedData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${apiUrl}/video/getall`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Complete API Response:", data);
        setFetchedData(data);
        console.log("Fetched data:", data);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (video) => {
    // Implement the logic to update the video
    // You may use the selectedVideo state to get the selected video's ID
    // Make a PUT request to update the video data
    fetch(`${apiUrl}/video/update/${video._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        VideoTitle: video.VideoTitle,
        description: video.description,
        YouTube_Url: video.YouTube_Url,
        Banner: video.Banner,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Update successful:", data);
        fetchData(); // Refresh the data after updating
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = (video) => {
    // Implement the logic to delete the video
    // You may use the selectedVideo state to get the selected video's ID
    // Make a DELETE request to delete the video
    fetch(`${apiUrl}/video/delete/${video._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete successful:", data);
        fetchData(); // Refresh the data after deleting
        setSelectedVideo(null); // Clear the selected video after deletion
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="containers">
      <h1>Fetched Videos:</h1>
      {fetchedData !== null && fetchedData !== undefined ? (
        <table>
          <thead>
            <tr>
              <th>Video Title</th>
              <th>Description</th>
              <th>YouTube URL</th>
              <th>Banner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((video) => (
              <tr key={video._id}>
                <td>{video.VideoTitle}</td>
                <td>{video.description}</td>
                <td>{video.YouTube_Url}</td>
                <td>
                  <img className="video-banner" src={video.Banner_Location} alt="Banner" style={{ width: '50px', height: '50px' }} />

                </td>
                <td>
                  {/* <button onClick={() => handleUpdate(video)}>Update</button> */}
                  <button onClick={() => handleDelete(video)}>Delete</button>
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

export default GetAllVideoSongs;