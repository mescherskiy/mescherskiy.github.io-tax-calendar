import React from "react";

import "./table-header.css";

const TableHeader = () => {

    return (
        <div className="table-header">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="first-group-tab" data-bs-toggle="tab" data-bs-target="#first-group-tab-pane" type="button" role="tab" aria-controls="first-group-tab-pane" aria-selected="true">1 група</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="second-group-tab" data-bs-toggle="tab" data-bs-target="#second-group-tab-pane" type="button" role="tab" aria-controls="second-group-tab-pane" aria-selected="false">2 група</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="third-group-five-percents-tab" data-bs-toggle="tab" data-bs-target="#third-group-five-percents-tab-pane" type="button" role="tab" aria-controls="third-group-five-percents-tab-pane" aria-selected="false">3 група</button>
                </li>
            </ul>
        </div>
    );
};

export default TableHeader;