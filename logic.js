console.log("RadhaKrishna")
const boxes = document.querySelectorAll(".box")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const box5 = document.querySelector(".box5")
const box6 = document.querySelector(".box6")
const box7 = document.querySelector(".box7")
const box8 = document.querySelector(".box8")
const box9 = document.querySelector(".box9")
const turn = document.querySelector(".turn")
const winer = document.querySelector(".win")
const gameover = document.querySelector(".gameover")

let a = "X"
function check() {
    if (a == "X") {
        a = "O"
    }
    else if (a == "O") {
        a = "X"
    }
}

function win() {
    if (box1.innerText === "X" && box2.innerText === "X" && box3.innerText === "X") {
        winer.innerText = "Winner is X" 
        box1.style.backgroundColor = "pink"
        box2.style.backgroundColor = "pink"
        box3.style.backgroundColor = "pink"
    }
    else if (box1.innerText === "O" && box2.innerText === "O" && box3.innerText === "O") {
        winer.innerText = "Winner is O" 
        box1.style.backgroundColor = "pink"
        box2.style.backgroundColor = "pink"
        box3.style.backgroundColor = "pink"
    }
    else if (box4.innerText === "O" && box5.innerText === "O" && box6.innerText === "O") {
        winer.innerText = "Winner is O" 
        box4.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box6.style.backgroundColor = "pink"
    }
    else if (box4.innerText === "X" && box5.innerText === "X" && box6.innerText === "X") {
        winer.innerText = "Winner is X"  
        box4.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box6.style.backgroundColor = "pink"
    }
    else if (box7.innerText === "O" && box8.innerText === "O" && box9.innerText === "O") {
        winer.innerText = "Winner is O" 
        box7.style.backgroundColor = "pink"
        box8.style.backgroundColor = "pink"
        box9.style.backgroundColor = "pink"
    }
    else if (box7.innerText === "X" && box8.innerText === "X" && box9.innerText === "X") {
        winer.innerText = "Winner is X" 
        box7.style.backgroundColor = "pink"
        box8.style.backgroundColor = "pink"
        box9.style.backgroundColor = "pink"
    }
    else if (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") {
        winer.innerText = "Winner is X"  
        box1.style.backgroundColor = "pink"
        box4.style.backgroundColor = "pink"
        box7.style.backgroundColor = "pink"
    }
    else if (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O") {
        winer.innerText = "Winner is O" 
        box1.style.backgroundColor = "pink"
        box4.style.backgroundColor = "pink"
        box7.style.backgroundColor = "pink"
    }
    else if (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O") {
        winer.innerText = "Winner is O"  
        box2.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box8.style.backgroundColor = "pink"
    }
    else if (box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X") {
        winer.innerText = "Winner is X" 
        box2.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box8.style.backgroundColor = "pink"
    }
    else if (box3.innerText === "X" && box6.innerText === "X" && box9.innerText === "X") {
        winer.innerText = "Winner is X" 
        box3.style.backgroundColor = "pink"
        box6.style.backgroundColor = "pink"
        box9.style.backgroundColor = "pink"
    }
    else if (box3.innerText === "O" && box6.innerText === "O" && box9.innerText === "O") {
        winer.innerText = "Winner is O"  
        box3.style.backgroundColor = "pink"
        box6.style.backgroundColor = "pink"
        box9.style.backgroundColor = "pink"
    }
    else if (box1.innerText === "O" && box5.innerText === "O" && box9.innerText === "O") {
        winer.innerText = "Winner is O"  
        box1.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box9.style.backgroundColor = "pink"
    }
    else if (box1.innerText === "X" && box5.innerText === "X" && box9.innerText === "X") {
        winer.innerText = "Winner is X" 
        box1.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box9.style.backgroundColor = "pink"
    }
    else if (box3.innerText === "X" && box5.innerText === "X" && box7.innerText === "X") {
        winer.innerText = "Winner is X" 
        box3.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box7.style.backgroundColor = "pink"
    }
    else if (box3.innerText === "O" && box5.innerText === "O" && box7.innerText === "O") {
        winer.innerText = "Winner is O" 
        box3.style.backgroundColor = "pink"
        box5.style.backgroundColor = "pink"
        box7.style.backgroundColor = "pink"
    }
}



Array.from(boxes).forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText == "" && a == "X") {
            element.innerText = a
            check()

            turn.innerText = `Player ${a} Turn`
        }
        else if (element.innerText == "" && a == "O") {
            element.innerText = a
            check()
            turn.innerText = `Player ${a} Turn`
        }
        win()
if(winer.innerText == "Winner is X" || winer.innerText == "Winner is O")
{
gameover.innerText = "GAME IS OVER\n THANKYOU FOR PLAYING"
setTimeout(() => {
    alert("Please Refresh the page to Play again or press crtl+R")
}, 1000);
}
    })
})