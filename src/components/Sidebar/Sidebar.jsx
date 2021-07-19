import React from "react";
import "../../App.css"
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Количество пересадок</h2>
            <div className="box-filter">
                <label className="row-filter">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    Все
                </label>
                <label className="row-filter">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    Без пересадок
                </label>
                <label className="row-filter">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    1 пересадка
                </label>
                <label className="row-filter">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    2 пересадка
                </label>
                <label className="row-filter">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    3 пересадка
                </label>
            </div>
        </div>
    )
};

export default Sidebar