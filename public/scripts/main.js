$(document).ready(function(){

    $('#terms').click(function(){
        $('#termsModal').modal('show');
    });

    $('#btnStart').click(function () {

        if ($('#chkAgree').is(':checked')) {
            return true;
        }
        else {
            alert('You must read and agree to the Terms and Conditions');
            return false;
        }

    });

});