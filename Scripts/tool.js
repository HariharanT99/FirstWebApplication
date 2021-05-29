var x, y, val, ans;

function convertFunc() {
    x = document.getElementById("temp").value;
    val = document.getElementById("cel").checked;
    if (val == 0) {
        ans = x * (9 / 5) + 32;
        document.getElementById("dis").innerHTML = (ans.toFixed(2) + " °F");
    } else {
        ans = 5 / 9 * (x - 32);
        document.getElementById("dis").innerHTML = (ans.toFixed(2) + " °C");
    }   
}

function printFunc(ans) {
    document.getElementById("dis").innerHTML = (ans.toFixed(2) + " m²");
}

function circleArea() {
    x = document.getElementById("cir").value;
    val = document.getElementById("r").checked;
    y = Math.PI;
    if (val == 1) {
        ans = y * (x ** 2);
        printFunc(ans);
    } else {
        ans = y * x;
        printFunc(ans);
    }
}

function squareArea() {
    x = document.getElementById("sq").value;
    ans = (x ** 2);
    printFunc(ans);
}

function rectangleArea() {
    x = document.getElementById("rl").value;
    y = document.getElementById("rw").value;
    ans = x * y;
    printFunc(ans);
}

function triangleArea() {
    x = document.getElementById("tb").value;
    y = document.getElementById("th").value;
    ans = x * y;
    printFunc(ans);
}