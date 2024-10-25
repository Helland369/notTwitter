//
//
//
function feedController() {
    let feed = "";

    for (let i = 0; i < model.data.usr.length; i++) {
        if (
            model.data.usr[i].post != null &&
            model.data.usr[i].fname &&
            model.data.usr[i].lname
        ) {
            feed += `
        <div>
            <a>${model.data.usr[i].fname} ${model.data.usr[i].lname}</a>
            <p>${model.data.usr[i].post}</p>
        <div>
        <hr><br>
        `;
        }
    }
    return feed;
}
