//
//
//
const main = document.getElementById("main");

// TODO // null value is temp value, need to be changed
const model = {
    app: {
        page: "home",
    },

    input: {
        search: {
            search: null,
        },

        usrIn: {
            fname: "",
            lname: "",
            usrName: "",
            mail: "",
            password: "",
        },

        deleteUsr: {
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
            bio: "Hei jeg er Per askelad, jeg liker grøt",
            fname: "Per",
            lname: "Askelad",
            usrName: "@perask",
            mail: "perask@mail.com",
            image: "imageLink",
            password: "123123",
            post: ["I dag var jeg på eventyr!"],
            friends: [],
        },

        {
            id: 3,
            bio: "Hei jeg er Pål askelad, jeg liker grøt",
            fname: "Pål",
            lname: "Askelad",
            usrName: "@pålask",
            mail: "pål@mail.com",
            image: "imageLink",
            password: "123123",
            post: ["I dag spiste jeg grøt"],
            friends: [],
        },

        {
            id: 4,
            bio: "Hei jeg er Espen askelad, jeg liker grøt",
            fname: "Espen",
            lname: "Askelad",
            usrName: "@espen",
            mail: "espen@mail.com",
            image: "imageLink",
            password: "123123",
            post: ["I dag så jeg et troll"],
            friends: [],
        },

        {
            id: 5,
            bio: 'Amatører! Idioter! Pappskaller og hengerumper! "kjøtthuer"',
            fname: "Egon",
            lname: "Olsen",
            usrName: "@Egon",
            mail: "Egon@olsenbanden.com",
            image: "imageLink",
            password: "123123",
            post: ["Jeg planleger å rane en bank"],
            friends: [],
        },

        {
            id: 6,
            bio: "Helmaks, Egon!",
            fname: "Benny",
            lname: "Fransen",
            usrName: "@benny",
            mail: "benny@olsenbanden.com",
            image: "imageLink",
            password: "123123",
            post: ["Helmaks, Egon! Hva for en god ide"],
            friends: [],
        },

        {
            id: 7,
            bio: "Ække det farlig a... ?",
            fname: "Kjell",
            lname: "Jensen",
            usrName: "@kejll",
            mail: "kjell@olsenbanden.com",
            image: "imageLink",
            password: "123123",
            post: ["Ille nervøs jeg!"],
            friends: [],
        },

        {
            id: 8,
            bio: "Kom Egon, vi går! Nei det gjør vi ikke, vi tar trikken.",
            fname: "Dynamitt",
            lname: "Harry",
            usrName: "@dynamitt",
            mail: "haryy@olsenbanden.com",
            image: "imageLink",
            password: "123123",
            post: ["Bang sa det!!"],
            friends: [],
        },

        {
            id: 9,
            bio: "Til sørlandet? Samma hvilket land det er vel.",
            fname: "Valborg",
            lname: "Jensen",
            usrName: "@valborg",
            mail: "valborg@olsenbanden.com",
            image: "imageLink",
            password: "123123",
            post: ["Åsså var det han Egon da.."],
            friends: [],
        },
    ],
};
