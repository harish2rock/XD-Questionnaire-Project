Ember.View.reopen({
    parentViewDidChange: function(){
        var timer = $('#timer');
        var start_time = moment();
        var end_time = moment.minute(30);

        // timer scripts
        setInterval(function(){
            // var diff = moment(end_time).diff(moment());
            // var result = end_time.subtract(start_time);
            // var result = moment(start_time).fromNow();
            var result = start_time.from(end_time);
            // var result = end_time.get('seconds');

            // $('#timer').html(moment(diff).humanize());
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
