import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";

// TODO like the video minit 10:00
export function NavBar() {
  return <div className="navBar-container"></div>;
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
