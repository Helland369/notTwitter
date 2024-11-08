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
                ${feedLoopPost()}
        </main>
        
    `;
}

function feedLoopPost() {
    let feed = "";

    for (let i = 0; i < model.data.usr.length; i++) {
        const usr = model.data.usr[i];

        if (usr.post.length > 0 && usr.fname && usr.lname) {
            feed += `
        <div onclick="feedClickUser(${i})">
            <a>${usr.fname} ${usr.lname}</a>
        <div>
        `;
            for (let x = 0; x < usr.post.length; x++) {
                feed += `
                <div>
                   <p>${usr.post[x]}</p>
                </div>
                <hr><br>
                `;
            }
        }
    }
    return feed;
}

function feedProfile() {
    main.innerHTML = `
    <main>
        <header id="profileHead">
        ${model.data.tempStorage.fname}
        ${model.data.tempStorage.lname}
        </header>
        <div>${loopPostsOfSelectedusr()}</div>
    </main>
`;
}
