//
//
//
function settingsView() {
    main.innerHTML = `
    <div>
        <h1>Settings</h1>
        <form>
            <label for="settingsChangeFname">Change first name</label>
            <input id="settingsChangeFname" placeholder="Change first name">

            <label for="settingsChangeLname">Change last name</label>
            <input id="settingsChangeLname" placeholder="Change last name">

            <label for="settingsChangeUsrName">Change user name</label>
            <input id="settingsChangeUsrName" placeholder="Change user name">

            <label for="settingsCgangeEmail">Change email</label>
            <input id="settingsCgangeEmail" placeholder="Change email">

            <label for="settingsChangePassword">Change password</label>
            <input id="settingsChangePassword" placeholder="Change password">
        </form>

        <button>Delete account</button>
    </div>
`;
}
