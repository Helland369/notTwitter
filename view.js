//
//
//
// TODO // make view functions // use switch case ? page !== null ???
updateView();
function updateView() {
    const page = model.app.page;
    if (page === "start") startView();
    else if (page === "feed") feedView();
    // etc
}
