//
//
//
function profile() {
    model.app.page = "profile";
    updateView();
}

function profileUsrPost() {
    let html = "";
    const id = model.app.usrId;

    const usr = model.data.usr.find((usr) => usr.id === id); // find user id so that we can print posts made by the user
    if (usr && usr.fname && usr.lname && usr.post.length > 0) {
        for (let i = 0; i < model.data.usr.length; i++) {
            if (usr.post[i]) {
                html += `
            <div>
                <p>${usr.fname} ${usr.lname}</p>
                <p>${usr.post[i]}</p>
                <hr><br>
            </div>
            `;
            }
        }
    }

    return html;
}

function profileUsrMakePost(event) {
    event.preventDefault();

    const usrPost = document.getElementById("usrPost").value;
    const id = model.app.usrId;

    const usr = model.data.usr.find((usr) => usr.id === id);

    model.input.usrIn.post.push(usrPost);

    usr.post = model.input.usrIn.post;

    console.log(model.input.usrIn.post);

    profile();
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
