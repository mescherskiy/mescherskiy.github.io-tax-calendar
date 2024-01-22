import React from "react";
import TableChart from "../table-chart";
import UserData from "../../data";

import "./table-body.css";

const TableBody = () => {
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="first-group-tab-pane" role="tabpanel" aria-labelledby="first-group-tab" tabIndex="0"><TableChart groupData={UserData[0]} groupName={1}/></div>
            <div className="tab-pane fade" id="second-group-tab-pane" role="tabpanel" aria-labelledby="second-group-tab" tabIndex="0"><TableChart groupData={UserData[1]} groupName={2}/></div>
            <div className="tab-pane fade" id="third-group-five-percents-tab-pane" role="tabpanel" aria-labelledby="third-group-five-percents-tab" tabIndex="0"><TableChart groupData={UserData[2]} groupName={3.5}/></div>
        </div>
    );
};

export default TableBody;