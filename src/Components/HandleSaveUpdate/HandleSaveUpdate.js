const HandleSaveUpdate = async () => {
  try {
    // Ensure selectedSongId is not null
    if (selectedSongId === null) {
      console.error("No song selected for update.");
      return;
    }

    // Update the record
    const response = await axios.put(
      `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/updateAudio/${selectedSongId}`,
      {
        AlbumName: formData.AlbumName,
        Banner_location: formData.Banner,
        artist: formData.Artist,
        Album: formData.Album,
        lyrics: formData.Lyrics,
        Audio_location: formData.Audio,
      }
    );

    if (response.data.success) {
      // Reset form data and selectedSongId
      setFormData({
        AlbumName: "",
        Banner: "",
        Artist: "",
        Album: "",
        Lyrics: "",
        Audio: "",
      });
      setSelectedSongId(null);

      // Fetch updated data
      fetchData();

      // Show the success alert
      setShowAlert(true);
    } else {
      console.error("Update request failed:", response.data.message);
    }
  } catch (error) {
    console.error("Error updating record:", error);
  }
};
export default HandleSaveUpdate;