import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
    labels: ["Sep 22", "Oct 22", "Nov 22", "Dec 22"],
    datasets: [
        {
            label: "Strong sell",
            data: [10, 9, 9, 3],
            backgroundColor: "#006B3D",
            barPercentage: 0.6,
        },
        {
            label: "Sell",
            data: [14, 12, 15, 7],
            backgroundColor: "#3CDA73",
            barPercentage: 0.6,
        },
        {
            label: "Hold",
            data: [8, 12, 13, 13],
            backgroundColor: "#FFCA2D",
            barPercentage: 0.6,
        },
        {
            label: "Buy",
            data: [0, 2, 2, 2],
            backgroundColor: "#FF7A49",
            barPercentage: 0.6,
        },
        {
            label: "Strong buy",
            data: [0, 1, 1, 0],
            backgroundColor: "#D3212C",
            barPercentage: 0.6,
        },
    ],
};

export default function BarChart() {
    return (
        <Bar
            data={data}
            options={{
                elements: {
                    bar: {
                        borderRadius: 5,
                    },
                },
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
                        stacked: true,
                        beginAtZero: true
                    },
                },
                responsive: true,
            }}
            plugins={[
                {
                    beforeDraw: function (c) {
                        var legends = c.legend.legendItems;
                        legends[0].fillStyle = "#D3212C";
                        legends[1].fillStyle = "#FF7A49";
                        legends[2].fillStyle = "#FFCA2D";
                        legends[3].fillStyle = "#3CDA73";
                        legends[4].fillStyle = "#006B3D";
                    },
                },
            ]}
        />
    );
}
