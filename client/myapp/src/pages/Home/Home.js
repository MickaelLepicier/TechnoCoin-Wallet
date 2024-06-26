import "./Home.scss";
import { useState } from "react";
import Buttons from "../../components/buttons/Buttons";
import LineChart from "../../components/graph/LineChart";
import { BtcData } from "../../data/BtcData";

// Todo later on The balanceData is from the State
function Balance(balanceData) {
  return (
    <div className="balance-container">
      <div className="balance">
        $10,000,000 <br />
        {/* {balanceData} <br /> */}
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

// Todo later on The data is from the State
function AssetsAllocation(assetsNums = 5, data) {
  const currentData = [
    {
      Asset: "TechnoCoin",
      Price: "$1.00",
      Allocation: "50.04%",
      Amount: "999,999,999TC",
      Value: "999,999,999$",
    },
    {
      Asset: "BitCoin",
      Price: "$25,923.00",
      Allocation: "50.04%",
      Amount: "999,999,999TC",
      Value: "999,999,999$",
    },
  ];

  const renderAssets = (data) => {
    let assetsData = currentData.map((asset, index) => {
      return (
        <tr key={index}>
          <td>{asset.Asset}</td>
          <td>{asset.Price}</td>
          <td>{asset.Allocation} </td>
          <td>{asset.Amount} </td>
          <td>{asset.Value}</td>
        </tr>
      );
    });

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
        <tbody>{assetsData}</tbody>
      </table>
    );
  };

  return (
    <div>
      <div className="aa-header">Assets allocation(5)</div>

      <div>{renderAssets()}</div>
    </div>
  );
}

export function Home() {
  // BitCoin Data
  const [btc, setBtc] = useState({
    labels: BtcData.map((data) => data.year),
    datasets: [
      {
        label: "BTC Worth",
        data: BtcData.map((data) => data.btc$),

        backgroundColor: ["gold"],
        borderColor: "DarkSlateBlue",
        borderWidth: 2,
        tension: 0.2,

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
          },
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
