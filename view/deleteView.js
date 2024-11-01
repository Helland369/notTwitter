//
//
//
function deleteView() {
    main.innerHTML = `
    <div>
        <h1>Are you sure you want to delete your account?</h1>
        <button onclick="goToDeleteTwo()">Yes I want to delete my account!</button>
        <button onclick="goToProfile()">No I do not want to delete my account!</button>
    </div>
`;
}

function deleteViewTwo() {
    main.innerHTML = `
    <div>
        <h1>How sure are you that you want to delete your account?</h1>
        <button onclick="goToFeed()">Not sure at all</button>
        <button onclick="goToDeleteThree()">Oh I'am very sure!!</button>
    </div>
    `;
}

function deleteViewThree() {
    main.innerHTML = `
    <div>
        <h1>So you are sure you want to delete your account huh?</h1>
        <button onclick="deleteCtrl()">Yes delete my account!!</button>
    </div>
    `;
}
