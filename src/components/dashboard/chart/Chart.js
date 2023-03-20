import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import "./Chart.css";
import axios from "axios";
import cookie from "react-cookies";

const LineChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    let token = cookie.load("access_token");
    token &&
      axios
        .get(`${process.env.REACT_APP_URL}/month`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          console.log(cookie.load("access_token"));
        });
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
            label: "Number of Employees",
            data: [50, 55, 60, 70, 75, 80, 85, 90, 95, 100, 105, 110],
            borderColor: "#4190FA",
            fill: false,
          },
          {
            label: "Number of Teams",
            data: [5, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 10],
            borderColor: "#4DEDF5",
            fill: false,
          },
          {
            label: "Number of Projects",
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
            borderColor: "#3A55DE",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
      <canvas id="myChart" ref={chartRef} className="chartdash"></canvas>
    </div>
  );
};

export default LineChart;
