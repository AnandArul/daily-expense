const animation: object = {
  duration: 1000,
  easing: "easeInOutQuart" as const,
  delay: 0,
  animateRotate: true, // animate slices rotating in
  animateScale: true, // animate scaling from center
};

const hover: object = {
  mode: "nearest" as const,
  intersect: true,
};

const layout: object = {
  padding: 0,
  // padding: {
  //   top: 10,
  //   bottom: 10,
  //   left: 10,
  //   right: 10,
  // },
};
const legend: object = {
  display: false,
  position: "right" as const, // "top" | "bottom" | "left" | "right"
  align: "center" as const, // "start" | "center" | "end"
  reverse: false, // reverse order of legend items
  labels: {
    // color,
    padding: 20,
    font: {
      size: 13,
      weight: "bold" as const,
      family: "Inter, sans-serif",
    },
    usePointStyle: true, // circle instead of rectangle
    // pointStyleWidth: 10, // size of the point style
    boxWidth: 12, // width of legend color box
    boxHeight: 12, // height of legend color box
  },
};

const title: object = {
  display: false,
  // text: "TRANSACTIONS BY CATEGORY",
  // color,
  align: "center" as const, // "start" | "center" | "end"
  position: "top" as const, // "top" | "bottom"
  padding: {
    top: 10,
    bottom: 10,
  },
  font: {
    size: 16,
    weight: "bold" as const,
    family: "Inter, sans-serif",
  },
};

const tooltip: object = {
  enabled: true,
  mode: "index" as const, // shows all datasets at hovered index
  intersect: false,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  titleColor: "#fff",
  bodyColor: "#fff",
  borderColor: "rgba(255,255,255,0.2)",
  borderWidth: 0,
  padding: 12,
  cornerRadius: 8,
  displayColors: true, // shows color box in tooltip
  boxWidth: 10,
  boxHeight: 10,
  usePointStyle: true,
};

export const getBarChartOptions = (color: string) => ({
  responsive: true,
  maintainAspectRatio: false,

  // ✅ Animation
  animation: animation,

  // ✅ Hover
  hover: hover,

  // ✅ Layout padding
  layout: layout,
  plugins: {
    legend: {
      display: false,
      position: "top",
      labels: { color },
    },
    title: {
      display: false,
    },
    tooltip: {
      ...tooltip,
      position: "nearest",
    },
  },
  scales: {
    x: { ticks: { color }, grid: { display: false }, tooltip: { color } },
    y: { ticks: { color }, grid: { display: false }, tooltip: { color } },
  },
});

export const getPieChartOptions = (color: string) => ({
  responsive: true,
  maintainAspectRatio: false,

  // ✅ Rotation & circumference
  rotation: -90, // start angle in degrees (-90 = top, 0 = right)
  circumference: 360, // full circle (180 = half pie)

  // ✅ Animation
  animation: animation,

  // ✅ Hover
  hover: hover,

  // ✅ Layout padding
  layout: layout,

  plugins: {
    // ✅ Legend
    legend: {
      ...legend,
      labels: {
        ...legend.labels,
        color,
        padding: 10,
      },
    },

    // ✅ Title
    title: {
      ...title,
      color,
    },

    // ✅ Tooltip
    tooltip: {
      ...tooltip,
      position: "nearest",
      callbacks: {
        title: (context: any) => context[0].label, // tooltip title
        label: (context: any) => {
          const value = context.parsed;
          const total = context.dataset.data.reduce(
            (a: number, b: number) => a + b,
            0,
          );
          const percentage = ((value / total) * 100).toFixed(1);
          return ` ${context.label}: ${value} (${percentage}%)`;
        },
      },
    },
  },
});

export const getLineChartOptions = (color: string) => ({
  responsive: true,
  maintainAspectRatio: false,

  // hoverRadius: 12,
  // hoverBackgroundColor: "green",
  interaction: {
    mode: "nearest",
    intersect: false,
    axis: "x",
  },

  plugins: {
    // ✅ Legend
    legend: {
      ...legend,
      labels: {
        ...legend.labels,
        color,
        padding: 10,
      },
    },

    // ✅ Title
    title: {
      ...title,
      color,
    },

    // ✅ Tooltip
    tooltip: {
      ...tooltip,
      position: "nearest",
      // callbacks: {
      //   title: (context: any) => context[0].label, // tooltip title
      //   label: (context: any) => {
      //     const value = context.parsed;
      //     const total = context.dataset.data.reduce(
      //       (a: number, b: number) => a + b,
      //       0,
      //     );
      //     const percentage = ((value / total) * 100).toFixed(1);
      //     return ` ${context.label}: ${value} (${percentage}%)`;
      //   },
      // },
    },
  },
  scales: {
    x: { ticks: { color }, grid: { display: false }, tooltip: { color } },
    y: { ticks: { color }, grid: { display: false }, tooltip: { color } },
  },
});

export default { getBarChartOptions, getPieChartOptions };
