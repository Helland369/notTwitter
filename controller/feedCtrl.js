//
//
//
function feedController() {
    let feed = "";

    for (let i = 0; i < model.usr.length; i++) {
        feed += `
        <div>
            <a>${model.usr[i].fname} ${model.usr[i].lname}</a>
            <p>${model.usr[i].post[0]}</p>
        <div>
        <hr><br>
        `;

        console.log(i);
    }
    return feed;
}
