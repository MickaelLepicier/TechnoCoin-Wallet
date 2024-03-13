import { useState } from "react";
import Buttons from "../../components/buttons/Buttons";
import LineChart from "../../components/graph/LineChart";
import { BtcData } from "../../data/BtcData";
import "./Home.scss";
// import { Balance } from "../../components/balance/Balance";

function Balance() {
  return (
    <div className="balance-container">
      <div className="balance">
        $10,000,000 <br />
        <div className="total-b">Total balance </div>
        <div className="growth">90%</div>
      </div>
      <div className="chart-buttons">
        <button className="btn">1D</button>
        <button className="btn">1W</button>
        <button className="btn">1M</button>
        <button className="btn">1Y</button>
        <button className="btn">All</button>
      </div>
    </div>
  );
}

function AssetsAllocation(assetsNums = 5, data) {
  //@ TODO create assets allocation

  // 1. The Assets allocation going down like in the NavBar NFT
  // 2. After I click the background change back
  // 3. how when I click the screen the background change it back?

  // the data is from the State

  const toggleAssetsData = () => {
    var element = document.querySelector(".assets-data");
    element.classList.toggle("active");
  };

  const renderAssets = (data) => {
    // take the data and use it to render it.

    // find another way to create Table
    return (
      <table className="assets-data">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>Allocation</th>
            <th>Amount</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TechnoCoin</td>
            <td>$1.00</td>
            <td>50.04% </td>
            <td>999,999,999 TC </td>
            <td>999,999,999$</td>
          </tr>
          <tr>
            <td>BitCoin</td>
            <td>$25,923.00</td>
            <td>50.04% </td>
            <td>999,999,999 TC </td>
            <td>999,999,999$</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="assetsAllocation-container">
      <div className="aa-header" onClick={() => toggleAssetsData()}>
        Assets allocation(5) :
        <div className="icon-down">
          <div className="fa fa-caret-down" />{" "}
        </div>
      </div>

      <div>{renderAssets()}</div>
    </div>
  );
}

export function Home() {
  const [btc, setBtc] = useState({
    // TODO change the Data (BtcData) thro the buttons D1 , W1 ...
    labels: BtcData.map((data) => data.year),
    datasets: [
      {
        label: "BTC Worth",
        data: BtcData.map((data) => data.btc$),

        backgroundColor: ["gold"],
        borderColor: "DarkSlateBlue",
        borderWidth: 2,
        // pointRadius: 0,
        // borderJoinStyle: "round",
        tension: 0.2,
        // hoverBorderWidth: "200px",

        fill: {
          target: "origin",
          above: (context) => {
            const gradient = context.chart.ctx.createLinearGradient(
              0,
              0,
              0,
              400
            );
            gradient.addColorStop(0, "rgba(71, 61, 139, 0.8)"); // Lighter shade
            gradient.addColorStop(1, "rgba(71, 61, 139, 0.2)"); // Darker shade
            return gradient;
          }, // Area will be DarkSlateBlue above the origin
          // below: 'rgb(0, 0, 255)'    // And blue below the origin
        },
      },
    ],
  });

  return (
    <div className="home-container">
      <Buttons />
      <div className="graph-container">
        <Balance />
        <LineChart btcData={btc} />
      </div>
      <div className="assets-container">
        <AssetsAllocation />
      </div>
    </div>
  );
}
