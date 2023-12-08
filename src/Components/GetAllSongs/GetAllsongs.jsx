import React, { useState, useEffect } from "react";
import "./GetAllsongs.css";

function GetAllsongs() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/getall')
      .then(response => response.json())
      .then(data => {
        setFetchedData(data.getallsongs);
        console.log('Fetched data:', data.getallsongs);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Fetched Songs:</h1>
      {fetchedData !== null ? (
        <div>
          {fetchedData.map(song => (
            <div key={song._id} className="song-details">
              <h2>MusicTitle: {song.Musictitle}</h2>
              <p className="hello">Artist: {song.artist}</p>
              <p>Album: {song.AlbumName}</p>
              <p>Lyics: {song.lyrics}</p>
              <img src={song.Banner_location} alt="Banner" />
              <audio controls>
                <source src={song.Audio_location} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <a href={song.download_file} target="_blank" rel="noopener noreferrer">Download File</a>
              {/* You can display other song details similarly */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GetAllsongs;