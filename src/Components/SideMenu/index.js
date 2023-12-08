import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  const routes = [
   
  ];

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
      >
        {routes.map((route) => (
          <Menu.SubMenu key={route.key} icon={route.icon} title={route.label}>
            {route.children &&
              route.children.map((childRoute) => (
                <Menu.Item key={childRoute.path}>{childRoute.label}</Menu.Item>
              ))}
          </Menu.SubMenu>
        ))}
        {/* Additional Dropdowns */}
        <Menu.SubMenu key="/Media" icon={<AppstoreOutlined />} title="Media">
          
        <Menu.Item key="/Media/AddAlbumName">Create Audio Album Names</Menu.Item>
        <Menu.Item key="/Media/AudioSongs">Audio Songs</Menu.Item>

          <Menu.Item key="/Media/FolderManager">Audio Messages Mainfolder</Menu.Item>
          <Menu.Item key="/Media/Addsubfolderaudio">Audio Messages subfolder</Menu.Item>
          <Menu.Item key="/Media/AudioMessage">Audio Messages</Menu.Item>

          <Menu.Item key="/Media/VideoSongs">Video Songs</Menu.Item>

          <Menu.Item key="/Media/Videomessagemainfolder">VideoMessageMainfolder</Menu.Item>
          <Menu.Item key="/Media/Videomessagesubfolder">VideoMessageSubfolder</Menu.Item>
          <Menu.Item key="/Media/VideoMessage">Video Messages</Menu.Item>
          
        </Menu.SubMenu>

        <Menu.SubMenu key="/library" icon={<AppstoreOutlined />} title="Library">

          <Menu.Item key="/library/Articals">Articles</Menu.Item>
          <Menu.Item key="/library/Magzine">Magazines</Menu.Item>
          <Menu.Item key="/library/Banner">Banners</Menu.Item>
          <Menu.Item key="/library/Shorts">Shorts</Menu.Item>
          <Menu.Item key="/library/Contact">Contact</Menu.Item>
          
        </Menu.SubMenu>
        <Menu.SubMenu key="/managable" icon={<AppstoreOutlined />} title="Managable">
        <Menu.Item key="/managable/GetAllAudioAlbums">Get All Audio Albums</Menu.Item>
          <Menu.Item key="/managable/GetAllAudioSongs">Get All Audio Songs</Menu.Item>

          <Menu.Item key="/managable/GetAllAudioMessagesMainFolder">Audio Messages Main Folder</Menu.Item>
          <Menu.Item key="/managable/GetAllAudioMessagesSubFolder">Audio Messages Sub Folder</Menu.Item>
          <Menu.Item key="/managable/GetAllAudioMessages">Get All Audio Messages</Menu.Item>

          <Menu.Item key="/managable/GetAllVideoSongs">Get All Video Songs</Menu.Item>

          <Menu.Item key="/managable/GetAllVideoMessagesMainFolder">Video Messages Main Folder</Menu.Item>
          <Menu.Item key="/managable/GetAllVideoMessagesSubFolder">Video Messages Sub Folder</Menu.Item>
          <Menu.Item key="/managable/GetAllVideoMessage">Get All VideoMessages</Menu.Item>

          <Menu.Item key="/managable/GetAllArticles">Get All Articles</Menu.Item>
          <Menu.Item key="/managable/GetAllMagazines">Get All Magzines</Menu.Item>
          <Menu.Item key="/managable/GetAllBanners">Get All Banners</Menu.Item>
          <Menu.Item key="/managable/GetAllShorts">Get All Shorts</Menu.Item>

        </Menu.SubMenu>
      </Menu>
    </div>
  );
}

export default SideMenu;








