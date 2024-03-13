import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import DarkMode from "../darkMode/DarkMode";
import "./NavBar.scss";
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
  const menuRef = useRef(null);

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
      // console.log("xxx");
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setIconClicked(false);
      }
    };

    const handleClick = (event) => {
      //TODO
      // I need to do something here to make it work
      // by clicking on the screen the menu will be closed

      // console.log(iconClicked);

      if (!menuRef.current.contains(event.target)) {
        console.log("yes");
      }

      // The problem is with this : "!menuRef.current.contains(event.target)"
      // I need to do that when I click the menu (ul) AND when
      // I click the the Top bar so It wont close it

      // I WILL DO IT THIS WAY - EVERY TIME I CLICK ON THE PAGE ITSELF (NOT THE TOP OR THE FOOTER)
      // SO IT WILL CLOSE THE MENU.

      // if (menuRef.current && !menuRef.current.contains(event.target)) {
      //   setIconClicked(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // console.log(iconClicked);

  return (
    <div className="navBar-container">
      {/* <div id="mobile-icon" onClick={iconClick}> */}
      {/* <i className={iconClicked ? "fas fa-times" : "fas fa-bars"} /> */}
      {/* </div> */}
      <ul className={iconClicked ? "mobileOn" : ""} ref={menuRef}>
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
      <div id="mobile-icon" onClick={iconClick}>
        <i className={iconClicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  );
}
