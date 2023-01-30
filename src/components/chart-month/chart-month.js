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
                    // label: function (context) {
                    //     console.log(groupName);
                    //     if (groupName == 1 || 2) {
                    //         if (context.label == "Сплата ЄП" && context.raw != undefined) {
                    //             return `${context.label} за ${monthData.monthName.toLowerCase()} 2023 року`;
                    //         } else if (context.label == "Сплата ЄСВ" && context.raw != undefined) {
                    //             switch (monthData.monthName) {
                    //                 case "Січень":
                    //                 case "Лютий":
                    //                 case "Березень":
                    //                     return `${context.label} за IV квартал 2022 року`;
                    //                 case "Квітень":
                    //                 case "Травень":
                    //                 case "Червень":
                    //                     return `${context.label} за I квартал 2023 року`;
                    //                 case "Липень":
                    //                 case "Серпень":
                    //                 case "Вересень":
                    //                     return `${context.label} за II квартал 2023 року`;
                    //                 case "Жовтень":
                    //                 case "Листопад":
                    //                 case "Грудень":
                    //                     return `${context.label} за III квартал 2023 року`;
                    //             }
                    //         } else if (context.label == "Податкова декларація" && context.raw != undefined) {
                    //             return `${context.label} за 2022 рік`;
                    //         }
                    //     } else if (groupName == 3.2) {
                    //         if (context.label == "Податкова декларація" && context.raw != undefined) {
                    //             switch(monthData.monthName) {
                    //                 case "Січень":
                    //                     return `${context.label} за грудень 2022 року`;
                    //                 case "Лютий":
                    //                     return `${context.label} за січень 2023 року`;
                    //                 case "Березень":
                    //                     return `${context.label} за лютий 2023 року`;
                    //                 case "Квітень":
                    //                     return `${context.label} за березень 2023 року`;
                    //                 case "Травень":
                    //                     return `${context.label} за квітень 2023 року`;
                    //                 case "Червень":
                    //                     return `${context.label} за травень 2023 року`;
                    //                 case "Липень":
                    //                     return `${context.label} за червень 2023 року`;
                    //                 case "Серпень":
                    //                     return `${context.label} за липень 2023 року`;
                    //                 case "Вересень":
                    //                     return `${context.label} за серпень 2023 року`;
                    //                 case "Жовтень":
                    //                     return `${context.label} за вересень 2023 року`;
                    //                 case "Листопад":
                    //                     return `${context.label} за жовтень 2023 року`;
                    //                 case "Грудень":
                    //                     return `${context.label} за листопад 2023 року`;
                    //             }
                    //         }
                    //     } else if (groupName == 3.5) {

                    //     }

                    //     return "Label";
                    // },
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