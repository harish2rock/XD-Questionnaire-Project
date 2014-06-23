Ember.View.reopen({

    didInsertElement: function(){
        $(document).ready(function(){

            $('#terms').click(function(){
                $('#termsModal').modal('show');
            });

            $('#btnStart').click(function () {

                if ($('#chkAgree').is(':checked')) {
                    return true;
                } else {
                    alert('You must read and agree to the Terms and Conditions');
                    return false;
                }
            });

            // if start time is declared, use that as start time
            // if not declared, create new start time, save to cookie
            // check out moment JS

            // timer
            setInterval(function(){
                // timer.html($.now())
                // console.log('test');

                // starts with 30:00:00

                // (epoch start time + 30 mins) - epoch start time
                // => how much time is left?

                // convert that back to a readable format

            }, 1000);

        }); // end document ready
    }
});
