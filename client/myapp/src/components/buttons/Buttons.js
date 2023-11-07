import "./Buttons.scss";
import buy_icon from "./buy_icon.png";
import stake_icon from "./stake_icon.png";
import swap_icon from "./swap_icon.png";

// I can create another function to render the buttons.
// Like that it will be less lines of code

function Buttons() {
  const btns = [
    {
      icon: buy_icon,
      header: "Buy / Sell",
      subHeader: "Buy and sell with trusted providers",
    },
    {
      icon: stake_icon,
      header: "Swap",
      subHeader: "Convert crypto to crypto securely",
    },
    { icon: swap_icon, header: "Stake", subHeader: "Grow your crypto" },
  ];

  const renderBtn = (icon, header, subHeader) => {
    return (
      <button>
        <img src={icon} alt="buy_icon" />
        <div className="text">
          <h3> {header} </h3>
          <div> {subHeader} </div>
        </div>
      </button>
    );
  };

  const renderBtns = () => {
    return btns.maps((btn) => renderBtn(btn.icon, btn.header, btn.text));
  };

  return (
    <div className="buttons-container">
      <button>
        <img src={buy_icon} alt="buy_icon" />
        <h3> Buy / Sell </h3>
        <div> Buy and sell with trusted providers </div>
      </button>
      {/* {renderBtns()} */}
    </div>
  );
}

export default Buttons;
