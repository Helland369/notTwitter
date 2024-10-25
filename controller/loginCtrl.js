//
//
//
function login() {
    model.app.page = "login";
    updateView();
}

function loginCtrl() {
    const nameIn = document.getElementById("usrLogin").value;
    const passIn = document.getElementById("usrPassword").value;

    for (let i = 0; i < model.data.usr.length; i++) {
        if (
            nameIn === model.data.usr[i].usrName &&
            passIn === model.data.usr[i].password
        ) {
            model.app.usrId = model.data.usr[i].id;
            model.app.page = "feed";
            updateView();
            return true;
        }
    }

    for (let i = 0; i < model.data.usr.length; i++) {
        if (nameIn !== model.data.usr[i].usrName) {
            alert("Wrong user name!!");
            return false;
        } else if (passIn !== model.data.usr[i].password) {
            alert("Wrong password!!");
            return false;
        } else {
            alert("Wrong input");
            return false;
        }
    }
}
