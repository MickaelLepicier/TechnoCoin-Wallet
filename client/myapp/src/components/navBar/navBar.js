import "./NavBar.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkMode from "../darkMode/DarkMode";

// navBar menu Data
const navBarData = [
  { title: "Home", path: "/" },
  { title: "Topups", path: "/pageTwo" },
  { title: "Transfer", path: "/pageTwo" },
  { title: "Deposits", path: "/pageTwo" },
  { title: "Send Money", path: "/pageTwo" },
  { title: "Settings", path: "/pageTwo" },
  {
    title: "NFT",
    path: "/nft",
    submenu: [
      { title: "action", path: "/actionPage" },
      { title: "another action", path: "/anotherActionPage" },
    ],
  },
  {
    title: "Admin Tools",
    path: "/admin-tools",
    submenu: [
      { title: "action", path: "/actionPage" },
      { title: "another action", path: "/anotherActionPage" },
    ],
  },
];

export function NavBar({ menuRef }) {
  const navigate = useNavigate();
  const [iconClicked, setIconClicked] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [activeLink, setActiveLink] = useState("/");

  // li className
  const classNameFunc = (str) => {
    return `link ${activeLink === str ? "active" : ""}`;
  };

  // button click
  const linkClick = (path) => {
    setShowSubMenu(null);
    setActiveLink(path);
    navigate(path);
  };

  // show / hide subMenu
  const toggleSubMenu = (index) => {
    setShowSubMenu(showSubMenu === index ? null : index);
  };

  const iconClick = () => {
    setIconClicked(!iconClicked);
    setShowSubMenu(null);
  };

  useEffect(() => {
    // hide subMenu when scrolling
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      // check if the subMenu is open, It make the function work less.
      const mobileOn = document.querySelector(".mobileOn");
      if (!mobileOn) return;

      // hide subMenu
      if (currentPosition > 0) {
        setIconClicked(false);
        setShowSubMenu(null);
      }
    };

    // hide subMenu when screen-click
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIconClicked(false);
        setShowSubMenu(null);
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
        {navBarData.map((item, index) => (
          <li key={index}>
            {item.submenu ? (
              // create NFT and Admin Tools Links
              <div
                className={classNameFunc(item.path)}
                onClick={() => toggleSubMenu(index)}
              >
                {item.title}
                <div className="fa fa-caret-down" />
              </div>
            ) : (
              // create Links
              <div
                className={classNameFunc(item.path)}
                onClick={() => linkClick(item.path)}
              >
                {item.title}
              </div>
            )}
            {item.submenu && showSubMenu === index && (
              // create Sub-Links
              <div className="menu-open">
                {item.submenu.map((subItem, subIndex) => {
                  return (
                    <div
                      key={subIndex}
                      className={classNameFunc(item.path)}
                      onClick={() => linkClick(subItem.path)}
                    >
                      {subItem.title}
                    </div>
                  );
                })}
              </div>
            )}
          </li>
        ))}
        <div className="dark-mode">
          <DarkMode />
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

// -----------------------------------------------------------------------------------

/*
import "./NavBar.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkMode from "../darkMode/DarkMode";

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

*/
