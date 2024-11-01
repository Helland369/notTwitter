//
//
//
updateView();
function updateView() {
    const page = model.app.page;
    if (page === "home") homeView();
    else if (page === "signup") signupView();
    else if (page === "login") loginView();
    else if (page === "feed") feedView();
    else if (page === "profile") profileView();
    else if (page === "settings") settingsView();
    else if (page === "delete") deleteView();
    else if (page === "deleteTwo") deleteViewTwo();
    else if (page === "deleteThree") deleteViewThree();
}
