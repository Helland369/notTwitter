//
//
//
function profile() {
    model.app.page = "profile";
    updateView();
}

function profileUsrPost() {
    let html;

    for (let i = 0; i < model.data.usr.length; i++) {
        if (
            model.data.usr[0].fname != null &&
            model.data.usr[0].lname != null &&
            model.data.usr[0].post[i] != null
        ) {
            html += `
            <div>
                <p>${model.data.usr[0].fname} ${model.data.usr[0].lname}</p>
                <p>${model.data.usr[0].post[i]}</p>
                <hr><br>
            </div>
            `;
        }
    }
    return html;
}

// function profileUsrPost() {
//     const id = model.app.usrId;
//     const html = "";

//     for (let i = 0; i < model.data.usr.length; i++) {
//         if (model.data.usr[id].post[i] !== null) {
//             html += `
//             <div>
//                 <p>${model.data.usr[id].fname} ${model.data.usr[id].lname}</p>
//                 <p>${model.data.usr[id].post}</p>
//             </div>
//             `;
//         }
//     }
//     return html;
// }

function profileUsrMakePost() {
    let usrPost = document.getElementById("usrPost").value;
    model.input.usrIn.post.push(usrPost);

    model.data.usr[0].post = model.input.usrIn.post;

    console.log(model.input.usrIn.post);

    //profile();
    profileView();
}
