import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navBar-container">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/pageTwo")}>Topups</button>
      <button onClick={() => navigate("/pageTwo")}>Transfer</button>
      <button onClick={() => navigate("/pageTwo")}>Deposits</button>
      <button onClick={() => navigate("/pageTwo")}>Send Money</button>
      <button onClick={() => navigate("/pageTwo")}>Settings</button>
      <button onClick={() => navigate("/pageTwo")}>NFT</button>
      {/* option 1, option 2 */}
      <button onClick={() => navigate("/pageTwo")}>Admin Tools</button>
      {/* option 1, option 2 */}
      <button onClick={() => navigate("/pageTwo")}>Logout</button>
    </div>
  );
}

// export default MenuBar;
