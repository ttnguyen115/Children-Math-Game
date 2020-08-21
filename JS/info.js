let playGame = document.querySelector("#play");
let name, age, yScore, yHit, yMiss;
let yourHit, yourMiss, yourScore, yourName, yourAge;

let gameStart = () =>
{
    // Get value from HTML
    name = document.querySelector("#name").value;
    age = document.querySelector("#age-choice").value;
    yScore = document.getElementById("score-value").textContent;
    yHit = document.getElementById("hit-value").textContent;
    yMiss = document.getElementById("miss-value").textContent;
    
    // Save data into local storage variables
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Score", yScore);
    localStorage.setItem("Hit", yHit);
    localStorage.setItem("Miss", yMiss);

    // Set data ready to display
    yourName = localStorage.getItem("Name");
    yourAge = localStorage.getItem("Age");
    yourScore = localStorage.getItem("Score");
    yourHit = localStorage.getItem("Hit");
    yourMiss = localStorage.getItem("Miss");

    //alert(`Hello ${yourName} and your age is ${yourAge}`);
}

playGame.addEventListener("click", gameStart);

