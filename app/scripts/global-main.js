Ember.View.reopen({
    parentViewDidChange: function(){
         $(document).ready(function(){

            $('#terms').click(function(){
                $('#termsModal').modal({
                    keyboard: true,
                    show: true,
                    backdrop: true
                });
            });

            $('#btnStart').click(function () {

                if ($('#chkAgree').is(':checked')) {
                    return true;
                }
                else {
                    $('.checkbox').velocity("callout.shake", 750);
                    $('.checkbox').addClass('error');
                    return false;
                }
            });

            $('.checkbox').change(function(){
                if ($('input#chkAgree').prop('checked')) {
                    $('.checkbox').removeClass('error');
                }
            });

        });
        // var timer = $('#timer');
        // var start_time = $.now();
        // var time_limit_in_minutes = 0.25;
        // var end_time = (start_time + (time_limit_in_minutes * 60 * 1000));
        // var hashed_end_time = CryptoJS.MD5(end_time.toString());

        // // timer scripts
        // setInterval(function(){
        //     var now = $.now();
        //     var hashed_now = CryptoJS.MD5(now.toString());
        //     // var result = (now >= end_time) ? "time's up!" : "not yet...";
        //     // console.log("S: "+start_time+" / E: "+end_time+" / NOW: "+now);
        //     // console.log(result);

        //     if (hashed_now == hashed_end_time){
        //         console.log("time's up!");
        //     } else {
        //         console.log("before or after");
        //     }
        // }, 1000);
// $(document).ready(function(){
// // 200 seconds countdown
// var countdown = 10;

// //current timestamp
// var now   = Date.parse(new Date());

// //ready should be stored in your cookie
// var ready = Date.parse(new Date (now + countdown  * 1000)); // * 1000 to get ms


// //every 1000 ms
// setInterval(function()
// {
//     $.cookie('timervalue', ready, {expires: 1});

// var cookieValue = $.cookie('timervalue');
//     var sec = ( cookieValue - Date.parse(new Date()) )/1000;
//     document.title = sec + " seconds left";



// },1000);
// });


    },
    didInsertElement: function(){

    }
});
