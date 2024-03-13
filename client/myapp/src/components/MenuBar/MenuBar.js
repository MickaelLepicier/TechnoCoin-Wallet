import { Logo } from "../logo/logo";
import { NavBar } from "../navBar/NavBar";
import { useRef } from "react";

import "./MenuBar.css";

export function MenuBar() {
  const menuRef = useRef(null);
  // ref is a shortcut for reference = התייחסות

  return (
    <div className="menuBar-container" ref={menuRef}>
      <Logo />
      <NavBar menuRef={menuRef} />
    </div>
  );
}

// export default MenuBar;
