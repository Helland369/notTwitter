//
//
//
function profileView() {
    main.innerHTML = `
<main>
    <header id="profileHead">Profile page</header>
        <nav id="profileNav">
            <ul>
                <li>Home</li>
                <li>Feed</li>
                <li>Settings</li>
                <li>Pofile</li>
            </ul>
        </nav>
        <div id="profileMain">
            <div>
                <form onsubmit="profileUsrMakePost()">
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
