$(document).ready(function(){

    $('#terms').click(function(){
        $('#termsModal').modal('show');
    });

    $('#rootwizard').bootstrapWizard({
        onTabClick: function(tab, navigation, index) {
            return false;
        }

	});


});