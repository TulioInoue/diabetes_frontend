import ReactECharts from "echarts-for-react";

interface ChartProps {
  diabetes: number;
  no_diabetes: number;
}

export default function PredictionChart({ diabetes, no_diabetes }: ChartProps) {
  const option = {
    title: {
      text: "Diabetes Prediction Analysis",
      subtext: "Based on clinical symptoms",
      left: "center", // Centraliza o texto horizontalmente
      textStyle: {
        color: "#1c3148", // Sua cor primária
        fontSize: 18,
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
    },
    legend: {
      bottom: "0%",
      left: "center",
      textStyle: { color: "#666" },
    },
    color: ["#c56715", "#1c3148"], // Usando suas cores: secundária e primária
    series: [
      {
        name: "Prediction",
        type: "pie",
        radius: ["40%", "60%"], // Faz o efeito de rosca
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
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
            formatter: "{d}%", // Mostra a porcentagem no meio ao passar o mouse
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: diabetes, name: "Diabetes risk" },
          { value: no_diabetes, name: "Health" },
        ],
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
      <ReactECharts
        option={option}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: "svg" }} // SVG costuma ser mais nítido para web
      />
    </div>
  );
}
