import "./Buttons.scss";
import buy_icon from "./buy_icon.png";
import stake_icon from "./stake_icon.png";
import swap_icon from "./swap_icon.png";

function Buttons() {
  const btns = [
    {
      icon: buy_icon,
      header: "Buy / Sell",
      subHeader: "Buy and sell with trusted providers",
    },
    {
      icon: swap_icon,
      header: "Swap",
      subHeader: "Convert crypto to crypto securely",
    },
    { icon: stake_icon, header: "Stake", subHeader: "Grow your crypto" },
  ];

  const renderBtn = (icon, header, subHeader, index) => {
    return (
      <button key={index}>
        <img src={icon} alt={`${icon}`} />
        <div className="text">
          <h3> {header} </h3>
          <div> {subHeader} </div>
        </div>
      </button>
    );
  };

  const renderBtns = () => {
    return btns.map((btn, index) =>
      renderBtn(btn.icon, btn.header, btn.subHeader, index)
    );
  };

  return <div className="buttons-container">{renderBtns()}</div>;
}

export default Buttons;
