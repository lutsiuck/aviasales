import React from 'react';
import './Items.css'

const Items = () => {
    return(
        <div className="items">
            <div className="item">
                <div className="item-top">
                    <p className="item-price">13 400 Р</p>
                    <div className="item-logo">
                        <img src="" alt="Logo"/>
                    </div>
                </div>
                <div className="item-row">
                    <div className="item-col">
                        <div className="item-info">
                            <h3>MOW – HKT</h3>
                            <p>10:45 – 08:00</p>
                        </div>
                        <div className="item-info">
                            <h3>MOW – HKT</h3>
                            <p>11:20 – 00:50</p>
                        </div>
                    </div>
                    <div className="item-col">
                        <div className="item-info">
                            <h3>В пути</h3>
                            <p>21ч 15м</p>
                        </div>
                        <div className="item-info">
                            <h3>В пути</h3>
                            <p>13ч 30м</p>
                        </div>
                    </div>
                    <div className="item-col">
                        <div className="item-info">
                            <h3>2 пересадки</h3>
                            <p>HKG, JNB</p>
                        </div>
                        <div className="item-info">
                            <h3>1 пересадки</h3>
                            <p>HKG</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-top">
                    <p className="item-price">13 400 Р</p>
                    <div className="item-logo">
                        <img src="" alt="Logo"/>
                    </div>
                </div>
                <div className="item-row">
                    <div className="item-col">
                        <div className="item-info">
                            <h3>MOW – HKT</h3>
                            <p>10:45 – 08:00</p>
                        </div>
                        <div className="item-info">
                            <h3>MOW – HKT</h3>
                            <p>11:20 – 00:50</p>
                        </div>
                    </div>
                    <div className="item-col">
                        <div className="item-info">
                            <h3>В пути</h3>
                            <p>21ч 15м</p>
                        </div>
                        <div className="item-info">
                            <h3>В пути</h3>
                            <p>13ч 30м</p>
                        </div>
                    </div>
                    <div className="item-col">
                        <div className="item-info">
                            <h3>2 пересадки</h3>
                            <p>HKG, JNB</p>
                        </div>
                        <div className="item-info">
                            <h3>1 пересадки</h3>
                            <p>HKG</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn">Показать еще 5 билетов!</button>
        </div>
    )
};

export default Items;