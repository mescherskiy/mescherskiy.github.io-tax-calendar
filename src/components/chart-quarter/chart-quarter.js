import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartMonth from "../chart-month";

import "./chart-quarter.css";

const ChartQuarter = ({ quarterData, groupName }) => {

    const data = {
        labels: [1, 2, 3],
        datasets: [{
            label: 'My First Dataset',
            data: [1, 10, 50],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    }

    const options = {
        indexAxis: "y",
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false,
            },

            y: {
                display: false,
            }
        }
    };

    return (
        <div className="quarter h-100">
            <div className="quarter-title">{quarterData.quarterName}</div>
            <div className="chart-quarter d-flex flex-nowrap">
                <ChartMonth monthData={quarterData.month1} groupName={groupName}/>
                <ChartMonth monthData={quarterData.month2} groupName={groupName}/>
                <ChartMonth monthData={quarterData.month3} groupName={groupName}/>
            </div>
        </div>
    )
}

export default ChartQuarter;