
let icons = document.querySelectorAll(".icon")

let commentry = document.querySelector("#commentry")

let yourscore = document.querySelector("#yourscore")

let computerscore = document.querySelector("#computerscore")

let yourscoreindex = 0

let computerscoreindex = 0


function computerchoice() {                           //  generating computerchoice with Math.random()
   let compchoices = ["stone","paper","scissor"]     
   let index = Math.floor(Math.random()*3)
   return compchoices[index]
}

function playgame(userchoice) {                   // the main function to play the game and condition checking

   
let compchoice = computerchoice()

   
    if (userchoice==compchoice) {                        // checking each condition
        commentry.innerHTML = "Draw"
    }
    else if(userchoice=="stone"){
        if (compchoice=="paper") {
            computerscoreindex++
            commentry.innerHTML = `${compchoice} beats ${userchoice}, You lost`
            computerscore.innerHTML = computerscoreindex
        }
        else if(compchoice=="scissor"){
            yourscoreindex++
            commentry.innerHTML = `${userchoice} beats ${compchoice}, You win`
            yourscore.innerHTML = yourscoreindex
        }
    }
    else if(userchoice=="paper"){
        if (compchoice=="scissor") {
            computerscoreindex++
            commentry.innerHTML = `${compchoice} beats ${userchoice}, You lost`
            computerscore.innerHTML = computerscoreindex
        }
        else if(compchoice=="stone"){
            yourscoreindex++
            commentry.innerHTML = `${userchoice} beats ${compchoice}, You win`
            yourscore.innerHTML = yourscoreindex
        }
    }
    else{
        if (compchoice=="stone") {
            computerscoreindex++
            commentry.innerHTML = `${compchoice} beats ${userchoice}, You lost`
            computerscore.innerHTML = computerscoreindex
        }
        else if(compchoice=="paper"){
            yourscoreindex++
            commentry.innerHTML = `${userchoice} beats ${compchoice}, You win`
            yourscore.innerHTML = yourscoreindex
        }
    }
    
}


icons.forEach((choice)=>{                      //    adding eventlisteners for each choice
    
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id")    

        playgame(userchoice)
    })

  
})