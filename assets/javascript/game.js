// Bobba Fett stats
var bobbaHP = 115;
var bobbaClicked = false;

// Han Solo Stats
var hanHP = 150;
var hanClicked = false;

// Chewbacca Stats
var chewyHP = 160;
var chewyClicked = false;

// Darth Vader Stats
var vaderHP = 180;
var vaderClicked = false;

var yourCharacter = false;

var defender = ["Bobba Fett", "Han Solo", "Chewbacca", "Darth Vader"];

function clearCards() {

}

// IF BOBBA FETT IS CLICKED FIRST
$('#bobbaMain').on
  ("click", function() {
    // chewbacca is now where Han Solo was
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

    // CLICKING WHERE HAN SOLO IS NOW AFTER BOBBO FETT HAS BEEN selected as character
      $('#bobbaMain').on
        ("click", function() {
          bobbaClicked = true;
          if (yourCharacter === true && bobbaClicked === true ) {
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

    // CLICKING WHERE CHEWBACCA IS NOW AFTER BOBBA FETT HAS BEEN selected as character
      $('#hanMain').on
        ("click", function() {
          // Han is where Chewbacca is now
          hanClicked = true;
          if (yourCharacter === true && hanClicked === true ) {
          // clears chewbaccas slot
          $('#chewbaccaMain').html("");
          $('#bobbaMain').html("");
          // switched han solo slot from chewbacca to darth vader
          $('#hanMain').html('');
          // Setting your character card to bobba fett
          $('#yourCharacter').html('<img src="assets/images/bobba_fett_card.jpg" />');
          // printing bobba fett HP to document
          $('#characterHP').html("<strong>Your characters HP is " + bobbaHP + ".</strong><p></p>");
          $('#subheading').html("Start the battle!");
          // moving chewbacca to defender
          $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
          $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
          }
        }
      );

      // CLICKING WHERE DARTH VADER IS NOW AFTER HAN SOLO HAS BEEN selected as character
        $('#chewbaccaMain').on
          ("click", function() {
            // Han is where Darth Vader is now
            chewyClicked = true;
            if (yourCharacter === true && chewyClicked === true ) {
            // clears bobba slot
            $('#bobbaMain').html("");
            // clears chewbaccas slot
            $('#chewbaccaMain').html("");
            $('#bobbaMain').html("");
            // switched han solo slot from chewbacca to darth vader
            $('#hanMain').html('');
            $('#subheading').html("Start the battle!");
            // moving chewbacca to defender
            $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />');
            $('#defenderLine').html("<strong>" + defender[3] + " is ready to defend!</strong><p></p>");
            }
          }
        );
    }
  );

  // IF HAN SOLO IS CLICKED FIRST
  $('#hanMain').on
    ("click", function() {
      // Bobba Fett
      $('#bobbaMain').html('<img src="assets/images/bobba_fett_card.jpg" />');
      // chewbacca is now where han solo was
      $('#hanMain').html('<img src="assets/images/chewbacca_card.jpg" />');
      // vader is now where chewy was
      $('#chewbaccaMain').html('<img src="assets/images/darth_vader_card.jpg" />');
      // this empties where vader was
      $('#vaderMain').html("");
      $('#subheading').html("Choose the defender to attack!");
      // Setting your character card to bobba fett
      $('#yourCharacter').html('<img src="assets/images/han_solo_card.jpg" />');
      // printing bobba fett HP to document
      $('#characterHP').html("<strong>Your characters HP is " + hanHP + ".</strong><p></p>");
      yourCharacter = true;

      // clicking bobba fett
        $('#bobbaMain').on
          ("click", function() {
            bobbaClicked = true;
            if (yourCharacter === true && bobbaClicked === true ) {
            // this moves chewy to where han solo was
            $('#bobbaMain').html("");
            // moves vader to where chewy was
            $('#hanMain').html("");
            // clears chewy
            $('#chewbaccaMain').html("");
            // Setting your character card to bobba fett
            $('#yourCharacter').html('<img src="assets/images/han_solo_card.jpg" />');
            // printing bobba fett HP to document
            $('#characterHP').html("<strong>Your characters HP is " + hanHP + ".</strong><p></p>");
            $('#subheading').html("Start the battle!");
            // sets defender slot as han solo
            $('#defender').html('<img src="assets/images/bobba_fett_card.jpg" />');
            $('#defenderLine').html("<strong>" + defender[1] + " is ready to defend!</strong><p></p>");
            }
          }
        );

      // clicking where chewbacca is now after han solo is selected
        $('#hanMain').on
          ("click", function() {
            // Han Slot is where Chewbacca is now
            chewyClicked = true;
            if (yourCharacter === true && chewyClicked === true ) {
            // clears bobba slot
            $('#bobbaMain').html("");
            // clears chewbaccas slot
            $('#chewbaccaMain').html("");
            $('#bobbaMain').html("");
            // switched han solo slot from chewbacca to darth vader
            $('#hanMain').html('');
            $('#subheading').html("Start the battle!");
            // moving chewbacca to defender
            $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
            $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
            }
          }
        );

        // CLICKING WHERE DARTH VADER IS NOW AFTER Han Solo HAS BEEN selected as character
          $('#chewbaccaMain').on
            ("click", function() {
              // Han is where Darth Vader is now
              chewyClicked = true;
              if (yourCharacter === true && chewyClicked === true ) {
              // clears bobba slot
              $('#bobbaMain').html("");
              // clears chewbaccas slot
              $('#chewbaccaMain').html("");
              $('#bobbaMain').html("");
              // switched han solo slot from chewbacca to darth vader
              $('#hanMain').html('');
              $('#subheading').html("Start the battle!");
              // moving chewbacca to defender
              $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />');
              $('#defenderLine').html("<strong>" + defender[3] + " is ready to defend!</strong><p></p>");
              }
            }
          );
      }
    );
