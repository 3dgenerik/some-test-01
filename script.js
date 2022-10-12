var btn = document.querySelectorAll("button")[0]
var ul = document.querySelector("ul")
var input = document.getElementById("userInput")

const func = ()=>{
    var liNum = document.querySelectorAll("li").length
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)   
    input.value="" 
}

btn.addEventListener("click", ()=>{
    if(input.value.length > 0){
        func()
    }
})

input.addEventListener("keypress", (e)=>{
    if(input.value.length > 0 && e.code == "Enter"){
        func()
    }
})

