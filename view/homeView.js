//
//
//
function homeView() {
    main.innerHTML = `
        <header id="homeHead">
            <h1 id="homeTitle">Not Twitter</h1>
        </header>
        <main id="homeMain">
            <div>
                <button id="signupBtn" onclick="signup()">Signup</button>
                <button id="loginBtn" onclick="login()">Login</button>
            </div>
            <div>
                <p>Main content</p>
            </div>
        </main>
        <footer id="homeFooter">
            <ul>
                <li>x</li>
                <li>y</li>
                <li>z</li>
            </ul>
        </footer>
    `;
}
