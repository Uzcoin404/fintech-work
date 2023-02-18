import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
    labels: ["Sep 22", "Oct 22", "Nov 22", "Dec 22"],
    datasets: [
        {
            label: "Strong sell",
            data: [65, 59, 80, 81, 70],
            backgroundColor: [
                "#006B3D",
                "#3CDA73",
                "#FFCA2D",
                "#FF7A49",
                "#D3212C",
            ],
        },
        {
            label: "Sell",
            data: [65, 59, 80, 81, 70],
            backgroundColor: [
                "#006B3D",
                "#3CDA73",
                "#FFCA2D",
                "#FF7A49",
                "#D3212C",
            ],
        },
        {
            label: "Hold",
            data: [65, 59, 80, 81, 70],
            backgroundColor: [
                "#006B3D",
                "#3CDA73",
                "#FFCA2D",
                "#FF7A49",
                "#D3212C",
            ],
        },
        {
            label: "Buy",
            data: [65, 59, 80, 81, 70],
            backgroundColor: [
                "#006B3D",
                "#3CDA73",
                "#FFCA2D",
                "#FF7A49",
                "#D3212C",
            ],
        },
        {
            label: "Strong buy",
            data: [65, 59, 80, 81, 70],
            backgroundColor: [
                "#006B3D",
                "#3CDA73",
                "#FFCA2D",
                "#FF7A49",
                "#D3212C",
            ],
        },
    ],
};

export default function BarChart() {
    return (
        <Bar
            data={data}
            options={{
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            boxWidth: 10,
                            boxHeight: 20,
                            useBorderRadius: true,
                            borderRadius: 5,
                        },
                    },
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true,
                    },
                },
                interaction: {
                    intersect: false,
                },
                responsive: true,
            }}
        />
    );
}
