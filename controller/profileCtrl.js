//
//
//
function profile() {
    model.app.page = "profile";
    updateView();
}

function profileUsrPost() {
    let html;

    for (let i = 0; i < model.usr.length; i++) {
        html += `
            <div>
                <p>${model.usr[0].fname} ${model.usr[0].lname}</p>
                <p>${model.usr[0].post[i]}</p>
                <hr><br>
            </div>
            `;
    }
    return html;
}

function profileUsrMakePost() {
    let usrPost = document.getElementById("usrPost").value;
    model.input.usrIn.post.push(usrPost);

    model.usr[0].post = model.input.usrIn.post;

    console.log(model.input.usrIn.post);
    profile();
}
