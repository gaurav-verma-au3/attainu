$('#save').click(function save() {
    var obj = {
        "name": $('#name').val().toString(),
        "email": $('#email').val().toString(),
        "mobile": $('#mobile').val().toString(),
        "subscribed": $('#subscribe').val().toString(),
        "password": $('#password').val().toString()
    }
    $.ajax({
        url: '/profile/update',
        type: 'put',
        data: obj,
        success: function () {

        }
    })
})