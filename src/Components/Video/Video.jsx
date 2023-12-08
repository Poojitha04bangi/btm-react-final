'useState'
import React, { useState } from "react";
import "./Video.css";

const   Videos = () => {
  return (
    
    <div className="container">
      <div>
      <h1>Video</h1>
        <div className="title-div">
          <p>Title :</p>
          <input type="text" />
        </div>
        <div className="artist-dev">
          <p>Discription:</p>
          <input type="text" />
        </div>
        <div className="artist-dev">
          <p>Youtube Links :</p>
          <input type="text" />
        </div>
        {/* <div className="url-dev">
          <p>Song :</p>
          <input type="file" />
        </div>
        <div className="url-dev">
          <p>Banner :</p>
          <input type="file" />
        </div>
        <div className="lyrics-dev">
          <label htmlFor="lyrics">Lyrics:</label>
          <textarea
            id="lyrics"
            // value={lyrics}
            // onChange={handleLyricsChange}
          ></textarea>
        </div> */}
      </div>
    </div>
  );
};

export default Videos;
