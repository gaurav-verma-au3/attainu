$('#submit').click(function () {
    var obj = {
        "firstname": $('#firstname').val().toString(),
        "lastname": $('#lastname').val().toString(),
        "gender": $('#gender').val().toString(),
        "email": $('#email').val().toString(),
        "link": $('#link').val().toString(),
        "city": $('#city').val().toString()
    }

    $.ajax({
        url: '/addStudent',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        processData: false,
        success: function () {
            alert('Student Added Successfully')
        }
    })
})
