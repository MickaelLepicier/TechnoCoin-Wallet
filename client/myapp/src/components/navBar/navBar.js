// Done

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkMode from "../darkMode/DarkMode";
import "./NavBar.scss";

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

export function NavBar({ menuRef }) {
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
    setShowNFTMenu(false);
    setShowAdminToolsMenu(false);
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

  useEffect(() => {
    const handleScroll = () => {
      // This function work each time we scroll..
      // maybe there is a way for it to work less

      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setIconClicked(false);
        setShowNFTMenu(false);
        setShowAdminToolsMenu(false);
      }
    };

    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIconClicked(false);
        setShowNFTMenu(false);
        setShowAdminToolsMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

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

        <li className="logout">
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Logout</div>
        </li>
      </ul>
      <div id="mobile-icon" onClick={iconClick}>
        <i className={iconClicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  );
}
