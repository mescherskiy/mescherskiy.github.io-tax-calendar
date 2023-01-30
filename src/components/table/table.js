import React from "react";
import TableHeader from "../table-header";
import TableBody from "../table-body";

import "./table.css";

const Table = () => {
    return (
        <div className="table-container">
            <TableHeader />
            <TableBody />
            <div className="legend d-flex justify-content-around pt-5">
                <div className="declaration d-flex align-items-center">
                    <div className="legend-marker"></div>
                    <p className="legend-text">Податкова декларація</p>
                </div>
                <div className="ep d-flex align-items-center">
                    <div className="legend-marker"></div>
                    <p className="legend-text">Сплата єдиного податку</p>
                </div>
                <div className="esv d-flex align-items-center">
                    <div className="legend-marker"></div>
                    <p className="legend-text">Сплата єдиного соціального внеску</p>
                </div>
            </div>
        </div>
    );
};

export default Table;