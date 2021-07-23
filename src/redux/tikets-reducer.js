import { getTicketsAPI } from '../api/api'

const GET_TICKETS = 'GET_TICKETS';
const FILTER_TICKETS = 'FILTER_TICKETS';

let initialState = {
    tickets: [],
    filterTickets: [],
};

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS:
            return {...state, tickets: action.tickets};
        case FILTER_TICKETS:
            return {...state, filterTickets: action.filterTickets};
        default:
            return state;
    }
};

export const getTickets = () => {
    return async (dispatch) => {
        const data = await getTicketsAPI();
        dispatch({type: GET_TICKETS, tickets: data.tickets})
    }
};

export const sortTickets = (typeSort, tickets, isFilter) => {
    return (dispatch) => {
        switch (typeSort) {
            case 'cheapest':
                tickets.sort((a, b) => a.price - b.price);
                break;
            case 'fastest':
                tickets.sort((a, b) => {
                    let durationA = a.segments[0].duration + a.segments[1].duration;
                    let durationB = b.segments[0].duration + b.segments[1].duration;
                    return durationA - durationB;
                });
                break;
            case 'optimal':
                tickets.sort((a, b) => {
                    let optimalA = a.segments[0].duration + a.segments[1].duration + a.price;
                    let optimalB = b.segments[0].duration + b.segments[1].duration + b.price;
                    return optimalA - optimalB;
                });
                break;
        }
        isFilter ? dispatch({type: FILTER_TICKETS, filterTickets: tickets}) : dispatch({type: GET_TICKETS, tickets})
    }
};

export const filterTickets = (currentCheckbox, tickets) => {
    return (dispatch) => {
            let newTickets = tickets.filter(t => {
                return currentCheckbox.includes(t.segments[0].stops.length) || currentCheckbox.includes(t.segments[1].stops.length)
            });
        dispatch({type: FILTER_TICKETS, filterTickets: newTickets})
    }
}

export default ticketsReducer;