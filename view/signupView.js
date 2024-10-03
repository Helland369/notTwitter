//
// for makes it easy to click
//
function signupView() {
    main.innerHTML = `
        <form>
            <h1>Create an account</h1>
            <label for="fname">First Name:</label><br>
            <input type="text" id="fname" placeholder="First name"><br>
            <label for="lname">Last Name:</label><br>
            <input type="text" id="lname" placeholder="Last name"><br>
            <label for="usrName">User Name:</label><br>
            <input type="text" id="usrName" placeholder="User name"><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" placeholder="Email"> <br><br>
            <input type="button" value="Create account">
            <br><br><br>
        </form>
    `;
}
