var score = 0, hit = 0, miss = 0;
let divisionResult;
var playing = false;

// Count down function 
const span = document.querySelector("#time");

let timer = parseInt(span.innerHTML);
let intervalRef;

let countDown = () =>
{
    timer--;
    span.innerHTML = timer;

    if (timer <= 0)
    {
        clearInterval(intervalRef);
        //saveData();
        displayResult();
    }
}

intervalRef = setInterval(countDown, 1000)

// Moving random divs
$(document).ready(function()
{
    animateDiv('#box1');
    animateDiv('#box2');
    animateDiv('#box3');
    animateDiv('#box4');
    animateDiv('#box5');
    animateDiv('#box6');
    animateDiv('#box7');
    animateDiv('#box8');
    animateDiv('#box9');
    animateDiv('#box10');
});

function makeNewPosition()
{
    var w = $(window).width() - 50;
    var h = $(window).height() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
}

function animateDiv(myclass)
{
    var newq = makeNewPosition();
    $(myclass).animate({top: newq[0], left: newq[1]}, 4000, function()
    {
        animateDiv(myclass);
    });
};

// Cursor 
let questionContainer = document.querySelector('.question-container');
document.addEventListener('mousemove', function(e)
{
    let x = e.clientX;
    let y = e.clientY;
    questionContainer.style.left = x + "px";
    questionContainer.style.top = y + "px";
});

// Add question
let randomQuestion = () =>
{
    let div = document.querySelector('#cursor');

    let firstNum, secondNum;
    do
    {
        firstNum = Math.floor(Math.random() * 25) + 1;
        secondNum = Math.floor(Math.random() * 25) + 1;
    } while(firstNum < secondNum || (firstNum % secondNum) != 0);
    divisionResult = parseInt(firstNum / secondNum);
    let questionOutput = `${firstNum} / ${secondNum}`;
    div.innerHTML = questionOutput;
    
    let correctAnswerPosition = 1 + Math.floor(10 * Math.random());
    document.getElementById("container" + correctAnswerPosition).innerHTML = divisionResult; // fill one box with one correct answer

    // fill other boxes with different wrong answer
    var answer = [divisionResult];
    for (let i = 1; i < 11; i++)
    {
        if (i != correctAnswerPosition)
        {
            let wrongAnswer;
            do
            {
                wrongAnswer = Math.floor((1 + Math.floor(25 * Math.random())) / (1 + Math.floor(25 * Math.random())));
            }
            while (answer.indexOf(wrongAnswer) > -1); 

            document.getElementById("container" + i).innerHTML = wrongAnswer;

            answer.push(wrongAnswer);
        }
    }
}

window.addEventListener("load", randomQuestion);
// window.addEventListener("click", randomQuestion);

// Calculate score
function resultCalc(selectedID)
{
    let number = document.getElementById(selectedID);
    let textContent = number.textContent;
    
    console.log(`${textContent}`);
    if (textContent == divisionResult)
    {
        score++;
        hit++;
        document.getElementById("score-value").innerHTML = score;
        document.getElementById("hit-value").innerHTML = hit;
        randomQuestion();
    }
    else 
    {
        if (score > 0)
        {
            score--;
            document.getElementById("score-value").innerHTML = score;
            miss++;
            document.getElementById("miss-value").innerHTML = miss;
            randomQuestion();
        }
        else
        {
            miss++;
            document.getElementById("miss-value").innerHTML = miss;
            randomQuestion();

            if (timer == 0 || miss >= 6)
            {
                displayResult();
            }
        }
    }
}

// Display result
function displayResult()
{
    document.getElementById("result-board-container").style.display = "block";
    document.getElementById("result-board-container").innerHTML = "<p>Game Over!</p><p>Your Name: </p><p>Your Age: </p><p>Your score: </p>" + score + "<p>Your hit:</p>" + hit + "<p>Your Miss: </p>" + miss;
}


