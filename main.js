var inputcalc = document.getElementById("inputcalc");

function pushbtn(obj) {
    var pushed = obj.innerHTML;
    if (pushed == '=') {
        inputcalc.innerHTML = eval(inputcalc.innerHTML);
    } else if (pushed == 'AC') {
        inputcalc.innerHTML = '0';
    } else {
        if (inputcalc.innerHTML == '0') {
            inputcalc.innerHTML = pushed;
        } else {
            inputcalc.innerHTML += pushed;
        }
    }
}