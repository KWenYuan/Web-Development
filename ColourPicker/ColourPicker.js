function firstNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function secondNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function thirdNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function fourthNum() {
    return (Math.floor(Math.random() * 10) + 1) / 10;
  }


function rangeFunct() {
  var r = document.getElementById("rChoose").value;
  var g = document.getElementById("gChoose").value;
  var b = document.getElementById("bChoose").value;
  var a = document.getElementById("aChoose").value;

  document.getElementById("rChooseNo").innerHTML = r;
  document.getElementById("gChooseNo").innerHTML = g;
  document.getElementById("bChooseNo").innerHTML = b;
  document.getElementById("aChooseNo").innerHTML = a;

  document.getElementById("changeCol") .style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  document.getElementById("changeText").innerHTML = `${r}, ${g}, ${b}, ${a}`;
}

function randomColFunc() {
    var r = firstNum(0, 255);
    var g = secondNum(0, 255);
    var b = thirdNum(0, 255);
    var a = fourthNum();

    document.getElementById("changeCol") .style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.getElementById("rChoose").value = r;
    document.getElementById("gChoose").value = g;
    document.getElementById("bChoose").value = b;
    document.getElementById("aChoose").value = a;

    document.getElementById("rChooseNo").innerHTML = r;
    document.getElementById("gChooseNo").innerHTML = g;
    document.getElementById("bChooseNo").innerHTML = b;
    document.getElementById("aChooseNo").innerHTML = a;

    document.getElementById("changeText").innerHTML = `${r}, ${g}, ${b}, ${a}`;
}



function copyColFunc(){
  var x = document.getElementById("changeText").innerHTML
  if (x == "") {
    alert("No colour to copy");
  } else {
    console.log(x);
    navigator.clipboard.writeText(x);
    alert("Copied");
  }

}

document.getElementById("rChoose").addEventListener("input", rangeFunct);
document.getElementById("gChoose").addEventListener("input", rangeFunct);
document.getElementById("bChoose").addEventListener("input", rangeFunct);
document.getElementById("aChoose").addEventListener("input", rangeFunct);