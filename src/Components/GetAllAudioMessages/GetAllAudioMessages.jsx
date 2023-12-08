import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"; // Import the Ant Design icons
import { Button } from "antd";

function GetAllAudioMessages() {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [fetchedData, setFetchedData] = useState(null);
  // const [fetchedData, setFetchedData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [editedSongId, setEditedSongId] = useState(null);
  const [editedMusictitle, setEditedMusictitle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `${apiUrl}/audiomessage/getall`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data.getallsongs);
        console.log("Fetched data:", data.getallsongs);
      })
      .catch((err) => console.log(err));
  };

  const deleteSong = async (songId) => {
    try {
      console.log("Deleting song with ID:", songId);
      const response = await fetch(
        // `http://ec2-13-233-129-161.ap-south-1.compute.amazonaws.com:8080/v1/audio/delete/${songId}`,
        `${apiUrl}/audiomessage/delete/${songId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // You may need to include additional headers if required by your API
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete song. Status: ${response.status}`);
      }

      // If the deletion is successful, update the state with the filtered songs
      setFetchedData((prevData) =>
        prevData.filter((song) => song._id !== songId)
      );
    } catch (error) {
      console.error("Error deleting song:", error);
      // Handle error, e.g., show a notification to the user
    }
  };

  const editSong = (songId) => {
    console.log(`Editing song with ID: ${songId}`);
    setEditedSongId(songId);
    // Fetch the current Musictitle and set it in the state
    const songToEdit = fetchedData.find((song) => song._id === songId);
    setEditedMusictitle(songToEdit.Musictitle);
  };

  const saveEdit = async () => {
    try {
      const response = await fetch(
        // `http://ec2-13-233-129-161.ap-south-1.compute.amazonaws.com:8080/v1/audio/updateAudio/${editedSongId}`,
        `${apiUrl}/audiomessage/updateAudio/${editedSongId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Musictitle: editedMusictitle }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to edit song. Status: ${response.status}`);
      }

      setFetchedData((prevData) =>
        prevData.map((song) =>
          song._id === editedSongId
            ? { ...song, Musictitle: editedMusictitle }
            : song
        )
      );
      setEditedSongId(null);
      setEditedMusictitle("");
    } catch (error) {
      console.error("Error editing song:", error);
    }
  };

  const handleGetAll = () => {
    setShowData(true);
  };

  const handleDelete = (songId) => {
    deleteSong(songId);
  };

  const handleEdit = (songId) => {
    editSong(songId);
  };

  const handleInputChange = (event) => {
    setEditedMusictitle(event.target.value);
  };

  return (
    <div>
      <h1>Fetched Audio Messages & Edit:</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ marginRight: "8px" }}>
          <input type="text" placeholder="Search Songs" />
        </label>
        <Button>Search</Button>
      </div>
      {fetchedData !== null ? (
        <table className="song-table">
          <thead>
            <tr>
              <th>Banner</th>
              <th>AudioMesssagetitle</th>
              <th>artist</th>
              <th>description</th>
              <th>MainmostFolderName</th>
              <th>SubFolderName</th>
              <th>Audio</th>
              {/* <th>Edit</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((song) => (
              <tr key={song._id} className="song-details">
                <td>
                  <div className="song-info">
                    <img
                      src={song.AudioMesssageBanner_location}
                      alt="Banner"
                      className="banner"
                    />
                  </div>
                </td>
                {/* <td>
                  {editedSongId === song._id ? (
                    <input
                      type="text"
                      value={editedMusictitle}
                      onChange={handleInputChange}
                    />
                  ) : (
                    song.Musictitle
                  )}
                </td> */}
                <td>{song.AudioMesssagetitle}</td>
                <td>{song.artist}</td>
                <td>{song.description}</td>
                <td>{song.MainmostFolderName}</td>
                <td>{song.SubFolderName}</td>
                <td>
                  <audio controls>
                    <source src={song.AudioMesssage_location} type="audio/mpeg" />
                  </audio>
                </td>
                {/* <td>
                  {editedSongId === song._id ? (
                    <button onClick={saveEdit}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(song._id)}>
                      <EditOutlined />
                    </button>
                  )}
                </td> */}
                <td>
                  <button
                    onClick={() => handleDelete(song._id)}
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

export default GetAllAudioMessages;

