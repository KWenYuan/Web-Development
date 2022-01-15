function num(x) {
    document.getElementById("display").value += x;
}

function clr(y) {
    document.getElementById("display").value=y;
}

function sum(x, y) {
    var x = 1;
    var y = 2;
    var z = x + y;
    console.log(z)
}

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function calculate() {
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById("display").value = y
}
