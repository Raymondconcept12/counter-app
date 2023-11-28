let text = document.getElementById("demoText")
let savee = document.getElementById("saveText")
let start = 0


function add() {
    start += 1
    text.textContent = start
    
}

function save() {
    saveStr =  start + " - "
    savee.textContent += saveStr
    start = 0
    text.textContent = start
}

function reset() {
    savee.textContent = " Save: "
    start = 0
    text.textContent = start
}

function subt() {
    start += -1
    text.textContent = start
}
