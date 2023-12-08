import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

function GetAllShorts() {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [fetchedData, setFetchedData] = useState(null);
  const [editedShortId, setEditedShortId] = useState(null);
  const [editedShortTitle, setEditedShortTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedYouTubeUrl, setEditedYouTubeUrl] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${apiUrl}/shorts/getall`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Log the entire response

        if (data && Array.isArray(data)) {
          setFetchedData(data);
        } else {
          console.error("Invalid data structure:", data);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteShort = async (Id) => {
    try {
      console.log("Deleting short with ID:", Id);
      const response = await fetch(`${apiUrl}/shorts/delete/${Id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete short. Status: ${response.status}`);
      }

      setFetchedData((prevData) =>
        prevData.filter((short) => short._id !== Id)
      );
    } catch (error) {
      console.error("Error deleting short:", error);
    }
  };

  const editShort = (Id) => {
    console.log(`Editing short with ID: ${Id}`);
    setEditedShortId(Id);
    const shortToEdit = fetchedData.find((short) => short._id === Id);
    setEditedShortTitle(shortToEdit.ShortTitle);
    setEditedDescription(shortToEdit.description);
    setEditedYouTubeUrl(shortToEdit.YouTube_Url);
  };

  const saveEdit = async () => {
    try {
      const response = await fetch(`${apiUrl}/shorts/update/${editedShortId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ShortTitle: editedShortTitle,
          description: editedDescription,
          YouTube_Url: editedYouTubeUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to edit short. Status: ${response.status}`);
      }

      setFetchedData((prevData) =>
        prevData.map((short) =>
          short._id === editedShortId
            ? {
                ...short,
                ShortTitle: editedShortTitle,
                description: editedDescription,
                YouTube_Url: editedYouTubeUrl,
              }
            : short
        )
      );
      setEditedShortId(null);
      setEditedShortTitle("");
      setEditedDescription("");
      setEditedYouTubeUrl("");
    } catch (error) {
      console.error("Error editing short:", error);
    }
  };

  const handleDelete = (Id) => {
    deleteShort(Id);
  };

  const handleEdit = (Id) => {
    editShort(Id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "ShortTitle") {
      setEditedShortTitle(value);
    } else if (name === "description") {
      setEditedDescription(value);
    } else if (name === "YouTube_Url") {
      setEditedYouTubeUrl(value);
    }
  };

  return (
    <div>
      <h1>Fetched Shorts & Edit:</h1>
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ marginRight: "8px" }}>
          <input
            type="text"
            placeholder="Search Shorts"
            name="search"
            // Add an onChange handler for the search input if needed
          />
        </label>
        <Button>Search</Button>
      </div> */}
      {Array.isArray(fetchedData) && fetchedData.length > 0 ? (
        <table className="short-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>YouTube URL</th>
              {/* <th>Edit</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((short) => (
              <tr key={short._id} className="short-details">
                <td>
                  {editedShortId === short._id ? (
                    <input
                      type="text"
                      name="ShortTitle"
                      value={editedShortTitle}
                      onChange={handleInputChange}
                    />
                  ) : (
                    short.ShortTitle
                  )}
                </td>
                <td>
                  {editedShortId === short._id ? (
                    <textarea
                      name="description"
                      value={editedDescription}
                      onChange={handleInputChange}
                    />
                  ) : (
                    short.description
                  )}
                </td>
                <td>
                  {editedShortId === short._id ? (
                    <input
                      type="text"
                      name="YouTube_Url"
                      value={editedYouTubeUrl}
                      onChange={handleInputChange}
                    />
                  ) : (
                    short.YouTube_Url
                  )}
                </td>
                {/* <td>
                  {editedShortId === short._id ? (
                    <button onClick={saveEdit}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(short._id)}>
                      <EditOutlined />
                    </button>
                  )}
                </td> */}
                <td>
                  <button
                    onClick={() => handleDelete(short._id)}
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
        <p>No shorts available.</p>
      )}
    </div>
  );
}

export default GetAllShorts;