fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(end => myCards(end));

let sec = document.getElementById("main")
let input = document.getElementById("inp")

input.addEventListener("keyup", function(e){
    if(e.code == "Enter"){
    sec.innerHTML = ""
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(end => myCards(end));
    }
});

function myCards(things){
    for(let i = 0; i < things.length; i++){
        if(things[i].title.toLowerCase().includes(input.value.toLowerCase())){
        sec.innerHTML += `<div class = "tani">
        <img src="${things[i].image}" alt="poto">
        <h3>${things[i].title}</h3>
        <p>${things[i].price} $</p>
    </div>`;
    }
}
}
let btn = document.getElementById("clic")
let burger = document.querySelector(".burger")
btn.onclick = function(){
    burger.classList.toggle("sheweva")
    btn.classList.toggle("rotate")
}


let change = document.getElementById("change")
let storedUsername = localStorage.getItem("username");
if(storedUsername){
    change.innerText = storedUsername;
}