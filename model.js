//
//
//
const main = document.getElementById("main");

// TODO // null value is temp value, need to be changed
const model = {
    app: {
        page: "start",
    },

    input: {
        search: {
            search: null,
        },

        usrIn: {
            fname: null,
            lname: null,
            usrName: null,
            mail: null,
        },

        delete: {
            areYouSure: false,
            doYouWantToDelete: false,
        },

        edit: {
            bio: null,
            fname: null,
            lname: null,
            usrName: null,
            mail: null,
            image: null,
            password: null,
        },
    },

    usr: [
        {
            id: 1,
            bio: null,
            fname: null,
            lname: null,
            usrName: null,
            mail: null,
            image: null,
            password: null,
            post: [],
            friends: [],
        },

        {
            id: 2,
            bio: "Hei jeg er per askelad, jeg liker grøt",
            fname: "Per",
            lname: "Askelad",
            usrName: "@perask",
            mail: "perask@mail.com",
            image: "imageLink",
            password: "123123",
            post: [],
            friends: [],
        },
    ],
};
