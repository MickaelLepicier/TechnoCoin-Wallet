// Done

import { Logo } from "../logo/logo";
import { NavBar } from "../navBar/NavBar";
import { useRef } from "react";
import "./MenuBar.scss";

export function MenuBar() {
  const menuRef = useRef(null);

  return (
    <div className="menuBar-container" ref={menuRef}>
      <Logo />
      <NavBar menuRef={menuRef} />
    </div>
  );
}
