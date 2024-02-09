let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let msgBox = document.querySelector(".msgBox");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnX = true;
    count = 0;
    msgBox.classList.add("hide");
    enabledboxes();
    for (let box of boxes) {
        box.style.backgroundColor = "#E4DFDA";
    }
}

const showWinner = (winner) => {
    msg.innerText = `${winner} HAS WON`;
    msgBox.classList.remove("hide");
    disabledboxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                boxes[pattern[0]].style.backgroundColor = "#DCCAAF";
                boxes[pattern[1]].style.backgroundColor = "#DCCAAF";
                boxes[pattern[2]].style.backgroundColor = "#DCCAAF";
                return true;
            }
        }
    }
}

const gameDrawn = () => {
    msg.innerText = "GAME IS DRAWN";
    msgBox.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        count ++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDrawn();
        }
    })
})

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);