import { useState } from "react";
import Buttons from "../../components/buttons/Buttons";
import LineChart from "../../components/graph/LineChart";
import { BtcData } from "../../data/BtcData";
import "./Home.css";

export function Home() {
  const [btc, setBtc] = useState({
    labels: BtcData.map((data) => data.year),
    datasets: [
      {
        label: "BTC Worth",
        data: BtcData.map((data) => data.btc$),
        backgroundColor: ["gold"],
        borderColor: "DarkSlateBlue",
        borderWidth: 2,
        // pointRadius: 0,
      },
    ],
  });

  return (
    <div className="home-container">
      {/* <h2>HomePage</h2> */}
      <Buttons />
      <LineChart btcData={btc} />
    </div>
  );
}

// export default Home;
