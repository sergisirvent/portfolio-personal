const database = {
    home: {
        items: [
            {
                id: "asteroids",
                title: "Asteroids",
                language: "C++",
                image: "miniAsteroids.jpg",
                filter: "mainProjects games"
            },
            {
                id: "IT",
                title: "Ice Tiles",
                language: "Unity",
                image: "logo.png",
                filter: "mainProjects games developing"
            },
            {
                id: "Jetpac",
                title: "Jetpac",
                language: "C++",
                image: "jetpacMenu.jpg",
                filter: "mainProjects games"
            },
            {
                id: "MC",
                title: "Moon Cresta",
                language: "C++",
                image: "mooncrestacard.jpg",
                filter: "mainProjects games"
            },
            {
                id: "TLOA",
                title: "The last of Angle",
                language: "Unity VR",
                image: "TLOA.jpg",
                filter: "mainProjects"
            },
            {
                id: "CG",
                title: "Crystal Guardians",
                language: "Unity",
                image: "miniaturaCG.jpg",
                filter: "mainProjects"
            },
            {
                id: "SM",
                title: "Shooter Mole",
                language: "Unreal engine",
                image: "shooterMole.jpg",
                filter: "protoype"
            },
            {
                id: "Sudoku",
                title: "Sudoku solver",
                language: "Prototype",
                image: "sudokuMini.jpg",
                filter: "protoype"
            },
            {
                id: "LT",
                title: "Lasered Toad",
                language: "Level Design",
                image: "miniaturaportal.jpg",
                filter: "other"
            },
        ]
    },
    works: [
        {
            id: "asteroids",
            head: {
                title: "Asteroids",
                description: "A recreation of the famous arcade game, with some improvements, developed with C++ and only using vectorial drawing."
            },
            body: {
                image: "miniAsteroids.jpg",
                title: "Asteroids - Individual project",
                technology: "C++",
                content: [
                    "Travel around the space with your spaceship shooting at different asteroids that will generate smaller asteroids if they can as in the original game. Fight agains two types of UFO and survive as many rounds as you can, because this game is infinite as long as you have at least one life.",
                    "Also this project has a binary file where all the user data is saved. You can access to this document with an independent program that is also in the project (Admin Console). This project is developed with C++ and supported with the ESAT graphic library."
                ],
                links: {
                    video: "https://youtu.be/0X2a1g3q4rE",
                    download: "https://drive.google.com/file/d/1fNklp-N2BtIaxbEKm5L0ql37Gr3iGIxL/view?usp=sharing"
                },
            },
            sections: [
                {
                    title: "Login Page",
                    paragraphs: [
                        "Login system where the user can access to the game with credentials. The game works with credits, the game doesn't start if the user doesn't have enough credits to play.",
                        "This page has validation process, the credentials must exist and validation of credits."

                    ],
                    image: "logingif.gif"
                },
                {
                    title: "Register page",
                    paragraphs: [
                        "Page where the player can create an account to play. The user has to fill all the text fields in the screen and click the button to create an account.",
                        "This page has validation process, all fields are mandatory, passwords must be equal and username is unique."
                    ],
                    image: "registerGif.gif"
                }
            ]
        }
    ]
}
