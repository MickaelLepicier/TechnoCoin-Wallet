import { useNavigate } from "react-router-dom";
import { Logo } from "../logo/logo";
import "./navBar.css";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navBar-container">
      <button onClick={() => navigate("/")}>Homepage</button>
      <button onClick={() => navigate("/pageTwo")}>pageTwo</button>
    </div>
  );
}

// export default MenuBar;
