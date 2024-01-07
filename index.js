const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Please Enter a Value");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
    }
    saveData()
}

listContainer.addEventListener("click" , function(input){
    if(input.target.tagName === "LI"){
        input.target.classList.toggle("checked");
        saveData()
    } else if(input.target.tagName === "SPAN"){
        input.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();