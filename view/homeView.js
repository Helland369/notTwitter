//
//
//
function homeView() {
    main.innerHTML = `
    ${headerView()}
        <main id="homeMain">
            <div>
               <button id="signupBtn" onclick="signup()">Signup</button>
                <button id="loginBtn" onclick="login()">Login</button>
            </div>
            <div>
                <p>Main content</p>
            </div>
        </main>
    ${footerView()}
    `;
}
