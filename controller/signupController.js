//
//
//
function signup() {
    model.app.page = "signup";
    updateView();
}

function signupController(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const usrName = document.getElementById("usrName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("regPassword").value;
    const password2 = document.getElementById("regPassword2").value;

    if (fname == null || fname == "") {
        alert("You need to enter a First name!");
        return false;
    } else {
        model.input.usrIn.fname = fname;
        console.log(model.input.usrIn.fname);
    }
    if (lname == null || lname == "") {
        alert("You need to enter a Last name!");
        return false;
    } else {
        model.input.usrIn.lname = lname;
        console.log(model.input.usrIn.lname);
    }
    if (usrName == null || usrName == "") {
        alert("You need to enter a User name!");
        return false;
    } else {
        model.input.usrIn.usrName = usrName;
        console.log(model.input.usrIn.usrName);
    }
    if (email == null || email == "") {
        alert("You need to enter an email!");
        return false;
    } else {
        model.input.usrIn.mail = email;
        console.log(model.input.usrIn.mail);
    }
    if (password !== password2) {
        alert("You need to enter a password");
        return false;
    } else {
        model.input.usrIn.password = password;
        console.log(model.input.usrIn.password);
    }

    model.usr[0].fname = model.input.usrIn.fname;
    model.usr[0].lname = model.input.usrIn.lname;
    model.usr[0].usrName = model.input.usrIn.usrName;
    model.usr[0].mail = model.input.usrIn.mail;
    model.usr[0].password = model.input.usrIn.password;

    model.app.page = "login";
    updateView();

    return true; //loginController();
}
