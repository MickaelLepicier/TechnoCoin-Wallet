import { Logo } from "../logo/logo";
import { NavBar } from "../navBar/navBar";
import "./MenuBar.css";

export function MenuBar() {
  return (
    <div className="menuBar-container">
      <Logo />
      <NavBar />
    </div>
  );
}

// export default MenuBar;
