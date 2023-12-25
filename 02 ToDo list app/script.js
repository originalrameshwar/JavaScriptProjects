
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");


function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // listContainer.appendChild(li);
        
        
        listContainer.appendChild(li);
        void li.offsetWidth;
        li.classList.add("show");

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputBox.value = "";
    saveData();
}

// listContainer.addEventListener("click", click(e),false);
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.classList.remove("show");


        setTimeout(() => { 
            e.target.parentElement.remove();
            saveData();
        }, 500);
        
    }
}, false);



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();