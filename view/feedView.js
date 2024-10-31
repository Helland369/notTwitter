//
//
//
function feedView() {
    main.innerHTML = `
        <header id="feedHead">
            <h1>Not Twitter</h1>
        </header>
        <nav id="feedNav">
            <ul>
                <li onclick="goToHome()">Home</li>
                <li onclick="goToProfile()">Profile</li>
                <li>Friends</li>
                <li onclick="goToSettings()">Settings</li>
            </ul>
        </nav>
        <main id="feedMain">
                ${feedController()}
        </main>
        
    `;
}
