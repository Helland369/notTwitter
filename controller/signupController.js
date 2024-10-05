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

function signupController() {
    const form = document.querySelector("#regForm");
    let fname = document.getElementById("fname").value; //document.forms["regForm"]["fname"].value;
    let lname = document.getElementById("lname").value; //document.forms["regForm"]["lname"].value;
    let usrName = document.getElementById("usrName").value; //document.forms["regForm"]["usrName"].value;
    let email = document.getElementById("email").value; //document.forms["regForm"]["email"].value;
    let password = document.getElementById("regPassword").value; //document.forms["regForm"]["regPassword"].value;
    let password2 = document.getElementById("regPassword2").value; //document.forms["regForm"]["regPassword2"].value;

    if (fname !== null || fname !== "") {
        model.input.usrIn.fname = fname;
        console.log(model.input.usrIn.fname);
        return true;
    } else if (fname === null || fname === "") {
        alert("You need to enter a First name!");
        return false;
    }
    if (lname !== null || lname !== "") {
        model.input.usrIn.lname = lname;
        console.log(model.input.usrIn.lname);
        return true;
    } else if (lname === null || lname === "") {
        alert("You need to enter a Last name!");
        return false;
    }
    if (usrName !== null || usrName !== "") {
        model.input.usrIn.usrName == usrName;
        console.log(model.input.usrIn.usrName);
        return true;
    } else if (usrName === null || usrName === "") {
        alert("You need to enter a User name!");
        return false;
    }
    if (email !== null || email !== "") {
        model.input.usrIn.mail = email;
        console.log(model.input.usrIn.mail);
        return true;
    } else if (email === null || email === "") {
        alert("You need to enter an email!");
        return false;
    }
    if (password === password2) {
        model.input.usrIn.password = password;
        console.log(model.input.usrIn.password);
        return true;
    } else if (password !== password2 || password2 !== password) {
        alert("You need to enter a password");
        return false;
    }
    form.submit();
}
