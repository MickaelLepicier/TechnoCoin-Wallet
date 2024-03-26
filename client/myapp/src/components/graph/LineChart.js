// Done

import "./LineChart.scss";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ btcData, options }) {
  return (
    <div>
      <div className="lineChart-container">
        <Line data={btcData} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
