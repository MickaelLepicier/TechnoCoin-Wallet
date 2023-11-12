import "./Graph.scss";

// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// import { Line } from "react-chartjs-2";

import React from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  // const chartData = {
  //   labels: ["January", "February", "March", "April", "May"],
  //   datasets: [
  //     {
  //       label: "Portfolio Value",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "rgba(75,192,192,1)",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: [65, 59, 80, 81, 56],
  //     },
  //   ],
  // };

  // const chartOptions = {
  //   scales: {
  //     x: {
  //       indexAxis: "x",
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  // return (
  //   <div>
  //     <h2>Portfolio Value Over Time</h2>
  //     <Line data={chartData} options={chartOptions} />
  //   </div>
  // );

  const coinPrice = [];
  const coinTimestamp = [];

  const coinHistory = [50, 100, 22, 79];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDataString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );

  // ------------

  // const data = [
  //   { date: "2023-01-01", balance: 1000 },
  //   { date: "2023-02-01", balance: 1200 },
  //   { date: "2023-03-01", balance: 2500 },
  // ];
  // const chartRef = useRef();
  // useEffect(() => {
  //   if (chartRef.current && data) {
  //     const ctx = chartRef.current.getContext("2d");
  //     // Destroy the previous chart instance if it exists
  //     if (chartRef.current.chart) {
  //       chartRef.current.chart.destroy();
  //     }
  //     chartRef.current.chart = new Chart(ctx, {
  //       type: "line",
  //       data: {
  //         labels: data.map((entry) => entry.date),
  //         datasets: [
  //           {
  //             label: "Total Balance",
  //             data: data.map((entry) => entry.balance),
  //             borderColor: "rgba(75, 192, 192, 1)",
  //             borderWidth: 2,
  //             fill: false,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           x: {
  //             type: "linear",
  //             position: "bottom",
  //           },
  //           y: {
  //             min: 0,
  //           },
  //         },
  //       },
  //     });
  //   }
  // }, [chartRef, data]);
  // return (
  //   <div>
  //     <canvas ref={chartRef} width={400} height={200}></canvas>
  //   </div>
  // );
  // ------------
  // return <>
  // <Line data={data} options={options} />
  // </>
  // return <div className="graph-container">xxx</div>;
}

export default Graph;
