//
//
//
function startView() {
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
            <button>Create account</button>
            <br><br><br>
            <h1>Login</h1><br><br>
            <label for="usrLogin">User Name:</label><br>
            <input type="text" id="usrLogin" placeholder="User name"><br>
            <label for="usrPassword">Password:</label><br>
            <input type="text" id="usrPassword" placeholder="password"><br>
        </form>
    `;
}
