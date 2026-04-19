import { Line } from "react-chartjs-2";

import { backgroundColor, borderColor } from "../../chartUtils/chartColors";

import { getLineChartOptions } from "../../chartUtils/chartOptions";
const options = getLineChartOptions("#fff");

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Month",
        data: [65, 59, 80, 81],
        fill: true,
        borderColor: backgroundColor,
        tension: 0.1,
      },
      {
        label: "Month",
        data: [45, 74, 54, 48],
        fill: true,
        borderColor: backgroundColor,
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} options={options} />;
  //   return "Hello";
};

export default LineChart;
