import { useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";
import DarkMode from "../darkMode/DarkMode";
// import { FiSun } from "react-icons/fi";
// import { MdOutlineDarkMode } from "react-icons/md";

/*
// TODO create a loop to render all that:

// navBar titles
const navBarData = [
  {"Home","/"}
  {"Topups","/pageTwo"}
  "Transfer",
  "Deposits",
  "Send Money",
  "Settings",
  "NFT",
  "Admin Tools",
  "Logout",
];

function renderNavBarList(navigate) {
  // const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");

  const linkClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return;
}

*/

export function NavBar() {
  const navigate = useNavigate();
  const [iconClicked, setIconClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const [showNFTMenu, setShowNFTMenu] = useState(false);
  const [adminToolsMenu, setShowAdminToolsMenu] = useState(false);

  const classNameFunc = (str) => {
    return `link ${activeLink === str ? "active" : ""}`;
  };

  const linkClick = (path) => {
    setShowNFTMenu(false);
    setShowAdminToolsMenu(false);
    setActiveLink(path);
    navigate(path);
  };

  const iconClick = () => {
    setIconClicked(!iconClicked);
  };

  const NFTClick = () => {
    setShowAdminToolsMenu(false);
    setShowNFTMenu(!showNFTMenu);
  };

  const adminToolsClick = () => {
    setShowNFTMenu(false);
    setShowAdminToolsMenu(!adminToolsMenu);
  };

  const actionClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <div className="navBar-container">
      <ul className={iconClicked ? "mobileOn" : ""}>
        <li>
          {" "}
          <div className={classNameFunc("/")} onClick={() => linkClick("/")}>
            Home
          </div>
        </li>
        <li>
          {" "}
          <div
            className={classNameFunc("/pageTwo")}
            onClick={() => linkClick("/pageTwo")}
          >
            Topups
          </div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Transfer</div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Deposits</div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Send Money</div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Settings</div>
        </li>
        <li>
          {" "}
          <div className="link" onClick={() => NFTClick()}>
            NFT
            <div className="fa fa-caret-down" />
          </div>
          <div className={showNFTMenu ? "menu-open" : "menu-close"}>
            <div
              className={classNameFunc("/actionPage")}
              onClick={() => actionClick("/actionPage")}
            >
              action
            </div>
            <div
              className={classNameFunc("/anotherActionPage")}
              onClick={() => actionClick("/anotherActionPage")}
            >
              another action
            </div>
          </div>
        </li>
        <li>
          {" "}
          <div className={"link"} onClick={() => adminToolsClick()}>
            Admin Tools
            <div className="fa fa-caret-down" />
          </div>
          <div className={adminToolsMenu ? "menu-open" : "menu-close"}>
            <div
              className={classNameFunc("/actionPage")}
              onClick={() => actionClick("/actionPage")}
            >
              action
            </div>
            <div
              className={classNameFunc("/anotherActionPage")}
              onClick={() => actionClick("/anotherActionPage")}
            >
              another action
            </div>
          </div>
        </li>

        <div className="dark-mode">
          {" "}
          <DarkMode />{" "}
        </div>
        {/*<div className={darkModeOn ? "darkModeOn" : ""} onClick={darkModeClick}>
          {darkLightMode()}
          { <FiSun />
          <MdOutlineDarkMode /> }
        </div>*/}
        <li className="logout">
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Logout</div>
        </li>
      </ul>
      <div id="mobile" onClick={iconClick}>
        <i className={iconClicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  );
}
