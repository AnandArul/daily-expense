import { Line } from "react-chartjs-2";
import { useMemo } from "react";

import { getLineChartOptions } from "../../chartUtils/chartOptions";
const options = getLineChartOptions("#fff");

import transactions from "../../assets/transactions";

const LineChart = () => {
  const { chartLabels, chartValues } = useMemo(() => {
    const monthLabels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Filter expenses and group by month
    const monthlyTotals = transactions
      .filter((t) => t.type === "Expense")
      .reduce((acc: Record<number, number>, t) => {
        const month = new Date(t.date).getMonth(); // 0–11
        acc[month] = (acc[month] ?? 0) + t.amount;
        return acc;
      }, {});

    const months: string[] = [];
    const values: number[] = [];

    monthLabels.forEach((label, index) => {
      if (monthlyTotals[index] !== undefined) {
        months.push(label);
        values.push(monthlyTotals[index]);
      }
    });

    return {
      chartLabels: months,
      chartValues: values,
    };
  }, []);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Month",
        data: chartValues,
        fill: true,
        borderColor: "#ffa0dc",
        tension: 0.1,
      },
      //   {
      //     label: "Month",
      //     data: [45, 74, 54, 48],
      //     fill: true,
      //     borderColor: backgroundColor,
      //     tension: 0.1,
      //   },
    ],
  };
  return <Line data={data} options={options} />;
  //   return "Hello";
};

export default LineChart;
