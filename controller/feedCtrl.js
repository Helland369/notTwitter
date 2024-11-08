//
//
//
function feedClickUser(storeData) {
    //if (!model.data.usr[storeData]) {
    //    console.log("storeData not found ${storeData}");
    //    return;
    //}
    model.app.selectedUsr = model.data.usr[storeData].id;

    model.data.tempStorage = { ...model.data.usr[storeData] };

    //if (model.data.tempStorage.id) {
    //model.app.selectedUsr = model.data.tempStorage.id;
    //} else {
    //    console.log("No user id");
    //}

    console.log(model.data.tempStorage);
    feedProfile();
}

function loopPostsOfSelectedusr() {
    let html = "";

    for (let i = 0; i < model.data.tempStorage.post.length; i++) {
        html += `
        <div>
        <p>${model.data.tempStorage.fname} ${model.data.tempStorage.lname}</p>
        <p>${model.data.tempStorage.post[i]}</p>
        </div>
        `;
    }
    return html;
}
