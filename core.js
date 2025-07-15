btns = document.querySelectorAll(".butt")
reset = document.querySelector(".reset_game")
// btns.forEach(
//     (btn) => {
//         btn.addEventListener("click", ()=>{
//        console.log("button was clicked!!")
// })
//     }
// )

// reset.addEventListener("click", ()=>{
//        console.log("Reset button was clicked!!")}

winningsets = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

let checkwin = () => {
    for (let set of winningsets) {
        one = btns[set[0]].innerText;
        two = btns[set[1]].innerText;
        three = btns[set[2]].innerText;

        if (one === two && two === three && one !== "" && two !== "" && three !== "") {
            return true;
        }
    }
    return false;
}
// checkwin();

let playerx = true;
// btns.forEach(
//     (btn) => {
//         btn.addEventListener("click", () => {
//             if(btn.innerText ==""){
//                 if(playerx){
//                     btn.innerText= "X";
//                     playerx= false;
//                 }else{
//                     btn.innerText= "O";
//                     playerx= true;
//                 }
//                 if(checkwin()){
//                     console.log("Winner found!!")

//                 }
//             }
//         })
//     }
// )

// let win= false;

let winner = null;
let msg = document.querySelector("#pop_msg")
let newgame = document.querySelector("#new_game")

let count = 0;

let box = document.querySelector("#popup_box")

let play = (btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "") {
            if (playerx) {
                btn.innerText = "X";
                playerx = false;
                count++;
                btn.style.transform = "scale(1.10)";
                setTimeout(
                    () => {
                        btn.style.transform = "scale(1)";
                    }, 150
                )
            } else {
                btn.innerText = "O";
                playerx = true;
                count++;
                btn.style.transform = "scale(1.10)";
                setTimeout(
                    () => {
                        btn.style.transform = "scale(1)";
                    }, 150
                )
            }
            if (checkwin()) {
                count=0;
                for (let btn of btns) {
                    if (btn.innerText === "") {
                        btn.classList.add("disable");
                    }
                }
                winner = playerx ? "O" : "X";
                msg.innerText = `Congratulations 💐💐 Player ${winner} !!!`;
                msg.classList.remove("hide");
                msg.classList.add("show");
                newgame.classList.remove("hide");
                newgame.classList.add("show");
                box.classList.remove("hide");
                box.classList.add("show");
                reset.classList.add("disable");
                newgame.addEventListener("click", () => {
                    newgame.style.transform = "scale(1.10)";
                    setTimeout(
                        () => {
                            newgame.style.transform = "scale(1)";
                        }, 150
                    )
                    for (let btn of btns) {
                        btn.innerText = "";
                        btn.classList.remove("disable")
                    }
                    reset.classList.remove("disable");
                    msg.classList.remove("show");
                    msg.classList.add("hide");
                    newgame.classList.remove("show");
                    newgame.classList.add("hide");
                    box.classList.remove("show");
                    box.classList.add("hide");
                })
            }

            if (count === 9) {
                count=0;
                msg.innerText = "Its a draw !!! Try again...";
                newgame.style.bottom= "25px";
                msg.classList.remove("hide");
                msg.classList.add("show");
                newgame.classList.remove("hide");
                newgame.classList.add("show");
                box.classList.remove("hide");
                box.classList.add("show");
                reset.classList.add("disable");
                newgame.addEventListener("click", () => {
                    newgame.style.transform = "scale(1.10)";
                    setTimeout(
                        () => {
                            newgame.style.transform = "scale(1)";
                        }, 150
                    )
                    for (let btn of btns) {
                        btn.innerText = "";
                        btn.classList.remove("disable")
                    }
                    reset.classList.remove("disable");
                    msg.classList.remove("show");
                    msg.classList.add("hide");
                    newgame.classList.remove("show");
                    newgame.classList.add("hide");
                    box.classList.remove("show");
                    box.classList.add("hide");
                })
            }
        }
    })
}

for (let btn of btns) {
    play(btn);
}

reset.addEventListener("click", () => {
    for (let btn of btns) {
        btn.innerText = "";
    }
    reset.style.transform = "scale(1.10)";
    setTimeout(
        () => {
            reset.style.transform = "scale(1)";
        }, 150
    )
    count=0;
})




