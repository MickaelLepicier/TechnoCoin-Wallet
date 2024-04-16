import "./logo.scss";
import logo_img from "./logo_img.jpg";

export function Logo() {
  return (
    <div className="logo-container">
      <img src={logo_img} alt="logo image" />
    </div>
  );
}
