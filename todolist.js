const ab = document.getElementById("input-box");
const ac = document.getElementById("list-container");

function addtask() {
    if (ab.value === "") {
        alert("you must writing something ")

    } else {
        let li = document.createElement("li");
        li.innerHTML = ab.value;
        ac.appendChild(li);
     
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ab.value = "";
    savadata();
}
ac.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("Task");
        savadata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savadata();
    }

}, false)
function savadata(){
    localStorage.setItem("data", ac.innerHTML);
}
function showdata(){
    ac.innerHTML = localStorage.getItem("data");
}
showdata();