import React from "react";
import ChartQuarter from "../chart-quarter";

import "./table-chart.css";



const TableChart = ({groupData, groupName}) => {

    return (
        <div className="chart-table d-flex">
            <ChartQuarter quarterData={groupData.quarter1} groupName={groupName} options={{height: 100}}/>
            <ChartQuarter quarterData={groupData.quarter2} groupName={groupName} options={{height: 100}}/>
            <ChartQuarter quarterData={groupData.quarter3} groupName={groupName} options={{height: 100}}/>
            <ChartQuarter quarterData={groupData.quarter4} groupName={groupName} options={{height: 100}}/>
        </div>
    );
};

export default TableChart;