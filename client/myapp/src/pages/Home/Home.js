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
  // 1. Assets allocation(assetsNums) + icon

  //1.1 Icon link: ( arrow down \ double down)
  // https://icons8.com/icons/set/double-down

  // 2. when pressed the component is open and shown the:
  //    Assets , Price, Allocation, Amount, Value.

  // the data is from the State

  return (
    <div className="assetsAllocation-container">
      <div className="aa-header">
        Assets allocation(5)
        <i class="fa-solid fa-arrow-down-to-line" />
      </div>
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
