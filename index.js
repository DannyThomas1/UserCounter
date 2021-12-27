//document.getElementById("count-el").innerText=1000;

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent=count;
}

function decrement(){
    count -= 1;
    countEl.textContent=count;
}

function save() {
    let newEntry = count + " - "
    saveEl.textContent += newEntry; //textContent is includes spacing as opposed to innerText
    count=0;
    countEl.textContent=0;
}