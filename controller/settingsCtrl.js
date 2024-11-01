//
//
//
function settingsCtrl(event) {
    event.preventDefault();

    const fname = document.getElementById("settingsChangeFname").value;
    model.input.usrIn.fname = fname;
    const lname = document.getElementById("settingsChangeLname").value;
    model.input.usrIn.lname = lname;
    const usrName = document.getElementById("settingsChangeUsrName").value;
    model.input.usrIn.usrName = usrName;
    const email = document.getElementById("settingsCgangeEmail").value;
    model.input.usrIn.mail = email;
    const password = document.getElementById("settingsChangePassword").value;
    model.input.usrIn.password = password;

    const usrId = model.app.usrId;
    const index = model.data.usr.findIndex((usr) => usr.id === usrId);

    if (index !== -1) {
        if (fname !== null || fname !== "") {
            model.data.usr[index].fname = model.input.usrIn.fname;
        }
        if (lname !== null || lname !== "") {
            model.data.usr[index].lname = model.input.usrIn.lname;
        }
        if (usrName !== null || usrName !== "") {
            model.data.usr[index].usrName = model.input.usrIn.usrName;
        }
        if (email !== null || email !== "") {
            model.data.usr[index].mail = model.input.usrIn.mail;
        }
        if (password !== null || password !== "") {
            model.data.usr[index].password = model.input.usrIn.password;
        }
    } else {
        console.log("Edit user ERROR");
    }
}
