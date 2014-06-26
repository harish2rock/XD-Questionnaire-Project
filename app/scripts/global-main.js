Ember.View.reopen({
    parentViewDidChange: function(){
        var timer = $('#timer');
        var start_time = $.now();
        var time_limit_in_minutes = 0.25;
        var end_time = (start_time + (time_limit_in_minutes * 60 * 1000));

        // var hashed_end_time = calcMD5(end_time);

        console.log("END TIME SET ONCE: "+end_time);

        // timer scripts
        setInterval(function(){
            var now = $.now();
            var result = (now >= end_time) ? "time's up!" : "not yet...";

            // console.log("S: "+start_time+" / E: "+end_time+" / NOW: "+now);

            console.log(result);
        }, 1000);
    }, 

    didInsertElement: function(){
        $(document).ready(function(){

            $('#terms').click(function(){
                $('#termsModal').modal('show');
            });

            $('#btnStart').click(function () {

                if ($('#chkAgree').is(':checked')) {
                    return true;
                } else {
                    $('.checkbox').velocity("callout.shake", 750);
                    $('.checkbox').addClass('error');
                    return false;
                }
                /*else {
                alert('You must read and agree to the Terms and Conditions');
                return false;
                }*/
            });

            $('.checkbox').change(function(){
                if ($('input#chkAgree').prop('checked')) {
                    $('.checkbox').removeClass('error');
                }
            });
        });
    }
});
