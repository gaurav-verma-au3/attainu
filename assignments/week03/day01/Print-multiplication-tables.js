function print_Table(num) {
    var num = prompt("Please enter a Number", "Enter Here");
    var input = parseInt(num);
        var table="";
        var number="";
        for(i=1;i<=10;i++) {
            number = input * i;
            table =  input + " * " + i + " = " + number;
        	console.log(table);
    }
}

print_Table();