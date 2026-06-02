const database = {
    home: {
        items: [
            {
                id: "MENTAT",
                title: "Mentat Engine",
                language: "C++ · OpenGL · Android",
                image: "mentat_engine_card.jpg",
                filter: "mainProjects"
            },
            {
                id: "RD",
                title: "Railgun Defender: AEGIS",
                language: "Unity",
                image: "RD.png",
                filter: "mainProjects"
            },
            {
                id: "JIMBO",
                title: "Jimbo Delta Tower",
                language: "Unreal Engine C++",
                image: "JIM_BACK.png",
                filter: "mainProjects games"
            },
            {
                id: "COM",
                title: "Compendium",
                language: "Unity",
                image: "COM_Back.png",
                filter: "mainProjects"
            },
            {
                id: "IAT",
                title: "Terror map tool",
                language: "Unreal Engine C++",
                image: "alien.png",
                filter: "prototype"
            },
            {
                id: "IAP",
                title: "AI-based enemies",
                language: "Unreal Engine C++",
                image: "AI_Enemies.png",
                filter: "prototype"
            },
            {
                id: "YNK",
                title: "Yuki No Kazan",
                language: "C++ & OpenGL",
                image: "YNK.png",
                filter: "mainProjects"
            },
            {
                id: "asteroids",
                title: "Asteroids",
                language: "C++",
                image: "miniAsteroids.jpg",
                filter:  "games"
            },
            {
                id: "CHESS",
                title: "Chendless",
                language: "Unity",
                image: "Chendless.png",
                filter: "mainProjects games"
            },
            {
                id: "IT",
                title: "Ice Tiles",
                language: "Unity",
                image: "logo.png",
                filter: "games developing"
            },
            {
                id: "Jetpac",
                title: "Jetpac",
                language: "C++",
                image: "jetpacMenu.jpg",
                filter: "games"
            },
            {
                id: "MC",
                title: "Moon Cresta",
                language: "C++",
                image: "mooncrestacard.jpg",
                filter: "games"
            },
            {
                id: "Jetpac",
                title: "Jetpac",
                language: "C++",
                image: "jetpacMenu.jpg",
                filter: "games"
            },
            {
                id: "TLOA",
                title: "The last of Angle",
                language: "Unity VR",
                image: "TLOA.jpg",
                filter: "games prototype"
            },
            {
                id: "CG",
                title: "Crystal Guardians",
                language: "Unity",
                image: "miniaturaCG.jpg",
                filter: "prototype"
            },
            {
                id: "SM",
                title: "Shooter Mole",
                language: "Unreal engine",
                image: "shooterMole.jpg",
                filter: "protoype"
            }
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
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/K-LyWfPCxEo?si=3bdtOe7EzFA1qmD6",
                    videoSectionTitle: "Commented gammeplay by me",
                    videoBtnLabel: "See commented gameplay",
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
                },
                {
                    title: "Best scores",
                    paragraphs: [
                        "Page where 50 best scores are showed. This scores are extracted from the binary file and ordered by bubble sorting algorithm."
                    ],
                    image: "scoresGif.gif"
                },
                {
                    title: "Individual mode",
                    paragraphs: [
                        "Classic mode. The player has 3 lifes and there are infinite rounds. If the highscore is passed, the scores ranking will be updated."
                    ],
                    image: "singleGif.gif"
                },
                {
                    title: "Multiplayer mode",
                    paragraphs: [
                        "Same game mode as single player but with players alternating when they die.",
                        "Two players must be logged in to play this gamemode."
                    ],
                    image: "multiGif.gif"
                },
                {
                    title: "Combat mode",
                    paragraphs: [
                        "Extra gamemode where two players fight each other. The second player is controlled with other keys.",
                        "Two players must be logged in to play this gamemode."
                    ],
                    image: "combatGif.gif"
                },
                {
                    title: "Saving games",
                    paragraphs: [
                        "The player can save his progress and load the game the next time he opens the game or when he dies.",
                        "This system works with an extra binary file."
                    ],
                    image: "saveGif.gif"
                },
                {
                    title: "Admin console",
                    paragraphs: [
                        "Independent program in the project where the admin can add, edit, delete and see all the users that are in the binary file of users.",
                        "This programs needs admin credentials to be inicialized."
                    ],
                    image: "consoleGif.gif"
                },
            ]
        },
        {
            id: "IT",
            head: {
                title: "Ice Tiles",
                description: "Puzzle game with an integrated procedural algorithm for puzzle creation, developed with Unity."
            },
            body: {
                image: "logo.png",
                title: "Ice Tiles - Individual project",
                technology: "Unity",
                content: [
                    "Go through the different ice islands to reach the objective. Test your memory and try to remember the ice paths that are revealed by the sun rays. Be careful with the penguins and try to get advantage with the power ups, but watch out, they are not always good...",
                    "It was meant to be a simple puzzle game and in the end I decided to improve it and implement a procedural alogorithm inside, this makes the game less repetitive. I also dressed it up and tried to make it my first fully individual project in Unity."
                ],
                links: {
                    download: "https://drive.google.com/file/d/1u4ybL86crHR3Ds7BoiB-cDEURsOilgDH/view?usp=sharing"
                },
            },
            sections: [
                {
                    title: "Ice paths",
                    paragraphs: [
                        "The ice tiles that make up the ice island are identical. Use the sun rays to melt the soft ice and discover the correct path.",
                        "Now, you are ready to memorize the path and reach the objective."

                    ],
                    image: "PathGif.gif"
                },
                {
                    title: "Be careful with soft ice",
                    paragraphs: [
                        "If you choose to walk on a tile that does not belong to the hard ice path, you will fall into the sea and you will have to start the level again."

                    ],
                    image: "BrokenIce.gif"
                },
                {
                    title: "Procedural generation",
                    paragraphs: [
                        "Thanks to rule-based procedural generation, the player will find a different challenge every time he re-enters a level.",
                        "Say goodbye to prefabricated and repetitive levels."

                    ],
                    image: "allPaths.gif"
                },
                {
                    title: "Penguins",
                    paragraphs: [
                        "Try to avoid the penguins, they will try to do anything to get you away from their home.",
                        "They may look adorable, but I don't recommend you touching them."

                    ],
                    image: "Enemy.gif"
                },
                {
                    title: "Power ups",
                    paragraphs: [
                        "Shining diamonds that conceal great power. The decision to take them is optional as it can be beneficial or a bad decision.",
                        "It is up to you to decide..."

                    ],
                    image: "PowerUpGif.gif"
                }
            ]
        },
        {
            id: "Jetpac",
            head: {
                title: "Jetpac",
                description: "A recreation of the famous arcade game developed with C++ using sprites and supported by the ESAT graphic library."
            },
            body: {
                image: "jetpacMenu.jpg",
                title: "Jetpac - Individual project",
                technology: "C++",
                content: [
                    "Your first step will be to assemble the spaceship, then refuel it and get on it. In the game there are four different types of ships in which you will have to do this process. All this while dodging the different enemies in the game.",
                    "Your movement is based on your jetpack, use it to grab the different pieces and to fuel the ship. Also the player has a shoot to defend himself."
                ],
                links: {
                    download: "https://drive.google.com/file/d/1EF8VG-5fTy9PbUILGqok1cdU3IxrMHwN/view",
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/MVbF2QhI1ps?si=AVy1_yHphUTD86oU",
                    videoSectionTitle: "Commented gammeplay by me",
                    videoBtnLabel: "See commented gameplay"
                },
            },
            sections: [
                {
                    title: "Main menu",
                    paragraphs: [
                        "Menu that tries to simulate the original.",
                        "Here the player can choose the number of players in the game (with the numeric numbers)."

                    ],
                    image: "menuJetpac.gif"
                },
                {
                    title: "Assembling pieces",
                    paragraphs: [
                        "The player has to collect the spaceship pieces and put them into the disassembled ship."

                    ],
                    image: "assemblyGifJet.gif"
                },
                {
                    title: "Fueling",
                    paragraphs: [
                        "When the spaceship is fully assembled, the player has to pick up the fuel and take it to the ship."

                    ],
                    image: "fuelingGif.gif"
                },
                {
                    title: "Shooting",
                    paragraphs: [
                        "This type of attack goes through the screen borders and is useful to beat enemies.",
                        "Also has a little effect that gives movement sensation to the player."

                    ],
                    image: "shootGif.gif"
                },
                {
                    title: "Multiplayer mode",
                    paragraphs: [
                        "If the player choose a 2 player game, when one player die, the other one plays, this for every life lost.",
                        "When the turn returns to a player, the game state is the same as when he died."

                    ],
                    image: "multiJetpacGif.gif"
                }
            ]
        },
        {
            id: "MC",
            head: {
                title: "Moon Cresta",
                description: "A recreation of the famous arcade game developed with C++ using sprites and supported by the ESAT graphic library."
            },
            body: {
                image: "mooncrestacard.jpg",
                title: "Moon Cresta - Individual project",
                technology: "C++",
                content: [
                    "Survive through the space with your spaceship. Assemble your ship with other parts of it and improve your attack to destroy several types of enemies.",
                    "Your movement is horizontal and the player has to avoid the enemies that have their own type of movement."
                ],
                links: {
                    download: "https://drive.google.com/file/d/1hpalMz_oahq8cAPEhALmTmDvLoQ12d8G/view",
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/K8RkMcdJcYI?si=BHItBm1qpIDzYgmb",
                    videoSectionTitle: "Commented gammeplay by me",
                    videoBtnLabel: "See commented gameplay"
                },
            },
            sections: [
                {
                    title: "Main menu",
                    paragraphs: [
                        "Menu that tries to simulate the original.",
                        "Here the player can choose the number of players in the game (if there is more than one credit, the screen changes)."

                    ],
                    image: "menuMoonCresta.gif"
                },
                {
                    title: "Movement & Combat",
                    paragraphs: [
                        "The player has to shoot enemies and move horizontally across the screen.",
                        "When a round is passed, new enemies will spawn in the screen."

                    ],
                    image: "shootingMC.gif"
                },
                {
                    title: "Assembly phase",
                    paragraphs: [
                        "Sometimes when the player clears a round of enemies, he will have the opportunity to join the next live part of his ship in order to improve his shooting."

                    ],
                    image: "dockingMoonCresta.gif"
                },
                {
                    title: "Different types of shoot",
                    paragraphs: [
                        "When some pieces of the spaceship are destroyed, the player has to control those parts, and the type of shoot may change."

                    ],
                    image: "typeShootMC.gif"
                },
                {
                    title: "Beating a highscore",
                    paragraphs: [
                        "If any of the two players beats the highscore, this player has the opportunity to put his name in the screen for the next round."

                    ],
                    image: "recordMoonCresta.gif"
                }
            ]
        },
        {
            id: "TLOA",
            head: {
                title: "The Last of Angle",
                description: "Demo of a vr videogame made with SteamVr in Unity."
            },
            body: {
                image: "TLOA.jpg",
                title: "The Last Of Angle - Collaborative project",
                technology: "Unity VR Demo",
                content: [
                    "You are the last survivor from the ANGLE company. Escape from the moon with your moon car and defeat the worm that has taken over the moon.",
                    "Collect the parts, repair the car and defeat the moon worm."
                ],
                contribution: [
                    "Excavation and car pieces mechanic",
                    "Sonar mechanic",
                    "UI design",
                    "Car and shovel modelling and texturing"
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/bxHSVJKPQ30?si=NrgAX-PDXJPInQos",
                    videoSectionTitle: "Video teaser",
                    videoBtnLabel: "See teaser"
                },
            },
            sections: [
                {
                    title: "Excavation",
                    paragraphs: [
                        "In TLOA your main mission is to repair the car and defeat the worm. The pieces are buried so, we need this mechanic to collect them.",
                        "When the player touches an excavation zone with his shovel, one car piece comes out, and then the player can collect it."

                    ],
                    image: "shovelGifTLOA.gif"
                },
                {
                    title: "Sonar",
                    paragraphs: [
                        "As the car parts are buried, the player will need sonar to know where to dig.",
                        "At the touch of a button, a map will appear on the wristband, showing the position of the excavations with an icon."

                    ],
                    image: "sonarGifTLOA.gif"
                },
                {
                    title: "UI design",
                    paragraphs: [
                        "The UI is very important in a game, because it is going to guide and help the player. With this UI I pretend that the player feels that he is in a futuristic suit.",
                        "Blue is our main color, but there are another colors that we use like yellow (objectives & rounds) and red (dead & exit)."

                    ],
                    image: "UI_TLOA.jpg"
                }
            ]
        },
        {
            id: "CG",
            head: {
                title: "Crystal Guardians",
                description: "Demo of an isometric RTS/Roguelike Unity game."
            },
            body: {
                image: "miniaturaCG.jpg",
                title: "Crystal Guardians - Collaborative project",
                technology: "Unity Demo",
                content: [
                    "The enemies of the forest want to steal from you \"one of the greatest discoveries\", precious stones capable of summoning the very power of the gods. Organise your troops to defend your village from those who dare to challenge you! defend your village from those who dare to challenge you!"
                ],
                contribution: [
                    "Tutorial",
                    "Round upgrades mechanic",
                    "Rounds feedback",
                    "Several enemies animations"
                ],
                links: {
                    playTheGame: "https://do-videogames.webs.upv.es/juegos/crystal-guardians/"
                },
            },
            sections: [
                {
                    title: "Tutorial",
                    paragraphs: [
                        "This game has a lot of buildings that the user can use, also has training centers and spells houses. There is a lot of content, so for this reason this tutorial exists.",
                        "I designed all the tutorial. The tutorial guides the player through all of the mechanics of the game and teaches him how to use them."

                    ],
                    image: "tutorialGifCG.gif"
                },
                {
                    title: "Round upgrades",
                    paragraphs: [
                        "When the player clears a certain number of rounds, he has to choose between three upgrades. This is why our game is like a roguelike, because if you survive enough rounds, you can upgrade your defenses.",
                        "There are different types of upgrades: currency, buildings, spells and unit upgrades. You will have to decide which one best suits your strategy"

                    ],
                    image: "UpgradesGifCG.gif"
                },
                {
                    title: "Rounds feedback",
                    paragraphs: [
                        "The time between rounds is very calm, but when a round is coming up, the numbers of the counter become red, and the music becomes darker.",
                        "Such signals alert the player to prepare for the impending round."

                    ],
                    image: "roundsGifCG.gif"
                }
            ]
        },
        {
            id: "SM",
            head: {
                title: "Shooter Mole",
                description: "Shooter/Puzzle/Platform level made in unreal engine 5.1"
            },
            body: {
                image: "shooterMole_Big.jpg",
                title: "Shooter Mole - Collaborative project",
                technology: "Unreal engine",
                content: [
                    "Shooter Mole is a FPS puzzle level designed to test the player's solving skills as well as their FPS aiming skills.",
                    "The main reference of the level is the arcade game called Whac-A-Mole, in which the player has to hit different moles. In this level, all the moles have their own characteristic color, and each color performs a different action, so the player associates colors with specific actions.",
                    "Also there is a LD document and a walkthrough commented by the team."
                ],
                contribution: [
                    "Molehill",
                    "Mole actions",
                    "Doors & Gates zone",
                    "LDD"
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/o_oFNMidwnU",
                    videoSectionTitle: "Gameplay commented by the team",
                    videoBtnLabel: "See commented gameplay"
                },
            },
            sections: [
                {
                    title: "Molehill",
                    paragraphs: [
                        "Molehills are the spawners of the moles. They will be responsible for housing the different moles throughout the levels.",
                        "My job was to create the first base version of this structure."
                    ],
                    image: "moleHillGifSM.gif"
                },
                {
                    title: "Mole actions",
                    paragraphs: [
                        "The gameplay of this level is based on the player shooting the moles so that when they die they perform actions.",
                        "The player must match the colours of the moles to the props in the level."
                    ],
                    image: "actionGifSM.gif"
                },
                {
                    title: "Gates & Doors",
                    paragraphs: [
                        "The level is divided into several zones in which there are different moles with different actions associated with them.",
                        "One of this zones is the Gates & Doors area, in which the player controlled windows and sliding doors thanks to the moles."
                    ],
                    image: "doorsgatesSM.jpg"
                },
                {
                    title: "Tutorial",
                    paragraphs: [
                        "This zone consists of three rooms through which the player will be introduced to the mechanics of shooting the moles in order to trigger events on the map."
                    ],
                    image: "tutoGifSM.gif"
                }
            ]
        },
        {
            id: "RD",
            head: {
                title: "Railgun Defender: AEGIS",
                description: "Rogue-like, tower defense demo made in Unity"
            },
            body: {
                image: "RD.png",
                title: "Railgun Defender: AEGIS - Collaborative project",
                technology: "Unity",
                content: [
                    "This project is a rogue-like tower defense game set in space, where players must defend their core and upgrade their railgun to defeat various enemies and bosses.",
                    "If you want to play it, please click on the buttons below! You can play it directly in your browser or download the Android APK. "
                ],
                contribution: [
                    "Movement",
                    "Bosses",
                    "Round logic",
                    "Tutorial"
                ],
                links: {
                    playTheGame: "https://lnkd.in/gKGRRC66",
                    download: "https://lnkd.in/gr4MzM89",
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/Iy9fGn4GNnU?si=915W5Qu5zSJa9Dqq",
                    videoSectionTitle: "Game trailer",
                    videoBtnLabel: "See game trailer"
                },
            },
            sections: [
                {
                    title: "Defend your core",
                    paragraphs: [
                        "Defend your core and your ship against different types of enemies. Each enemy has a different type of movement and a different shot type.",
                    ],
                    image: "RD_enemies.gif"
                },
                {
                    title: "Improve your stats",
                    paragraphs: [
                        "This project has an upgrade system, each time players level up, they can choose between three upgrades for the rest of the run.",
                        "Discover all the upgrades and try to defend your core from the enemy forces!"
                    ],
                    image: "RD_PU.gif"
                },
                {
                    title: "Final bosses",
                    paragraphs: [
                        "Confront several bosses during your journey.",
                        "Each boss uses a different mechanic trying to eliminate you."
                    ],
                    image: "RD_Boss.gif"
                },
                {
                    title: "Different ships",
                    paragraphs: [
                        "Choose between three different ship to customize your journey.",
                        "Each ship has a different style, find your favourite!"
                    ],
                    image: "RD_Ships.gif"
                },
                {
                    title: "Mobile adaptation",
                    paragraphs: [
                        "Discover our mobile adaptative controls.",
                        "Play Railgun Defender: AEGIS only with one hand, enjoy it wherever you are"
                    ],
                    image: "RD_Mobile.gif"
                }
            ]
        },
        {
            id: "YNK",
            head: {
                title: "Yuki no Kazan",
                description: "Scene created with C++, ImGui and a OpenGl framework"
            },
            body: {
                image: "YNK.png",
                title: "Yuki no Kazan - Collaborative project",
                technology: "C++ & OpenGL",
                content: [
                    "Yuki no Kazan is an scene created with C++, ImGui and a OpenGl framework that reprensents the feudal japan at the foot of a snow-capped volcano.",
                    "Enjoy flying around with the camera, create lights or new entities."
                ],
                contribution: [
                    "Light and entities creation",
                    "Particle system",
                    "ASCII, B&W and Inverse postprocesses",
                    "ImGui main structure",
                    "Flycam with keboard and XBox controller integration",
                    "Draw and render mode control"
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/pqLwFboqesk?si=H5nG-HBTvjfHSQk3",
                    videoSectionTitle: "Video tour",
                    videoBtnLabel: "See video tour"
                },
            }
        },
        {
            id: "COM",
            head: {
                title: "Compendium",
                description: "Turn-based RPG where you cast spells using your voice"
            },
            body: {
                image: "COM_Back.png",
                title: "Compendium - Collaborative project",
                technology: "Unity",
                content: [
                    "In this browser-based adventure, you play as a mage on a quest to defeat a powerful warlock by using spoken incantations from an ancient spellbook.",
                    "Discover enemy weaknesses, earn new scrolls after each level, and expand your magical arsenal as you progress"
                ],
                contribution: [
                    "Map, menu and setting screen",
                    "Turn and user feedback UI",
                    "Level factory",
                    "Compendium visuals",
                    "Backgrounds logic"
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/cW-TPrK2rt8?si=EbO2YWiE9QPYTevZ",
                    videoSectionTitle: "Game trailer",
                    videoBtnLabel: "See game trailer",
                    playTheGame: "https://ferran-44.itch.io/compendium"
                },
            },
            sections: [
                {
                    title: "Cast spells",
                    paragraphs: [
                        "Cast different elemental spells using your voice.",
                        "If you don't remember the spell, read the compendium book."
                    ],
                    image: "COM_Spell.gif"
                },
                {
                    title: "Different scenarios",
                    paragraphs: [
                        "Travel around the 4 different scenarios: fores, beach, volcano and boss cave.",
                    ],
                    image: "COM_Map.gif"
                },
                {
                    title: "Confront several enemies",
                    paragraphs: [
                        "Confront sereval enemies that changes in every scenario and attempt.",
                        "Try to find enemies vulnerabilities!"
                    ],
                    image: "COM_Enemies.gif"
                },
                {
                    title: "Unlock new spells",
                    paragraphs: [
                        "When a combat is finished, a new spell is unlocked on the Compendium.",
                    ],
                    image: "COM_Unlock.gif"
                }
            ]
        },
        {
            id: "CHESS",
            head: {
                title: "Chendless",
                description: "Infinite runner inspired on classical chess."
            },
            body: {
                image: "Chendless.png",
                title: "Chendless - Individual project",
                technology: "Unity",
                content: [
                    "Chess like you’ve never seen it before. In this tactical infinite runner, you move across an endless board while enemy pieces close in on you.",
                    "Every step earns a point, but only by taking down enemies can you keep your multiplier alive. Lose your combo or place your queen on a cracked tile... and it’s checkmate."
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/V6RDFUTUj8g?si=cL-TIkLXGpyzwBy3",
                    videoSectionTitle: "Gameplay",
                    videoBtnLabel: "See gameplay",
                    playTheGame: "https://sergi-sirvent.itch.io/chendless",
                    download: "https://drive.google.com/file/d/1kRDIBCquxu3-pIz2OweEsPpNkL-Imk87/view?usp=sharing"
                }
            },
            sections: [
                {
                    title: "Chess enemies",
                    paragraphs: [
                        "Enemies are inspired on classical chess pieces.",
                        "The enemy king will also crack tiles on his jumps... be careful."
                    ],
                    image: "CH_Enemies.gif"
                },
                {
                    title: "Chekmate",
                    paragraphs: [
                        "Placing your queen on a cracked tile will end your run.",
                        "If a enemy piece touches you with x1 multiplier is also a checkmate."
                    ],
                    image: "CH_Dead.gif"
                },
                {
                    title: "Powerup",
                    paragraphs: [
                        "Become a powerful piece by grabbing the flame powerup.",
                        "Touch enemies with the flame and increase your multiplier."
                    ],
                    image: "CH_Power.gif"
                },
                {
                    title: "Badup",
                    paragraphs: [
                        "This is a bad powerup, and will change your perspective several seconds.",
                        "Avoid them if you want a relaxed run."
                    ],
                    image: "CH_Badup.gif"
                },
            ]
        },
        {
            id: "JIMBO",
            head: {
                title: "Jimbo Delta Tower",
                description: "Jimbo Delta Tower is a 3D puzzle-platformer where the protagonist Jimbo tries to climb the tallest building in the city, dodging guards to test his newly gifted hang glider."
            },
            body: {
                image: "JIM_BACK.png",
                title: "Jimbo Delta Tower - Collaborative project",
                technology: "Unreal Engine C++",
                content: [
                    "In order to fulfil his dream Jimbo wants to climb the biggest building in his city and jump from there with his hang glider.",
                    "Jimbo is challenged to climb to the top of the Thunk Corp. building to test his skills as a hang glider pilot. To do this he has to get through the floors of the building without being caught by the guards, interacting with the environment - moving objects and taking advantage of the wet floors to move quickly across the building levels."
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/aNov3e8jiys?si=9PBZ_Yl0t6SEsCS8",
                    videoSectionTitle: "Gameplay",
                    videoBtnLabel: "See gameplay",
                    download: "https://drive.google.com/file/d/1OukjSR4_xVIml79zcIY5J_FEGcw_djLd/view?usp=sharing"
                },
            },
            sections: [
                {
                    title: "Use perspective",
                    paragraphs: [
                        "Use perspective and rotate the building to discover hidden paths."
                    ],
                    image: "JIM_Persp.gif"
                },
                {
                    title: "Security guards",
                    paragraphs: [
                        "Avoid the security guards and reach the rooftop."
                    ],
                    image: "JIM_Guard.gif"
                },
                {
                    title: "Wet floor",
                    paragraphs: [
                        "Watch out with the wet floor.",
                        "If you slip with this floor you can be on trouble!"
                    ],
                    image: "JIM_Slip.gif"
                },
                {
                    title: "Shelfs",
                    paragraphs: [
                        "Push and drag shelfs to unlock new paths.",
                        "You also can block slipping trajectories and guards vision."
                    ],
                    image: "JIM_Shelf.gif"
                },
            ]
        },
        {
            id: "IAP",
            head: {
                title: "AI-based enemies",
                description: "In this project I implemented several AI-based enemies with different types of behaviour and different types of movement. The project is made with Unreal Engine AI tools like AI perception, EQS and CrowdManager."
            },
            body: {
                image: "AI_Enemies.png",
                title: "AI-based enemies - Individual project",
                technology: "Unreal Engine C++",
                content: [
                "Individual Unreal Engine project focused on designing and implementing multiple enemy archetypes with distinct behaviors and movement styles.",
                "Enemies use Unreal AI tools such as AI Perception for sensing, EQS for decision making (cover, search points), and Crowd Manager for smooth navigation and avoidance in groups.",
                "Includes patrol, investigate, chase and search states, with configurable parameters to tweak difficulty and responsiveness."
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/2t5Vqq836cI?si=k7yndq8qyVj7Qj-J",
                    videoSectionTitle: "Video showcase",
                    videoBtnLabel: "See video showcase",
                },
            },
            sections: [
                {
                    title: "Enemy 1 - Patrol",
                    paragraphs: [
                        "Using behaviour tree and AI perception (Sight)",
                        "Enemy patrols between several points, if the player enters in his sight radius, he will chase him until he attacks him. If the player is lost, the enemy will return to his patrol."
                    ],
                    image: "IAE_E1.gif"
                },
                {
                    title: "Enemy 2 - Bomber",
                    paragraphs: [
                        "Using behaviour tree and EQS",
                        "The bomber approaches the player from behind. If the player looks at him, he runs away using EQS to find a place to hide. If he manages to reach the player, he leaves a bomb ans escapes again to a safe place."
                    ],
                    image: "IAE_E2.gif"
                },
                {
                    title: "Enemy 3 - Crowd formator",
                    paragraphs: [
                        "Using Crowd Manager detour",
                        "Several agents are controlled simultaneously with the Crowd Manager to form letters. With the possibility of dispering into random positions."
                    ],
                    image: "IAE_E3.gif"
                },
            ]
        },

        {
            id: "IAT",
            head: {
                title: "First person AI terror map with tool",
                description: "Demo created with Unreal Engine C++."
            },
            body: {
                image: "alien.png",
                title: "First person AI terror map with tool - Collaorative project",
                technology: "Unreal Engine C++",
                content: [
                "In this demo the map is generated from a png file, using a color code.",
                "The demo has a tile-based movement, using hand made collisions without using the Unreal Engine collision system.",
                "There is also an enemy controlled with different types of behaviours. The player has a cenital camera where can see the position of the enemy and can change the type of movement.",
                "Also there is a tool for transform the map dynamically, changing the position of the walls. This tool is very useful for testing and for creating new maps quickly and to see how is the enemy reacting."
            ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/JGtWoDxTuUM?si=XmqHPDKhpylRzsy8",
                    videoBtnLabel: "See video showcase",
                    videoSectionTitle: "Video showcase",
                },
            },
            sections: [
                {
                    title: "Png map generation",
                    paragraphs: [
                        "The map is generated from a png file, using a color code. Each color represents a different type of tile, like walls, floor or safe zones.",
                    ],
                    image: "mapGeneration.gif"
                },
                {
                    title: "Tile-based movement",
                    paragraphs: [
                        "The player movement is tile-based, and the collisions are hand made, without using the Unreal Engine collision system.",
                        "This type of movement is very useful for this type of game, because it gives a lot of precision to the player and allows us to have more control over the movement and the collisions."
                    ],
                    image: "tileMovement.gif"
                },
                {
                    title: "Cenital view and tooling",
                    paragraphs: [
                        "This view works as a debug view because the player can see the position of the enemy and can change the type of movement and the map distribution.",
                    ],
                    image: "cenitalTool.gif"
                },
            ]
        },

        {
            id: "MENTAT",
            head: {
                title: "Mentat Engine",
                description: "A cross-platform 3D graphics engine developed from scratch in C++ with OpenGL, ECS, Lua scripting, advanced renderers and Android support."
            },
            body: {
                image: "mentat_engine_card.jpg",
                title: "Mentat Engine - Cross-platform 3D Graphics Engine",
                technology: "C++20 · OpenGL · OpenGL ES · Android · Lua · ImGui",
                content: [
                    "Mentat Engine is a 3D graphics engine developed from scratch as part of the Engine Programming course at ESAT. The project focuses on modern C++ architecture, real-time rendering, ECS-based scene management and cross-platform execution.",
                    "The engine includes a desktop editor built with ImGui, XML scene serialization, Lua scripting, a job system for asynchronous tasks, resource management, mesh and texture streaming, and several rendering techniques such as PBR, deferred rendering and shadow mapping.",
                    "One of the main goals of the project was to port the engine to Android while keeping the same scene format and most of the runtime logic shared between PC and mobile."
                ],
                links: {
                    videoYoutubeEmbedLink: "https://www.youtube.com/embed/drM68_Kbt9I?si=2yp_VPnd0FIJywRD",
                    videoSectionTitle: "Engine demo",
                    videoBtnLabel: "Watch engine demo"
                },
            },
            sections: [
                {
                    title: "Editor and XML scene workflow",
                    paragraphs: [
                        "The desktop version includes an ImGui-based editor that allows editing entities, components, cameras, lights, renderizable objects and scripts.",
                        "Scenes are saved and loaded using XML, making it possible to share scene data between the desktop editor and the Android runtime using portable asset paths."
                    ],
                    image: "mentat_editor.gif"
                },
                {
                    title: "Rendering techniques",
                    paragraphs: [
                        "Mentat Engine implements multiple rendering paths and visual techniques, including Phong rendering, PBR rendering, deferred rendering and shadow mapping.",
                        "These renderers were used in different demos to validate lighting, materials, framebuffer usage and multi-pass rendering."
                    ],
                    image: "mentat_renderers.gif"
                },
                {
                    title: "Job system and resource streaming",
                    paragraphs: [
                        "The engine includes a job system used to process asynchronous tasks such as mesh and texture loading.",
                        "The streaming system manages LODs, mipmaps, memory budget and visibility decisions to keep large scenes running efficiently."
                    ],
                    image: "mentat_streaming.gif"
                },
                {
                    title: "Android port",
                    paragraphs: [
                        "The Android version loads the same scene data into the real ECS runtime and renders it using an OpenGL ES backend.",
                        "This port proves that the engine architecture is portable and that platform-specific systems can be isolated without duplicating the whole engine.",
                        "The engine separates shared systems from platform-specific code. The ECS, components, XML scene data, resource flow and scripting logic are shared, while each platform provides its own windowing, filesystem and rendering backend.",
                        "On PC the engine uses desktop OpenGL, GLFW and ImGui. On Android it uses NativeActivity, EGL, OpenGL ES and Android assets through AAssetManager."
                    ],
                    image: "mentat_city_android.gif"
                }
            ]
        },
    ]
}
