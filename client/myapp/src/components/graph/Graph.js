import "./Graph.scss";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// import {Line} from 'react-chartjs-2'

function Graph() {
  const data = [
    { date: "2023-01-01", balance: 1000 },
    { date: "2023-02-01", balance: 1200 },
    { date: "2023-03-01", balance: 2500 },
  ];

  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy the previous chart instance if it exists
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((entry) => entry.date),
          datasets: [
            {
              label: "Total Balance",
              data: data.map((entry) => entry.balance),
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
            y: {
              min: 0,
            },
          },
        },
      });
    }
  }, [chartRef, data]);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={200}></canvas>
    </div>
  );

  // return <>
  // <Line data={data} options={options} />
  // </>
  // return <div className="graph-container">xxx</div>;
}

export default Graph;
