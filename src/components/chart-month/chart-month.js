import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { externalTooltipHandler } from "./external-tooltip";

import "./chart-month.css";

const ChartMonth = ({ monthData, groupName }) => {

    const data = {
        labels: ["Податкова декларація", "Сплата ЄП", "Сплата ЄСВ"],
        datasets: [{
            skipNull: true,
            label: 'My First Dataset',
            data: [monthData.dec, monthData.ep, monthData.esv],
            
            borderRadius: 5,
            backgroundColor: [
                'rgb(0, 100, 0)',
                'rgb(139, 0, 0)',
                'rgb(255, 140, 0)'
            ],
            hoverBackgroundColor: [
                'rgb(35, 152, 35)',
                'rgb(192, 46, 46)',
                'rgb(255, 181, 91)'
            ],
        }]
    }

    const options = {
        indexAxis: "y",
        barThickness: "flex",
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                intersect: true,
                enabled: false,
                external: externalTooltipHandler,
                callbacks: {
                    label: function (context) {
                        const actualContext = Array.isArray(context) ? context[0] : context;
                        if (actualContext.label == "Податкова декларація") {return monthData.decLabel}
                        if (actualContext.label == "Сплата ЄП") {return monthData.epLabel}
                        if (actualContext.label == "Сплата ЄСВ") {return monthData.esvLabel}
                    },
                    title: function (context) {
                        const actualContext = Array.isArray(context) ? context[0] : context;
                        if (actualContext.label == "Податкова декларація") {return null}
                        if (actualContext.label == "Сплата ЄП") {return monthData.epSum}
                        if (actualContext.label == "Сплата ЄСВ") {return monthData.esvSum}
                    },

                    footer: function (context) {
                        const actualContext = Array.isArray(context) ? context[0] : context;
                        if (actualContext.label == "Податкова декларація") {return monthData.decFooter}
                        if (actualContext.label == "Сплата ЄП") {return monthData.epFooter}
                        if (actualContext.label == "Сплата ЄСВ") {return monthData.esvFooter}
                    },
                    
                },
            },
        },

        scales: {
            x: {
                display: false,
                suggestedMax: 30,
                max: monthData.days
            },

            y: {
                display: false,
               
            }
        }
    };

    return (
        <div className="month">
            <Bar data={data} options={options} />
            <p>{monthData.monthName}</p>
        </div>
    )
}

export default ChartMonth;