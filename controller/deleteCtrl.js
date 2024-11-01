//
//
//
function deleteCtrl() {
    const usrId = model.app.usrId;
    const index = model.data.usr.findIndex((usr) => usr.id === usrId);

    if (index !== -1) {
        model.data.usr.splice(index, 1); // index = the index of the user we want to delete. 1 = we want to remove 1 item.
        goToHome();
    }
}
