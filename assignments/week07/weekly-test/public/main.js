$('#button').click(function () {
    call()
})
var result;
function call() {

    $.ajax({
        url: 'http://localhost:3000/getStudent/Delhi',
        method: 'GET',
        success: function (data) {
            var x = JSON.stringify(data)
            var y = JSON.parse(x)
            $('#result').append("<kbd>" + x + "</kbd>")
        }

    }
    )


}