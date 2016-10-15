
$('#bobbaMain').on("click", function() {
  $('#bobbaMain').html('<img src="assets/images/han_solo_card.jpg" />');
  $('#hanMain').html('<img src="assets/images/chewbacca_card.jpg" />');
  $('#chewbaccaMain').html('<img src="assets/images/darth_vader_card.jpg" />');
  $('#vaderMain').html("");
  $('#subheading').html("Choose the defender to attack!");
});

$('#hanMain').on("click", function() {
  $('#han').html('<img src="assets/images/han_solo_card.jpg" />');

});

$('#chewbaccaMain').on("click", function() {
  $('#chewy').html('<img src="assets/images/chewbacca_card.jpg" />');
});

$('#vaderMain').on("click", function() {
  $('#vader').html('<img src="assets/images/darth_vader_card.jpg" />');
});
