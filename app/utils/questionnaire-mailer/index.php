<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript">
  $(function(){
    $('#submit').click(function(e){
      e.preventDefault();
      var formData = JSON.stringify($("#questionnaire_form").serializeArray());
      console.log(formData);
      $.post("send_mail.php", formData)
        .done(function(data){
          console.log("post succeeded!")
          // redirect to thank you page here
        })
        .fail(function(data){
          console.log("failed to post")
        })
        .always(function(data){
        })
    });
  });
</script>

<form id="questionnaire_form" action="send_mail.php" method="post">
  <label for="q1">Q1 Answer</label>
  <input type="text" name="q1" id="q1" value="whep">
  <br />
  <label for="q2">Q2 Answer</label>
  <input type="text" name="q2" id="q2">
  <br />
  <label for="q3">Q3 Answer</label>
  <input type="text" name="q3" id="q3">
  <br /><br />
  <input type="Submit" id="submit">
</form>
<!-- <button id="submit"/>Submit</button> -->
