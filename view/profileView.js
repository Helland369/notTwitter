//
//
//
function profileView() {
    main.innerHTML = `
<main>
    <header id="profileHead">Profile page</header>
        <nav id="profileNav">
            <ul>
                <li onclick="goToHome()">Home</li>
                <li onclick="goToFeed()">Feed</li>
                <li onclick="goToSettings()">Settings</li>
                <li>Pofile</li>
            </ul>
        </nav>
        <div id="profileMain">
            <div>
                <div>${profileDispUserInfo()}</div>
                <form onsubmit="profileUsrMakePost(event)">
                    <label for="usrPost">Make a post</label>
                    <br>
                    <textarea id="usrPost" name="usrPost" placeholder="What are you thinking?" rows="5px" cols="60px"></textarea><br>
                    <input type="submit" value="Post"><br><hr>
                </form>
            </div>
            <div>${profileUsrPost()}</div>
        </div>
</main>
`;
}

function profileDispUserInfo() {
    const id = model.app.usrId;

    const usr = model.data.usr.find((usr) => usr.id === id);

    const html = `
    <div>
        <p>${usr.fname} ${usr.lname}</p>
        <p>${usr.bio}</p>
        <hr><br>
    </div>
    `;
    return html;
}
