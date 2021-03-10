// var letsPlay = "Input R, P, or S to play!";
// var ReqInput = ["R", "P", "S"];


// function game () {
//     var User = prompt("Input R, P, or S to play!");
//     if(User == null || User == "") {
//         function notValid () {
//             alert("That's not a valid Input");{
//             }
//         }
//     }
// }

var game = prompt("Input RPS to play");
game = game.toLowerCase();
var notValid = alert("That's not a valid input");
var validChoices = ["R", "P", "S", "rock", "paper", "scissors"];
var randomIndex = Math.floor(Math.random() * (validChoices.length - 0)+ 0);
var computerChoice = validChoices[randomIndex];

alert("The Computer Chose" + computerChoice);
alert("You chose" + game);

if (game === computerChoice) {
    alert("its a tie!");
} else if (
    (game === "R", "rock" && computerChoice === "S", "scissors") ||
    () ||
    () ||
) {
    alert("You win!");
} else {
    alert("You lost!");
}

