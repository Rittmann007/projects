let but = document.querySelectorAll(".button")
let restartbutton = document.querySelector("#restart")
let newgamebutton = document.querySelector("#newgame")
let winmassege = document.querySelector("#maindiv").firstElementChild;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
turn =true;
click=0
newvar = 0
function buttonenable() {
    for (const button of but) {
        button.disabled=false
    }
}
function buttondisable() {
    for (const button of but) {
        button.disabled=true
    }
}
window.addEventListener("load",()=>{
    newvar=0
    restartbutton.classList.add("hidden")
})

but.forEach(element => {
    element.addEventListener("click",()=>{
        click++;
        newvar++;
        if(newvar==1){
            restartbutton.classList.remove("hidden")
        }
        if(turn==true){
            element.innerText="o"
            turn=false
        }
        else if(turn==false){
            element.innerText="x"
            turn=true
        }
        if(checkwin()){
             buttondisable()
            restartbutton.classList.add("hidden")
             winmassege.classList.remove("hidden")
             newgamebutton.classList.remove("hidden")
             click=0
        }
        else if(click==9 && checkwin()==false){
             winmassege.innerText="Draw"
             restartbutton.classList.add("hidden")
                winmassege.classList.remove("hidden")
                newgamebutton.classList.remove("hidden")
                click=0
        }
    })
});
 function checkwin() {
    win=false
    for (const element of winpatterns) {
        let pos1 = but[element[0]].innerText
        let pos2 = but[element[1]].innerText
        let pos3 = but[element[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1==pos2 && pos2==pos3) {
                win=true
                winmassege.innerText=`Winner is ${pos1}`
            }
        }
    }
    return win
}
newgamebutton.addEventListener("click",()=>{
    turn=true
    but.forEach(element => {
        element.innerText=""
    });
    buttonenable()
    restartbutton.classList.remove("hidden")
    newgamebutton.classList.add("hidden")
    winmassege.classList.add("hidden")
})
restartbutton.addEventListener("click",()=>{
    turn=true
    but.forEach(element => {
        element.innerText=""
    });
})