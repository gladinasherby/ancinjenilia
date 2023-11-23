const storyTree = {
    start: {
        text: "Once upon a time, in a land far, far away, there was a magical garden filled with colorful flowers and talking animals. What do you want to do?",
        choices: {
            explore: {
                text: "Explore the enchanted garden.",
                next: "magicDoor",
            },
            rest: {
                text: "Rest by the sparkling pond.",
                next: "sleepingBunny",
            },
        },
    },
    magicDoor: {
        text: "As you explore, you discover a mysterious door covered in vines. What do you do?",
        choices: {
            openDoor: {
                text: "Open the magical door.",
                next: "wonderland",
            },
            ignoreDoor: {
                text: "Ignore the door and continue exploring.",
                next: "butterflyGrove",
            },
        },
    },
    sleepingBunny: {
        text: "You find a cozy spot and see a bunny taking a nap. What do you want to do?",
        choices: {
            wakeBunny: {
                text: "Gently wake up the bunny.",
                next: "playfulBunny",
            },
            leaveBunny: {
                text: "Leave the bunny to sleep.",
                next: "butterflyGrove",
            },
        },
    },
    wonderland: {
        text: "The magical door opens to a wonderland of candy trees and chocolate rivers. What's your next adventure?",
        choices: {
            candyTrees: {
                text: "Visit the candy tree forest.",
                next: "sweetSurprise",
            },
            chocolateRivers: {
                text: "Explore the chocolate rivers.",
                next: "chocolateWaterfall",
            },
        },
    },
    playfulBunny: {
        text: "The bunny wakes up and invites you to play. What game do you want to play?",
        choices: {
            hideAndSeek: {
                text: "Play hide and seek.",
                next: "hideAndSeek",
            },
            tag: {
                text: "Play a game of tag.",
                next: "tagGame",
            },
        },
    },
    butterflyGrove: {
        text: "You arrive at a grove filled with colorful butterflies. What do you want to do?",
        choices: {
            chaseButterflies: {
                text: "Chase the butterflies.",
                next: "catchingButterflies",
            },
            watchButterflies: {
                text: "Sit quietly and watch the butterflies.",
                next: "happyEnding",
            },
        },
    },
    sweetSurprise: {
        text: "In the candy tree forest, you find a sweet surprise! What did you discover?",
        choices: {
            candyCastle: {
                text: "A magical candy castle.",
                next: "castleAdventures",
            },
            candyFriends: {
                text: "Candy creatures that come to life.",
                next: "friendshipJourney",
            },
        },
    },
    chocolateWaterfall: {
        text: "You encounter a waterfall made of chocolate. What do you want to do?",
        choices: {
            chocolateSwim: {
                text: "Take a chocolate swim.",
                next: "swimmingFun",
            },
            chocolateFalls: {
                text: "Watch the chocolate waterfall.",
                next: "happyEnding",
            },
        },
    },
    hideAndSeek: {
        text: "You and the bunny play hide and seek. Where do you hide?",
        choices: {
            behindTree: {
                text: "Hide behind a colorful tree.",
                next: "happyEnding",
            },
            flowerBush: {
                text: "Hide in a blooming flower bush.",
                next: "happyEnding",
            },
        },
    },
    tagGame: {
        text: "You and the bunny play a fun game of tag. Who do you want to be 'it'?",
        choices: {
            bunnyIsIt: {
                text: "Let the bunny be 'it'.",
                next: "happyEnding",
            },
            youAreIt: {
                text: "You decide to be 'it'.",
                next: "happyEnding",
            },
        },
    },
    catchingButterflies: {
        text: "You have a great time catching butterflies. What do you do with the butterflies?",
        choices: {
            butterflyDance: {
                text: "Have a magical butterfly dance.",
                next: "happyEnding",
            },
            butterflyRelease: {
                text: "Release the butterflies back into the grove.",
                next: "happyEnding",
            },
        },
    },
    castleAdventures: {
        text: "You explore the candy castle and find secret passages. What's your next adventure?",
        choices: {
            royalTeaParty: {
                text: "Join a royal tea party with candy characters.",
                next: "happyEnding",
            },
            candyTreasure: {
                text: "Search for hidden candy treasures.",
                next: "happyEnding",
            },
        },
    },
    friendshipJourney: {
        text: "The candy creatures invite you on a journey. Where do you want to go?",
        choices: {
            marshmallowMeadow: {
                text: "Visit the marshmallow meadow.",
                next: "happyEnding",
            },
            lollipopLand: {
                text: "Explore the land of giant lollipops.",
                next: "happyEnding",
            },
        },
    },
    swimmingFun: {
        text: "You enjoy a delightful chocolate swim. What do you do after swimming?",
        choices: {
            chocolateFeast: {
                text: "Have a chocolate feast.",
                next: "happyEnding",
            },
            chocolateNap: {
                text: "Take a nap by the chocolate waterfall.",
                next: "happyEnding",
            },
        },
    },
    happyEnding: {
        text: "Congratulations! You had a magical adventure in the enchanted garden. The end.",
    },
};

let currentScene = "start";

function displayScene() {
    const scene = storyTree[currentScene];
    document.getElementById('content').innerHTML = `<p>${scene.text}</p>`;

    if (scene.choices) {
        const choicesElement = document.getElementById('choices');
        choicesElement.innerHTML = "<p>Choices:</p>";
        for (const choice in scene.choices) {
            choicesElement.innerHTML += `<button id="${choice}" onclick="makeChoice('${choice}')">${scene.choices[choice].text}</button>`;
        }
        attachEventListeners();
    } else {
        document.getElementById('choices').innerHTML = "";
    }
}

function attachEventListeners() {
    for (const choice in storyTree[currentScene].choices) {
        document.getElementById(choice).addEventListener("click", function () {
            makeChoice(choice);
        });
    }
}

function makeChoice(choice) {
    const scene = storyTree[currentScene];
    if (scene.choices && scene.choices[choice]) {
        currentScene = scene.choices[choice].next;
        displayScene();
    } else {
        console.log("Invalid choice. Please try again.");
    }
}

// Display the initial scene
displayScene();
