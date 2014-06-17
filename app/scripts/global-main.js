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

            $('#rootwizard').bootstrapWizard({
                onTabClick: function(tab, navigation, index) {
                    return false;
                },
                onTabShow: function(tab, navigation, index) {
                    var $total = navigation.find('li').length;
                    var $current = index+1;
                    var $percent = ($current/$total) * 100;
                    $('#rootwizard').find('.bar').css({width:$percent+'%'});
                    // If it's the last tab then hide the last button and show the finish instead
                    if($current >= $total) {
                        $('#rootwizard').find('.pager .next').hide();
                        $('#rootwizard').find('.pager .finish').show();
                        $('#rootwizard').find('.pager .finish').removeClass('disabled');
                    } else {
                        $('#rootwizard').find('.pager .next').show();
                        $('#rootwizard').find('.pager .finish').hide();
                    }
                }
            });
            $('#rootwizard .finish').click(function() {
                alert('Finished!');
                $('#rootwizard').find("a[href*='tab1']").trigger('click');
            });

            // timer
            setInterval(function(){
                // timer.html($.now())
                console.log('test');
            }, 1000);

        }); // end document ready
    }
});
