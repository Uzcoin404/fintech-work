import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, plugins } from "chart.js/auto";

const data = {
    labels: [
        "Financial strength",
        "Profitability",
        "Effectiveness",
        "Growth",
        "Forecast",
        "Valuation",
        "Dividend",
        "Economic moat",
    ],
    datasets: [
        {
            label: "My First Dataset",
            data: [90, 100, 100, 0, 0, 0, 0, 60],
            fill: true,
            backgroundColor: "rgba(0, 107, 61, 0.75)",
            borderColor: "#006B3D",
            pointBackgroundColor: "transparent",
            pointBorderColor: "#006B3D",
        },
        {
            label: "My Second Dataset",
            data: [0, 0, 100, 70, 0, 70, 80, 0],
            fill: true,
            backgroundColor: "#3CDA73BF",
            borderColor: "#3CDA73",
            pointBackgroundColor: "transparent",
            pointBorderColor: "#3CDA73",
        },
        {
            label: "My Third Dataset",
            data: [0, 0, 0, 70, 45, 70, 80, 60],
            fill: true,
            backgroundColor: "#FFCA2DBF",
            borderColor: "#FFCA2D",
            pointBackgroundColor: "transparent",
            pointBorderColor: "#FFCA2D",
        },
    ],
};

export default function RadarChart() {
    return (
        <Radar
            data={data}
            options={{
                elements: {
                    line: {
                        borderWidth: 1,
                    },
                    point: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    r: {
                        angleLines: { color: "#736FF2" },
                        grid: { color: "#736FF2", circular: true },
                        ticks: { display: false },
                        suggestedMin: 0,
                        suggestedMax: 100,
                    },
                },
                responsive: true,
            }}
        ></Radar>
    );
}
