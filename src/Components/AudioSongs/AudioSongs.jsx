import React, { useState } from "react";
import axios from "axios";

function YourComponent() {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [uploadMessage, setUploadMessage] = useState(null);
  const [post, setPost] = useState({
    Musictitle: "",
    artist: "",
    AlbumName: "",
    Music: null,  // Use null for file inputs
    Banner: null, // Use null for file inputs
    lyrics: ""
  });

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
      formData.append("Musictitle", post.Musictitle);
      formData.append("artist", post.artist);
      formData.append("AlbumName", post.AlbumName);
      formData.append("Music", post.Music);
      formData.append("Banner", post.Banner);
      formData.append("lyrics", post.lyrics);

      console.log("Form Data:", Array.from(formData.entries()));

      const response = await axios.post(
        `${apiUrl}/audio/audioupload`,
        formData
      );

      console.log("Response from server:", response.data);
      setUploadMessage("Song uploaded successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
      }

      setUploadMessage("Error uploading song. Please try again.");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Audio Songs</h1>
        <form onSubmit={handleSubmit}>
          <div className="title-div">
            <p>Musictitle :</p>
            <input
              type="text"
              name="Musictitle"
              value={post.Musictitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="artist-dev">
            <p>Artist :</p>
            <input
              type="text"
              name="artist"
              value={post.artist}
              onChange={handleInputChange}
            />
          </div>
          <div className="artist-dev">
            <p>AlbumName :</p>
            <input
              type="text"
              name="AlbumName"
              value={post.AlbumName}
              onChange={handleInputChange}
            />
          </div>
          <div className="artist-dev">
            <p>Music :</p>
            <input type="file" name="Music" onChange={handleFileChange} />
          </div>
          <div className="artist-dev">
            <p>Banner:</p>
            <input type="file" name="Banner" onChange={handleFileChange} />
          </div>
          <div className="artist-dev">
            <p>Lyrics:</p>
          </div>
          <div className="lyrics-dev">
            <textarea
              id="lyrics"
              name="lyrics"
              value={post.lyrics}
              onChange={handleInputChange}
            ></textarea>
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

export default YourComponent;
