//
//
//
function loginView() {
    main.innerHTML = `
        ${headerView()}
        <form id="loginForm" name="loginForm" onsubmit="loginCtrl()">

            <h1>Login</h1><br><br>

            <label for="usrLogin">User Name:</label><br>
            <input type="text" id="usrLogin" placeholder="User name" autocomplete="off"><br>

            <label for="usrPassword">Password:</label><br>
            <input type="password" id="usrPassword" placeholder="password" autocomplete="off"><br>

            <br><br>
            <input type="submit" value="Login">
        </form>
        ${footerView()}
    `;
}
