$('.del').click(function () {
    var url = '/instructors/instructor/' + $(this).val()
    $.ajax({
        url: url,
        type: 'delete'
    })
    window.location.replace('/instructors')
})