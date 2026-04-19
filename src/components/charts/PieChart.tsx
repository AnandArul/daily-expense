import React, { useMemo } from "react";

import { Pie } from "react-chartjs-2";

import { backgroundColor, borderColor } from "../../chartUtils/chartColors";
import transactions from "../../assets/transactions";

import { getPieChartOptions } from "../../chartUtils/chartOptions";
const options = getPieChartOptions("#fff");

const PieChart = () => {
  const { chartLabels, chartValues } = useMemo(() => {
    // Group by type and sum amounts
    const grouped: Record<string, number> = transactions.reduce(
      (acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + item.amount;
        return acc;
      },
      {} as Record<string, number>,
    );

    // Extract unique types and totals (sorted order)
    const types = Object.keys(grouped).sort();
    const totals = types.map((type) => grouped[type]);

    return {
      chartLabels: types,
      chartValues: totals,
    };
  }, []);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Category",
        data: chartValues,
        backgroundColor: backgroundColor,
        borderWidth: 0,
        // borderColor: borderColor,
        hoverOffset: 20,
      },
    ],
  };

  return <Pie data={data} options={options} />;
};
export default PieChart;
