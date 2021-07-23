const baseURL = 'https://front-test.beta.aviasales.ru/';

export async function getTicketsAPI() {
    let responseSearch = await fetch(`${baseURL}search`, {method: 'GET'});
    let searchId = await responseSearch.json();
    let responseTickets = await fetch(`${baseURL}tickets?searchId=${searchId.searchId}`, {method: 'GET'});
    let data = await responseTickets.json();
    return data;
}