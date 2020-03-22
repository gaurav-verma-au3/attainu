function getInitials() {
    var name = prompt("Enter Name", "Here")
    var parts = name.split(' ')
    var initials = ''
    for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 ) {
        initials += parts[i][0]
    }
}
return initials.toUpperCase();
}

alert(getInitials());
