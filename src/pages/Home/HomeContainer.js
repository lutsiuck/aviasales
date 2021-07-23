import {connect} from "react-redux";
import Home from "./Home";
import {getTickets, sortTickets, filterTickets} from "../../redux/tikets-reducer";

let mapStateToProps = (state) => {
    return {
        tickets: state.ticketsAPI.tickets,
        fTickets: state.ticketsAPI.filterTickets,
        error: state.ticketsAPI.error,
    }
};

let mapDispatchToProps = {
    getTickets,
    sortTickets,
    filterTickets,
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer