import React, { useState, useEffect } from "react";
import "./GetAllArticles.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";


function GetAllArticles() {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [fetchedData, setFetchedData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [editedSongId, setEditedSongId] = useState(null);
  const [editedMusictitle, setEditedMusictitle] = useState("");

  useEffect(() => {
    fetch(
      // "http://ec2-13-233-129-161.ap-south-1.compute.amazonaws.com:8080/v1/article/getall"
      `${apiUrl}/article/getall`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setFetchedData(data);
          console.log("Fetched data:", data);
        } else {
          throw new Error("Data structure not as expected");
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const deleteSong = async (songId) => {
    try {
      console.log("Deleting song with ID:", songId);
      const response = await fetch(
        `http://ec2-13-233-129-161.ap-south-1.compute.amazonaws.com:8080/v1/article/delete/${songId}`,
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


  const handleGetAll = () => {
    setShowData(true);
  };

  const handleDelete = (songId) => {
    deleteSong(songId);
  };


  const handleInputChange = (event) => {
    setEditedMusictitle(event.target.value);
  };

  return (
    <div>
      <h1>Articals:</h1>
      {fetchedData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Banner</th>
              <th>Title</th>
              <th>Content</th>
              <th>PDF</th>
              {/* <th>Edit</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((song) => (
              <tr key={song._id} className="song-details">
                <td>
                  <img
                    src={song.Banner_location}
                    alt="Banner"
                    className="img"
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
              <td>
                {song.ArticleTitle}
              </td>
              <td>
                {song.content}
              </td>
              <td>
              <a href={song.pdfLocation}>{song.pdfLocation}</a>
              </td>
              {/* <td>
                <button>
                <EditOutlined/>
                </button>
              </td> */}
                <td>
                  <Button
                  onClick={() => handleDelete(song._id)}
                  style={{ backgroundColor: "red", color: "white" }}>
                  <DeleteOutlined/>
                  </Button>
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

export default GetAllArticles;

