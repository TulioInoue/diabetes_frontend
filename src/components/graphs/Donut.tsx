import ReactECharts from "echarts-for-react";

interface donutChartInterface {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  title: string;
  fontsize: number;
  titleColor: string;
  tooltipBackground: string;
  color: string[];
}

export default function DonutChart({
  data,
  title,
  titleColor,
  fontsize,
  tooltipBackground,
  color,
}: donutChartInterface) {
  const option = {
    backgroundColor: "transparent",
    title: {
      text: title,
      left: "center",
      top: "0%",
      textStyle: {
        color: titleColor,
        fontSize: fontsize,
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: tooltipBackground,
      borderColor: "transparent",
      textStyle: { color: "#fff" },
      formatter: "{b}: {d}%",
    },
    legend: {
      bottom: "0%",
      left: "center",
      textStyle: { color: titleColor },
      itemWidth: 10,
      itemHeight: 10,
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "transparent",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },

        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
        color: color,
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
}
