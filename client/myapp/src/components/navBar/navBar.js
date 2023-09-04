import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";

// TODO create object data with [{'Home','/'}, {'Topups','/pageTwo'}]...
// TODO create a loop to render all that

export function NavBar() {
  const navigate = useNavigate();
  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };
  return (
    <div className="navBar-container">
      <ul className={clicked ? "mobileOn" : ""}>
        <li>
          {" "}
          <div className="active" onClick={() => navigate("/")}>
            Home
          </div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Topups</div>
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
          <div onClick={() => navigate("/pageTwo")}>NFT</div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Admin Tools</div>
        </li>
        <li>
          {" "}
          <div onClick={() => navigate("/pageTwo")}>Logout</div>
        </li>
      </ul>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  );
}

// export function NavBar() {
//   const navigate = useNavigate();
//   const [clicked, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!clicked);
//   };
//   return (
//     <div className="navBar-container">
//       <button onClick={() => navigate("/")}>Home</button>
//       <button onClick={() => navigate("/pageTwo")}>Topups</button>
//       <button onClick={() => navigate("/pageTwo")}>Transfer</button>
//       <button onClick={() => navigate("/pageTwo")}>Deposits</button>
//       <button onClick={() => navigate("/pageTwo")}>Send Money</button>
//       <button onClick={() => navigate("/pageTwo")}>Settings</button>
//       <button onClick={() => navigate("/pageTwo")}>NFT</button>
//       {/* option 1, option 2 */}
//       <button onClick={() => navigate("/pageTwo")}>Admin Tools</button>
//       {/* option 1, option 2 */}
//       <button onClick={() => navigate("/pageTwo")}>Logout</button>
//       <div id="mobile" onClick={handleClick}>
//         <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"} />
//       </div>
//     </div>
//   );
// }

// export default MenuBar;
