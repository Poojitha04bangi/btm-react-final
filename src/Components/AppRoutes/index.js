import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AudioMessage from '../AudioMessage/AudioMessage';
import AudioSongs from '../AudioSongs/AudioSongs';
import VideoMessage from '../VideoMessage/VideoMessage';
import VideoSongs from '../VideoSongs/VideoSongs';
import Magzine from '../Magzine/Magzine';
import UpdateAudioMessage from '../UpdateAudioMessage/UpdateAudioMessage';
import GetAllAudioSongs from '../GetAllAudioSongs/GetAllAudioSongs';

import Articals from '../Articals/Articals';
import GetAllArticles from '../GetAllArticles/GetAllArticles';
import GetAllMagazines from '../GetAllMagazines/GetAllMagazines';
import GetAllAudioMessages from '../GetAllAudioMessages/GetAllAudioMessages';
import GetAllVideoMessage from '../GetAllVideoMessage/GetAllVideoMessage';
import AlbumComponent from '../AudioSongsAlbumNames/AlbumNames';
import FolderManager from '../Mainfolderaudiomessage/Mainfolderaudiomessage';
import AddAlbumName from '../AddAudioSongAlbum/AddAlbumName';
import Addsubfolderaudio from '../Subfolderaudiomessage/Subfolderaudiomessage';
import Videomessagemainfolder from '../Videomessagemainfolder/Videomessagemainfolder';
import Videomessagesubfolder from '../Videomessagesubfolder/Videomessagesubfolder';
import GetAllBanners from '../GetAllBanners/GetAllBanners';
import Contact from '../Contact/Contact';
import Banner from '../Banner/Banner';
import Shorts from '../Shorts/Shorts';
import GetAllVideoSongs from '../GetAllVideoSongs/GetAllVideoSongs';
import GetAllShorts from '../GetAllShorts/GetAllShorts';
import GetAllAudioAlbums from '../AudioSongsAlbumNames/AlbumNames'
import GetAllAudioMessagesMainFolder from '../GetAllAudioMessagesMainFolder/GetAllAudioMessagesMainFolder';
import GetAllAudioMessagesSubFolder from '../GetAllAudioMessagesSubFolder/GetAllAudioMessagesSubFolder';
import GetAllVideoMessagesMainFolder from '../GetAllVideoMessagesMainFolder/GetAllVideoMessagesMainFolder';
import GetAllVideoMessagesSubFolder from '../GetAllVideoMessagesSubFolder/GetAllVideoMessagesSubFolder';

function AppRoutes() {

  return (
   
      <Routes>
        <Route path="/Media/AddAlbumName" element={<AddAlbumName />} />
         <Route path="/Media/AudioSongs" element={<AudioSongs />} />

        <Route path="/Media/FolderManager" element={<FolderManager />} />
        <Route path="/Media/Addsubfolderaudio" element={<Addsubfolderaudio />} />
         <Route path="/Media/AudioMessage" element={<AudioMessage />} />

        <Route path="/Media/VideoSongs" element={<VideoSongs />} />

         <Route path="/Media/Videomessagemainfolder" element={<Videomessagemainfolder />} />
         <Route path="/Media/Videomessagesubfolder" element={<Videomessagesubfolder />} />
        <Route path="/Media/VideoMessage" element={<VideoMessage />} />
         
        {/* <Route path="/Media/AlbumComponent" element={<AlbumComponent />} /> */}
        
        
        <Route path="/library/Articals" element={<Articals/>} />
        <Route path="/library/Magzine" element={<Magzine />} />
        <Route path="/library/Banner" element={<Banner />} />
        <Route path="/library/Shorts" element={<Shorts />} />
        <Route path="/library/Contact" element={<Contact />} />

        
        <Route path="/managable/GetAllAudioAlbums" element={<GetAllAudioAlbums />} />
        <Route path="/Managable/GetAllAudioSongs" element={<GetAllAudioSongs />} />

        <Route path="/Managable/GetAllAudioMessagesMainFolder" element={<GetAllAudioMessagesMainFolder />} />
        <Route path="/Managable/GetAllAudioMessagesSubFolder" element={<GetAllAudioMessagesSubFolder />} />
        <Route path="/Managable/GetAllAudioMessages" element={<GetAllAudioMessages />} />

        <Route path="/Managable/GetAllVideoSongs" element={<GetAllVideoSongs />} />

        <Route path="/Managable/GetAllVideoMessagesMainFolder" element={<GetAllVideoMessagesMainFolder />} />
        <Route path="/Managable/GetAllVideoMessagesSubFolder" element={<GetAllVideoMessagesSubFolder />} />
        <Route path="/Managable/GetAllVideoMessage" element={<GetAllVideoMessage />} />

        <Route path="/Managable/GetAllArticles" element={<GetAllArticles />} />
        <Route path="/Managable/GetAllMagazines" element={<GetAllMagazines />} />
        <Route path="/Managable/GetAllBanners" element={<GetAllBanners />} />
        <Route path="/Managable/GetAllShorts" element={<GetAllShorts />} />
      </Routes>
    
  );
}

export default AppRoutes;

