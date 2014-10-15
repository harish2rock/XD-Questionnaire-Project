
/* Radio button */
Ember.RadioButton = Ember.Component.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : ['name', 'type', 'value', 'id', "checked:checked"]
});

Ember.TextField.reopen({
    attributeBindings: ['data-rule-required', 'data-rule-alpha', 'data-msg-required', 'data-rule-phoneUS', 'data-rule-email', 'data-rule-equalto', 'data-rule-zipcodeUS', 'name', 'data-rule-showError']
});

Ember.BeginTest = Ember.View.extend({
    classNames: ['submit'],
    tagName: 'button',
    click: function () {
        $('#questionnaire_form').validate({
            submitHandler: function () {

            $('#my-info').slideUp('slow');
            $('#test-questions').slideDown('slow');


           }
       });
    }
});

Ember.Question = Ember.View.extend({
    didInsertElement: function() {
$.fn.extend( {
               limiter: function(limit, elem) {
                    $(this).on("keyup focus", function() {
                        setCount(this, elem);
                    });
                    function setCount(src, elem) {
                        var chars = src.value.length;
                        if (chars > limit) {
                            src.value = src.value.substr(0, limit);
                            chars = limit;
                        }
                        elem.html( limit - chars );
                    }
                    setCount($(this)[0], elem);
                }
            });
            var elem = $(".chars span");
          $('textarea').limiter(255, elem);
    },
    click: function() {
   // $('.question li a').on('click',function() {
                $('.question li a').removeClass('active');
                var a = this.elementId;
                var classname = $('#'+a+' > a').attr('class');
                $('.'+classname).addClass('active');
                var b = classname;
                $('.question-info').addClass('hidden');
                $('#'+b).removeClass('hidden').find('textarea').focus();


           // });
    }
});


Ember.Submit = Ember.View.extend({
    classNames: ['submit'],
    tagName: 'button',
    click: function () {
        $('#submit').prop('disabled', true);
           var formData = $("#questionnaire_form").serializeArray();
                console.log(formData);
                $.post("send_mail.php", formData)
                .done(function(data){
                    console.log("post succeeded!");
                    // redirect to thank you page here
                    $('#question-page').addClass('hidden');
                    $('#thank-you').removeClass('hidden');
                })
                .fail(function(data){
                    console.log("failed to post");
                })
                .always(function(data){
                })
    }
});

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



           //    //Textarea char limit





        });

    }

});
