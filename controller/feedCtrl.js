//
//
//
function feedController() {
    let feed = "";

    for (let i = 0; i < model.data.usr.length; i++) {
        const usr = model.data.usr[i];

        if (usr.post.length > 0 && usr.fname && usr.lname) {
            feed += `
        <div>
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
