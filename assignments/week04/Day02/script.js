$(document).ready(function(){
	    callthis();
		
});
var ajaxinterval;
ajaxinterval = setInterval(function(){
    ajaxCall()
},30000);

function callthis() {

  clearInterval (ajaxinterval);
	clearInterval (intervaltimer);
  clearInterval (intervalprogress);
  ajaxCall();
  progress();
  timer();
}

var callthisinterval;
callthisinterval = setInterval(function(){
callthis();

},30000);



var intervalprogress;
function progress () {
    var current_progress = 100;
    intervalprogress = setInterval(function() {
    current_progress --;
    $("#myProgressbar")
    .css("width", current_progress + "%")
    .attr("aria-valuenow", current_progress)
    if (current_progress <= 0){
    clearInterval(intervalprogress)}
}, 300);
}
var intervaltimer;
function timer(){
    var timecounter = 30;
    intervaltimer = setInterval(function () {
    timecounter--;
    $('#numberTimer').text(timecounter + ' Sec. Left');
    if (timecounter <= 0){
    clearInterval(intervaltimer)}
    
}, 1000);
}


function ajaxCall() {
        $.ajax({

        url: 'https://rawcdn.githack.com/attainu-nightingale/nightingale-course-module/b31c840fc3d5b6aae8e084a253489b5f7cae15fb/assignments/data/quiz.json',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            n = Math.floor(Math.random() * 10);
            
            var obj = data[n];
            question = obj.question;;
            answer =  obj.answer;
            $('#div1').html('<h5>Q.</h5> <p>' + question + '</p>')
            
          }
    });
            
         

           
}

validation();
        wrongs = 1;
        rights = 1;
        function validation() {
        $('#submit').click(function () {
        givenanswer = $('#answer').val();
        if (givenanswer.toLowerCase() !== answer.toLowerCase()) { $('#wronganswer').css({"visibility":"visible"}), $('#rightanswer').css({"visibility":"hidden"}), $('#wrongcounter').html('Wrong Answers : -' + wrongs++)}
        else { $('#rightanswer').css({"visibility":"visible"}), $('#wronganswer').css({"visibility":"hidden"}), $('#rightcounter').html('Right Answers : +' + rights++),callthis()}          
    })
}

$('#refresh').click(function(){
    callthis()
})

