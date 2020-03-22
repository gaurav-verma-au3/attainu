$('.del').click(function () {
    var url = '/students/student/' + $(this).val()
    $.ajax({
        url: url,
        type: 'delete'
    })
    window.location.replace('/students')
})