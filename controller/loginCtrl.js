//
//
//
function login() {
    model.app.page = "login";
    updateView();
}

function loginController(event) {
    event.preventDefault();

    const nameIn = document.getElementById("usrLogin").value;
    const passIn = document.getElementById("usrPassword").value;
    const usrName = model.usr[0].usrName;
    const usrPass = model.usr[0].password;
    let count = 3;

    if (nameIn === usrName && passIn === usrPass) {
        model.app.page = "feed";
        updateView();
        return true;
    } else if (nameIn === null || nameIn === "") {
        alert("Wrong user name!");
    } else if (passIn === null || nameIn === "") {
        alert("Wrong password");
    }

    return false;
}
