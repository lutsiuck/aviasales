import React from 'react';
import Moment from "react-moment";
import './Items.css'

const Items = (props) => {

    const getTime = mins => {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}ч ${minutes}м`;
    };

    return(
        <div className="items">
            {props.tickets.slice(0, props.amountTickets).map( (ticket, i) => (
                <div className="item" key={i}>
                    <div className="item-top">
                        <p className="item-price">{ticket.price} Р </p>
                        <div className="item-logo">
                            <img src="" alt="Logo"/>
                        </div>
                    </div>
                    {ticket.segments.map( (segment, index) => (
                        <div className="item-row" key={index}>
                            <div className="item-col">
                                <div className="item-info">
                                    <h3>{segment.origin} – {segment.destination}</h3>
                                    <p><Moment format="DD/MM/YYYY">{segment.date}</Moment></p>
                                </div>
                            </div>
                            <div className="item-col">
                                <div className="item-info">
                                    <h3>В пути</h3>
                                    <p>{getTime(segment.duration)}</p>
                                </div>
                            </div>
                            <div className="item-col">
                                <div className="item-info">
                                    <h3>{segment.stops.length} пересадки</h3>
                                    <p>{segment.stops.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    ) )}
                </div>
            ) )}
        </div>
    )
};

export default Items;