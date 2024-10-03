//
//
//
function loginView() {
    main.innerHTML = `
        <form>
            <h1>Login</h1><br><br>
            <label for="usrLogin">User Name:</label><br>
            <input type="text" id="usrLogin" placeholder="User name"><br>
            <label for="usrPassword">Password:</label><br>
            <input type="text" id="usrPassword" placeholder="password"><br>
            <br><br>
            <button>Login</button>
        </form>
    `;
}
