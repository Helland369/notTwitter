//
// for makes it easy to click
//
function signupView() {
    main.innerHTML = `
        ${headerView()}
        <form id="regForm" name="regForm" onsubmit="signupController(event)">
            <h1>Create an account</h1>
            <label for="fname">First Name:</label><br>
            <input type="text" id="fname" placeholder="First name" autocomplete="off"><br>

            <label for="lname">Last Name:</label><br>
            <input type="text" id="lname" placeholder="Last name" autocomplete="off"><br>

            <label for="usrName">User Name:</label><br>
            <input type="text" id="usrName" placeholder="User name" autocomplete="off"><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" placeholder="Email" autocomplete="off"> <br>

            <label for="regPassword">Password</label> <br>
            <input type="password" id="regPassword" placeholder="password" autocomplete="off"> <br>

            <label for="regPassword2">Re-enter password</label> <br>
            <input type="password" id="regPassword2" placeholder="Re-enter password" autocomplete="off"> <br><br>

            <input type="submit" value="Create account">
            <br><br><br>
        </form>
        ${footerView()}
    `;
}
