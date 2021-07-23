import React from "react";
import "./Sort.css"

const Sort = (props) => {
    return (
        <ul className="filter">
            {props.sortList.map( (list, i) => (
                <li key={i} onClick={(e) => props.sortTickets(e)} data-sort={list.dataSort}>{list.title}</li>
            ))}
        </ul>
    )
}

export default Sort;