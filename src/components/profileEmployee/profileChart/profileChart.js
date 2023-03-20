import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import "./profileChart.css";
const ProfileChart = () => {
    const chartRef = useRef();

    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: [
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
                ],
                datasets: [
                    {
                        label: "Marketing",
                        data: [50, 55, 60, 70, 75, 80, 85, 90, 95, 100, 105, 110],
                        borderColor: "#4190FA",
                        fill: false,
                    },
                    {
                        label: "Project management",
                        data: [5, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 10],
                        borderColor: "#4DEDF5",
                        fill: false,
                    },
                    {
                        label: "Problem solving",
                        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
                        borderColor: "#3A55DE",
                        fill: false,
                    },
                ],
            },
            options: {
                legend: { display: true },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });
    }, []);

    return (
        <div>
            <canvas
                id="myChart"
                ref={chartRef}
                width="600"
                height="300"
                className="chart"
            ></canvas>
        </div>
    );
};

export default ProfileChart;
