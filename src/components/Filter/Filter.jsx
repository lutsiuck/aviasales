import React from "react";
import "../../App.css"
import "./Filter.css"

const Filter = (props) => {
    return (
        <div className="sidebar">
            <h2>Количество пересадок</h2>
            <div className="box-filter">
                <label className="row-filter">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    Все
                </label>
                {props.filterList.map( (filter, i) => (
                    <label key={i} className="row-filter">
                        <input onChange={(e) => props.filterTickets(e)} value={filter.value} type="checkbox" checked={filter.isChecked}/>
                        <span className="checkmark"></span>
                        {filter.title}
                    </label>
                ))}
            </div>
        </div>
    )
};

export default Filter