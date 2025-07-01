const choices = ["🪨", "📃", "✂️"];
const constplayer = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

function playGame(choice){
    let final = "";
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    if (choice === computerChoice){
        final = "It's a Tie!";
    }

    else{
        switch(choice){
            case "🪨":
                final = (computerChoice === '✂️') ? "You Win" : "You Lose";
                break;
            case "📃":
                final = (computerChoice === '🪨') ? "You Win" : "You Lose";
                break;
            case "✂️":
                final = (computerChoice === '📃') ? "You Win" : "You Lose";
                break;
        }
    }
    player.textContent = `Player: ${choice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    result.textContent = final;

    result.classList.remove("green", "red");

    switch(final)
    {
        case "You Win":
            result.classList.add("green");
            break;
        case "You Lose":
            result.classList.add("red");
            break;
    }
}