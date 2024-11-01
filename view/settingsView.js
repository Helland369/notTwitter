//
//
//
function settingsView() {
    main.innerHTML = `
    <div>
        <h1>Settings</h1>
        <form onsubmit="settingsCtrl(event)">
            <label for="settingsChangeFname">Change first name</label>
            <input id="settingsChangeFname" placeholder="Change first name">
            <br>
            <label for="settingsChangeLname">Change last name</label>
            <input id="settingsChangeLname" placeholder="Change last name">
            <br>
            <label for="settingsChangeUsrName">Change user name</label>
            <input id="settingsChangeUsrName" placeholder="Change user name">
            <br>
            <label for="settingsCgangeEmail">Change email</label>
            <input id="settingsCgangeEmail" placeholder="Change email">
            <br>
            <label for="settingsChangePassword">Change password</label>
            <input id="settingsChangePassword" placeholder="Change password">
            <br>
            <input type="submit" value="Save Changes">
        </form>
        <br><hr>
        <button onclick="goToProfile()">Go back to proflie</button>
        <br><br><hr>
        <button onclick="goToDelete()">Delete account</button>
        <hr>
    </div>
    `;
}
