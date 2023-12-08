import React, { useState, useEffect } from "react";

function GetAllAudioAlbums() {
  const [fetchedData, setFetchedData] = useState(null);
  const apiUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      // 'http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/getall'
     ` ${apiUrl}/banner/getall`
      )
      .then(response => response.json())
      .then(data => {
        console.log('Complete API Response:', data);
        setFetchedData(data);
        console.log('Fetched data:', data);
      })
      .catch(err => console.log(err));
  };

  const deleteBanner = (bannerId) => {
    fetch(
      // http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/delete/${bannerId}
     ` ${apiUrl}/banner/delete/${bannerId}`, 
      {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Delete Response:', data);
        // Refresh the data after deletion
        fetchData();
      })
      .catch(err => console.log(err));
  };

  const updateBanner = (bannerId, newData) => {
    fetch(
      // http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/updatestatus/${bannerId}
      `${apiUrl}/banner/updatestatus/${bannerId}`, 
     {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Update Response:', data);
        // Refresh the data after update
        fetchData();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h1>All Banners</h1>
      {fetchedData !== null && fetchedData !== undefined ? (
        <table border={'1'} frame={"void"} >
          <thead>
            <tr>
              <th>Album Banner</th>
              <th>Album Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map(article => (
              <tr key={article._id}>
                <td><img src={article.Banner_location} alt="Banner" width={'60px'} height={'60px'}/></td>
                <td>{article.status}</td>
                <td>
                  <button onClick={() => deleteBanner(article._id)}>Delete</button>
                  {/* <button onClick={() => updateBanner(article._id, new data)}>Update</button> */}
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

export default GetAllAudioAlbums;
