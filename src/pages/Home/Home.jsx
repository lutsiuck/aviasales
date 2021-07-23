import React from 'react'
import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";
import Items from "../../components/Items/Items";
import s from "./Home.module.css"

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            sortList: [
                {dataSort: 'cheapest', title: 'Самый дешевый'},
                {dataSort: 'fastest', title: 'Самый быстрый'},
                {dataSort: 'optimal', title: 'Оптимальный'},
            ],
            filterList: [
                {title: 'Без пересадок', value: '0', isChecked: false},
                {title: '1 пересадок', value: '1', isChecked: false},
                {title: '2 пересадок', value: '2', isChecked: false},
                {title: '3 пересадок', value: '3', isChecked: false},
            ],
            amountTickets: 5
        }
    }

    componentDidMount() {
        this.props.getTickets();
    }

    sortTicketsHandle = (e) => {
        let typeSort = e.target.dataset.sort;
        let isFilter = this.state.filterList.some(e => e.isChecked === true);
        let tikets = isFilter ? this.props.fTickets : this.props.tickets
        this.props.sortTickets(typeSort, tikets, isFilter);
        this.forceUpdate();
    };

    filterTicketsHandle = (e) => {
        let list = this.state.filterList;
        let currentCheckbox = [];
        list.forEach(l => {
            if (l.value === e.target.value)
                l.isChecked = e.target.checked;
            if (l.isChecked) {
                currentCheckbox.push(parseInt(l.value));
            }
        });
        this.setState({filterList: list});
        this.props.filterTickets(currentCheckbox, this.props.tickets);
        this.forceUpdate();
    };

    handleAmountTickets = () => {
        this.setState({amountTickets: this.state.amountTickets + 5})
    };

    render() {
        return (
            <div className={s.pageRow}>
                <Filter filterList={this.state.filterList} filterTickets={this.filterTicketsHandle}/>
                <div className={s.pageContent}>
                    <Sort sortList={this.state.sortList} sortTickets={this.sortTicketsHandle}/>
                    <Items amountTickets={this.state.amountTickets}
                           tickets={this.props.fTickets.length === 0 ? this.props.tickets : this.props.fTickets}/>
                    <button onClick={() => this.handleAmountTickets()} className="btn">Показать еще 5 билетов!</button>

                </div>
            </div>
        )
    }
}

export default Home