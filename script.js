let youraction = document.querySelector("#players");
let AIaction = document.querySelector("#AI");
let yourscore = document.querySelector("#yourscore");
let AIscore = document.querySelector("#AIscore");
let results = document.querySelector("#results");
let yourscorecount = 0;
let AIscorecount = 0;

let actions = {
    rock :"👊",paper: "✋",scissors: "✌️",
    0:"👊",1: "✋",2: "✌️"
}

addEventListener("click", function(value){
    playgame(value.target.id);
})

function playgame(action){
    if(action == "rock" || action == "paper" || action == "scissors"){
        let random = Math.floor(Math.random()*3);
        AIaction.innerHTML = actions[random];
        youraction.innerHTML = actions[action];

        if((AIaction.innerHTML == "👊" && youraction.innerHTML == "✋") ||
        (AIaction.innerHTML == "✋" && youraction.innerHTML == "✌️")||
        (AIaction.innerHTML == "✌️" && youraction.innerHTML == "👊"))
        {
            yourscorecount = yourscorecount + 1;
            yourscore.innerHTML = yourscorecount;
        }
        if(
        (youraction.innerHTML == "👊" && AIaction.innerHTML == "✋") ||
        (youraction.innerHTML == "✋" && AIaction.innerHTML == "✌️")||
        (youraction.innerHTML == "✌️" && AIaction.innerHTML == "👊"))
        {
            AIscorecount = AIscorecount + 1;
            AIscore.innerHTML = AIscorecount;
        }
    }
    if (AIscorecount == 10){
        results.style.visibility = "visible";
        results.innerHTML = `<p>AI Won!</p>
                            <h6>retry?</h6>
                            <h6 onclick="reset()" id="retry">🔁</h6>`
    }
    if (yourscorecount == 10){
        results.style.visibility = "visible";
        results.innerHTML = `<p>You Won!</p>
                            <h6>retry?</h6>
                            <h6 onclick="reset()" id="retry">🔁</h6>`
    }
}

function reset(){
    results.style.visibility = "hidden";
    yourscore.innerHTML = 0;
    AIscore.innerHTML = 0;
    yourscorecount = 0;
    AIscorecount = 0;
}