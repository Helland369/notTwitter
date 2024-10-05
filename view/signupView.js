//
// for makes it easy to click
//
function signupView() {
    main.innerHTML = `
        ${headerView()}
        <form id="regForm" name="regForm">
            <h1>Create an account</h1>
            <label for="fname">First Name:</label><br>
            <input type="text" name="fname" id="fname" placeholder="First name" autocomplete="off"><br>
            <label for="lname">Last Name:</label><br>
            <input type="text" name="lname" id="lname" placeholder="Last name" autocomplete="off"><br>
            <label for="usrName">User Name:</label><br>
            <input type="text" name="usrName" id="usrName" placeholder="User name" autocomplete="off"><br>
            <label for="email">Email:</label><br>
            <input type="email" name="email" id="email" placeholder="Email" autocomplete="off"> <br>
            <label for="regPassword">Password</label> <br>
            <input type="password" name="regPassword" id="regPassword" placeholder="password" autocomplete="off"> <br>
            <label for="regPassword2">Re-enter password</label> <br>
            <input type="password" name="regPassword2" id="regPassword2" placeholder="Re-enter password" autocomplete="off"> <br><br>
            <input type="submit" value="Create account" onsubmit="signupController()">
            <br><br><br>
        </form>
        ${footerView()}
    `;
}
