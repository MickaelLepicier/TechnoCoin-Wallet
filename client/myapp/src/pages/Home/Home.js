import { useState } from "react";
import Buttons from "../../components/buttons/Buttons";
import LineChart from "../../components/graph/LineChart";
import { BtcData } from "../../data/BtcData";
import "./Home.scss";
import { Balance } from "../../components/balance/Balance";

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
      {/* <h2>HomePage</h2> */}
      <Buttons />
      <Balance />
      <LineChart btcData={btc} />
    </div>
  );
}
