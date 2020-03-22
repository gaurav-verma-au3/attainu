function addition(){

    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = parseFloat(x) + parseFloat(y);
    document.getElementById("result").innerText = '=' + z;
}
function substraction(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = x - y;
    document.getElementById("result").innerText = '=' + z;
}
function multiplication(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = x * y;
    document.getElementById("result").innerText = '=' + z;
}
function division(){
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = x / y;
    document.getElementById("result").innerText = '=' + z;
}

document.getElementById("addbtn").addEventListener("click", function() { addition()});
document.getElementById("substractbtn").addEventListener("click", function() { substraction()});
document.getElementById("multiplybtn").addEventListener("click", function() { multiplication()});
document.getElementById("devidebtn").addEventListener("click", function() { division()});