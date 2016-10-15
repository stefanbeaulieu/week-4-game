var bobbaHP = 115;
var hanHP = 150;
var chewyHP = 160;
var vaderHP = 180;
var yourCharacter = false;
var bobbaClicked = false;
var hanClicked = false;
var chewyClicked = false;
var vaderClicked = false;
var defender = ["Bobba Fett", "Han Solo", "Chewbacca", "Darth Vader"];

// IF BOBBA FETT IS CLICKED FIRST
$('#bobbaMain').on
  ("click", function() {
    // han solo is now where bobba was
    $('#bobbaMain').html('<img src="assets/images/han_solo_card.jpg" />');
    // chewbacca is now where han solo was
    $('#hanMain').html('<img src="assets/images/chewbacca_card.jpg" />');
    // vader is now where chewy was
    $('#chewbaccaMain').html('<img src="assets/images/darth_vader_card.jpg" />');
    // this empties where vader was
    $('#vaderMain').html("");
    $('#subheading').html("Choose the defender to attack!");
    // Setting your character card to bobba fett
    $('#yourCharacter').html('<img src="assets/images/bobba_fett_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>Your characters HP is " + bobbaHP + ".</strong><p></p>");
    yourCharacter = true;

    // CLICKING WHERE HAN SOLO IS NOW AFTER BOBBA FETT HAS BEEN selected as character
      $('#bobbaMain').on
        ("click", function() {
          bobbaClicked = true;
          if (yourCharacter === true && bobbaClicked === true ) {
          $('#bobbaMain').html("");
          // this moves chewy to where han solo was
          $('#bobbaMain').html("");
          // moves vader to where chewy was
          $('#hanMain').html("");
          // clears chewy
          $('#chewbaccaMain').html("");
          $('#subheading').html("Start the battle!");
          // sets defender slot as han solo
          $('#defender').html('<img src="assets/images/han_solo_card.jpg" />');
          $('#defenderLine').html("<strong>" + defender[1] + " is ready to defend!</strong><p></p>");
          }
        }
      );

      $('#hanMain').on
        ("click", function() {
          // Han is where Chewbacca is now
          hanClicked = true;
          if (yourCharacter === true && hanClicked === true ) {
          // clears bobba slot
          $('#bobbaMain').html("");
          // clears chewbaccas slot
          $('#chewbaccaMain').html("");
          $('#bobbaMain').html("");
          // switched han solo slot from chewbacca to darth vader
          $('#hanMain').html('');
          $('#subheading').html("Start the battle!");
          $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
          $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
          }
        }
      );
    }
  );
