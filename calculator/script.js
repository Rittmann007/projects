let but = document.querySelectorAll("button")
let input = document.querySelector("input")
let string = ""
for (const button of but) {
    button.addEventListener("click",()=>{
        if(button.innerText=="="){
            string=eval(string)
            input.value=string
        }
       else if (button.innerText=="C") {
            string=""
            input.value=string
        } else {
            string=string+button.innerText
input.value=string
        }

    })
}
