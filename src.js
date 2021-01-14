score1 = document.getElementById("sc1");
score2 = document.getElementById("sc2");

// img1 = document.getElementById("left1")
// img12 = document.getElementById("left2")
// img13 = document.getElementById("left3")
img2 = document.getElementById("right")

statement = document.getElementById("state")
update = document.getElementById("updates")
let s1 = 0;
let s2 = 0;
function play2() {
    statement.innerHTML = ""
    update.innerHTML=""
    let ne = ["rock", "paper", "scissor"]
    let re2 = ne[Math.floor(Math.random()*3)]

    console.log(re2)

    if(re2 == "scissor") {
        s1+=1
        score1.innerHTML = s1;
        img2.src = "assets/scissor.png"
        update.innerHTML = "Player chooses Rock and computer chooses Scissor"
    }
    else if(re2 == "paper") {
        s2+=1
        score2.innerHTML = s2;
        img2.src = "assets/paper.png"
        update.innerHTML = "Player chooses Rock and computer chooses Paper"
    }
    else {
        img2.src = "assets/rock.png"
        update.innerHTML = "Player chooses Rock and computer chooses Rock"
    }
    if(s1 === 5) {
        statement.innerHTML = "Player Won"
        s1 = 0
        s2 = 0
        score1.innerHTML = 0;
        score2.innerHTML = 0;
    }
    if(s2 === 5) {
        statement.innerHTML = "Computer Won"
        s1 = 0
        s2 = 0
        score1.innerHTML = 0;
        score2.innerHTML = 0;
    }
}

function play1() {
    statement.innerHTML = ""
    let ne = ["rock", "paper", "scissor"]
    let re2 = ne[Math.floor(Math.random()*3)]

    console.log(re2)
    if(re2 == "scissor") {
        s2+=1
        score2.innerHTML = s2;
        img2.src = "assets/scissor.png"
        update.innerHTML = "Player chooses Paper and computer chooses Scissor"
    }
    else if(re2 == "rock") {
        s1+=1
        score1.innerHTML = s1;
        img2.src = "assets/rock.png"
        update.innerHTML = "Player chooses Paper and computer chooses Rock"
    }
    else{
        img2.src = "assets/paper.png"
        update.innerHTML = "Player chooses Paper and computer chooses Paper"
    }
    if(s1 === 5) {
        statement.innerHTML = "Player Won"
        s1 = 0
        s2 = 0
        score1.innerHTML = 0;
        score2.innerHTML = 0;
    }
    if(s2 === 5) {
        statement.innerHTML = "Computer Won"
        s1 = 0
        s2 = 0
        score1.innerHTML = 0;
        score2.innerHTML = 0;
    }
}

function play3() {
    statement.innerHTML = ""
    let ne = ["rock", "paper", "scissor"]
    let re2 = ne[Math.floor(Math.random()*3)]

    console.log(re2)
    if(re2 == "paper") {
        s1+=1
        score1.innerHTML = s1;
        img2.src = "assets/paper.png"
        update.innerHTML = "Player choose Scissor and computer chooses Paper"
    }
    else if(re2 == "rock") {
        s2+=1
        score2.innerHTML = s2;
        img2.src = "assets/rock.png"
        update.innerHTML = "Player chooses Scissor and computer chooses Rock"
    }
    else{
        img2.src = "assets/scissor.png"
        update.innerHTML = "Player chooses Scissor and computer chooses Scissor"
    }
    if(s1 === 5) {
        statement.innerHTML = "Player Won"
        s1 = 0
        s2 = 0
        score1.innerHTML = 0;
        score2.innerHTML = 0;
    }
    if(s2 === 5) {
        statement.innerHTML = "Computer Won"
        s1 = 0
        s2 = 0
        score1.innerHTML = 0;
        score2.innerHTML = 0;
    }
}