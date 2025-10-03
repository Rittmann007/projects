let scroll=document.querySelector("#main")
scroll.addEventListener("mouseover",()=>{
    scroll.classList.add("overflow")
})
scroll.addEventListener("mouseout",()=>{
    scroll.classList.remove("overflow")
})

let hamburg=document.querySelector("#hamburg")
let leftdiv = document.querySelector("#leftdiv")
hamburg.addEventListener("click",()=>{
    leftdiv.style.left="0%"
})
let cross = document.querySelector("#cross").lastElementChild
cross.addEventListener("click",()=>{
    leftdiv.style.left="-100%"
})