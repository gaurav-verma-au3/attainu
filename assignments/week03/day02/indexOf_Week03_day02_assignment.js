function searchArray () {
    var input = prompt("Please enter Number to search", "Enter Here");
    array = ["john", "jane", "riya", "gaurav", "alex", "alexa"];
    a = array.indexOf(input);
    console.log(a);
}

searchArray();
