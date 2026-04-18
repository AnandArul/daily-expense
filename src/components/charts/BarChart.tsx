import { Bar } from "react-chartjs-2";
import { backgroundColor, borderColor } from "../../chartUtils/chartColors";
import { getBarChartOptions } from "../../chartUtils/chartOptions";
const options = getBarChartOptions("#fff");

interface BarChartProps {
  labels?: string[];
  values?: number[];
  //   title?: string;
}

const BarChart: React.FC<BarChartProps> = (props) => {
  const {
    labels = ["income", "expense"],
    values = [250000, 120000],
    // title = "Transacrtions",
  } = props;
  const data = {
    labels: labels,
    datasets: [
      {
        // label: title,
        data: values,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderRadius: 6,
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default BarChart;
