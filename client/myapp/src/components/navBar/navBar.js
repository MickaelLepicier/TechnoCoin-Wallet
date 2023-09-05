import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";

/*
// TODO create a loop to render all that:

// navBar titles
const navBarData = [
  "Home",
  "Topups",
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

  const handleLinkClick = (path) => {
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

  const handleLinkClick = (path) => {
    setShowNFTMenu(false);
    setShowAdminToolsMenu(false);
    setActiveLink(path);
    navigate(path);
  };

  const handleClick = () => {
    setIconClicked(!iconClicked);
  };

  const NFTFunction = () => {
    setShowAdminToolsMenu(false);
    setShowNFTMenu(!showNFTMenu);
    navigate("/pageTwo");
  };

  const adminToolsFunction = () => {
    setShowNFTMenu(false);
    setShowAdminToolsMenu(!adminToolsMenu);
    navigate("/pageTwo");
  };

  return (
    <div className="navBar-container">
      <ul className={iconClicked ? "mobileOn" : ""}>
        <li>
          {" "}
          <div
            className={`link ${activeLink === "/" ? "active" : ""}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </div>
        </li>
        <li>
          {" "}
          <div
            className={`link ${activeLink === "/pageTwo" ? "active" : ""}`}
            onClick={() => handleLinkClick("/pageTwo")}
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
          <div onClick={() => NFTFunction()}>
            NFT
            {/* <div class="fa fa-caret-down" /> */}
          </div>
          <div className={showNFTMenu ? "menu-open" : "menu-close"}>
            <div onClick={() => navigate("/pageTwo")}>action</div>
            <div onClick={() => navigate("/pageTwo")}>another action</div>
          </div>
        </li>
        <li>
          {" "}
          <div onClick={() => adminToolsFunction("/pageTwo")}>
            Admin Tools
            {/* <div class="fa fa-caret-down" /> */}
          </div>
          <div className={adminToolsMenu ? "menu-open" : "menu-close"}>
            <div className="menu-option" onClick={() => navigate("/pageTwo")}>
              action
            </div>
            <div className="menu-option" onClick={() => navigate("/pageTwo")}>
              another action
            </div>
          </div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Logout</div>
        </li>
      </ul>
      <div id="mobile" onClick={handleClick}>
        <i className={iconClicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  );
}
