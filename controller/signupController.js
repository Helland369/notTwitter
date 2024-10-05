//
//
//
function signup() {
    model.app.page = "signup";
    updateView();
}

/* function signupController() {
 *     let fname = document.getElementById("fname").value;
 *     let lname = document.getElementById("lname").value;
 *     let usrName = document.getElementById("usrName").value;
 *     let email = document.getElementById("email").value;
 *     let password = document.getElementById("regPassword").value;
 *     let password2 = document.getElementById("regPassword2").value;
 *
 *     if (!fname || !lname || !usrName || !email || !password || !password2) {
 *         alert("You need to fillout all form fields");
 *     }
 * } */

// forms; get stuff from the form
// first ["form"] = name/id of form
// second ["form"] = name/id of input

function signupController(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value; //document.forms["regForm"]["fname"].value;
    const lname = document.getElementById("lname").value; //document.forms["regForm"]["lname"].value;
    const usrName = document.getElementById("usrName").value; //document.forms["regForm"]["usrName"].value;
    const email = document.getElementById("email").value; //document.forms["regForm"]["email"].value;
    const password = document.getElementById("regPassword").value; //document.forms["regForm"]["regPassword"].value;
    const password2 = document.getElementById("regPassword2").value; //document.forms["regForm"]["regPassword2"].value;

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
    //form.submit();

    return true;
}
