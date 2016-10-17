// BEGIN Clear Functions

  function clearBobbaSlot() {
    $('#bobbaMain').html("");
  }
  function clearHanSlot() {
    $('#hanMain').html("");
  }
  function clearChewySlot() {
    $('#chewbaccaMain').html("");
  }
  function clearVaderSlot() {
    $('#vaderMain').html("");
  }

  function clearAllSlots() {
    $('#bobbaMain').html("");
    $('#hanMain').html("");
    $('#chewbaccaMain').html("");
    $('#vaderMain').html("");
  }

  function clearCounterAttack() {
    $('#counterAttack').html("");
  }

// End Clear Functions

// BEGIN Show Functions

  function showBobbaFett() {
    // Setting your character card to bobba fett
    $('#yourCharacter').html('<img src="assets/images/bobba_fett_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>" + defender[0] + "'s HP is " + bobbaHP + ".</strong><p></p>");
  }

  function showHanSolo() {
    // Setting your character card to bobba fett
    $('#yourCharacter').html('<img src="assets/images/han_solo_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>" + defender[1] + "'s HP is " + hanHP + ".</strong><p></p>");
  }

  function showChewbaccaAsSelected() {
    // Setting your character card to chewbacca
    $('#yourCharacter').html('<img src="assets/images/chewbacca_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>Your characters HP is " + chewyHP + ".</strong><p></p>");
  }

  function showVaderAsSelected() {
    // Setting your character card to chewbacca
    $('#yourCharacter').html('<img src="assets/images/darth_vader_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>Your characters HP is " + vaderHP + ".</strong><p></p>");
  }

// END Show Functions

function begin() {
  $('#selectedCharacter').html("");
  $('#selectedDefender').html("");
}

function showCharacter() {
  $("#selectedCharacter").html("<h2 class='subheading'>Your Character!</h2>");
}

function showBattleGround() {
  $("#battleGround").html("<h2 class='subheading'>Battle Ground Log!</h2>");
}

function showDefender() {
  $('#selectedDefender').html("<h2 class='subheading'>Defender!</h2>");
}

// Begin Card Stats

  // Bobba Fett stats
    var bobbaHP = 115;
    var bobbaAttackPower = 10;
    var bobbaClicked = false;
    var compoundedBobbaAttackPower = 0;
    var bobbaOriginalAttackPower = 10;

  // Han Solo Stats
    var hanHP = 150;
    var hanClicked = false;
    var handefeated = false;
    var hanCounterAttackDamage = 8;


  // Chewbacca Stats
    var chewyHP = 160;
    var chewyClicked = false;
    var chewyCounterAttackPower = 7;
    var compoundedChewyAttackPower = 0;
    var chewyOriginalAttackPower = 10;
    var chewyDefeated = false;


  // Darth Vader Stats
    var vaderHP = 180;
    var vaderClicked = false;
    var vaderCounterAttackPower = 11;
    var compoundedVaderAttackPower = 0;
    var vaderOriginalAttackPower = 10;
    var vaderDefeated = false;

// End Card Stats

function moveBobbaFettToDefender() {
  $('#bobbaMain').on("click", function()
    {
      $(this).data('clicked', true);
      clearAllSlots();
      $('#defender').html('<img src="assets/images/bobba_fett_card.jpg" />');
      $('#defenderLine').html("<strong>" + defender[0] + " is ready to defend!</strong><p></p>");
      $('#defenderHP').html("<strong>" + defender[0] + "'s HP is " + bobbaHP + "!</strong><p></p>");
      showDefender();
      $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
      $('#subheading').html("Start the battle!");
    }
  );
}

function moveHanSolotoDefender() {
  $('#hanMain').on("click", function()
    {
      $(this).data('clicked', true);
      clearAllSlots();
      $('#defender').html('<img src="assets/images/han_solo_card.jpg" />');
      $('#defenderLine').html("<strong>" + defender[1] + " is ready to defend!</strong><p></p>");
      $('#defenderHP').html("<strong>" + defender[1] + "'s HP is " + hanHP + "!</strong><p></p>");
      showDefender();
      $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
      $('#subheading').html("Start the battle!");
    }
  );
}

function moveChewyToDefender() {
  $('#chewbaccaMain').on("click", function()
    {
      $(this).data('clicked', true);
      clearAllSlots();
      $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
      $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
      $('#defenderHP').html("<strong>" + defender[2] + "'s HP is " + chewyHP + "!</strong><p></p>");
      showDefender();
      $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
      $('#subheading').html("Start the battle!");
    }
  );
}

function moveVaderToDefender() {
  $('#vaderMain').on("click", function()
    {
      $(this).data('clicked', true);
      clearAllSlots();
      $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />');
      $('#defenderLine').html("<strong>" + defender[3] + " is ready to defend!</strong><p></p>");
      $('#defenderHP').html("<strong>" + defender[3] + "'s HP is " + vaderHP + "!</strong><p></p>");
      showDefender();
      $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
      $('#subheading').html("Start the battle!");
    }
  );
}

var yourCharacter = false;

var defender = ["Bobba Fett", "Han Solo", "Chewbacca", "Darth Vader"];

begin();

// IF BOBBA FETT IS CLICKED FIRST
function bobbaFett() {
  $('#bobbaMain').on
    ("click", function()
      {
        $(this).data('clicked', true);

        if($('#bobbaMain').data('clicked'))
        {
          // clearAllSlots();
          $('#subheading').html("Select the Defender!");
          showCharacter();
          clearBobbaSlot();
          showBobbaFett();
          showBattleGround();
          moveHanSolotoDefender();
          moveChewyToDefender();
          moveVaderToDefender();
        }
      }
    );
}

// IF Han Solo IS CLICKED FIRST
function hanSolo() {
  $('#hanMain').on
    ("click", function()
      {
        $(this).data('clicked', true);

        if($('#hanMain').data('clicked'))
        {
          // clearAllSlots();
          $('#subheading').html("Select the Defender!");
          showCharacter();
          clearHanSlot();
          showHanSolo();
          showBattleGround();
          moveBobbaFettToDefender();
          moveChewyToDefender();
          moveVaderToDefender();
        }
      }
    );
}

// IF Chewbacca IS CLICKED FIRST
function Chewbacca() {
  $('#chewbaccaMain').on
    ("click", function()
      {
        $(this).data('clicked', true);

        if($('#chewbaccaMain').data('clicked'))
        {
          // clearAllSlots();
          $('#subheading').html("Select the Defender!");
          showCharacter();
          clearChewySlot();
          showChewbaccaAsSelected();
          showBattleGround();
          moveBobbaFettToDefender();
          moveHanSolotoDefender();
          moveVaderToDefender();
        }
      }
    );
}

// IF Darth Vader IS CLICKED FIRST
function DartVader() {
  $('#vaderMain').on
    ("click", function()
      {
        $(this).data('clicked', true);

        if($('#vaderMain').data('clicked'))
        {
          // clearAllSlots();
          $('#subheading').html("Select the Defender!");
          showCharacter();
          clearVaderSlot();
          showVaderAsSelected();
          showBattleGround();
          moveBobbaFettToDefender();
          moveChewyToDefender();
          moveHanSolotoDefender();
        }
      }
    );
}

bobbaFett();
hanSolo();
Chewbacca();
DartVader();

  //
  //   /*********************************************
  //   CLICKING WHERE HAN SOLO IS NOW AFTER BOBBO FETT HAS BEEN selected as character
  //   HAN SOLO was moved into BOBBA FETTs old location
  //   **********************************************/
  //
  //     $('#bobbaMain').on
  //       ("click", function() {
  //         bobbaClicked = true;
  //         if (yourCharacter === true && bobbaClicked === true ) {
  //
  //
  //             //////// HAN SOLO Atack Button  //////////////
  //             $('#button').on("click", function attack() {
  //
  //               // ATTACK SECTION
  //               hanHP = hanHP - bobbaAttackPower;
  //               $('#defenderLine').html("");
  //               $('#defenderHP').html("<strong>" + defender[1] + "'s HP is " + hanHP + "!</strong><p></p>");
  //               $('#attackPower').html("<strong>With that hit " + defender[0] + "'s attack power grows to " + (bobbaAttackPower - compoundedBobbaAttackPower + bobbaOriginalAttackPower) + "!</strong><p></p>");
  //               bobbaAttackPower += 10;
  //
  //               // COUNTERATTACK SECTION for Han Solo VS Bobba Fett
  //               $('#counterAttack').html("<strong>" + defender[1] + " has counter-attacked with " + hanCounterAttackDamage + " damage to " + defender[0] + "!</strong><p></p>");
  //               bobbaHP -= hanCounterAttackDamage;
  //               $('#characterHP').html("<strong>" + defender[0] + "'s HP is " + bobbaHP + ".</strong><p></p>");
  //
  //
  //               // WHEN HAN SOLO IS DEFEATED vs Bobba Fett
  //               if (hanHP === 0) {
  //                 // Chewbacca is now in Bobba Slot
  //                 $('#bobbaMain').html('<img src="assets/images/chewbacca_card.jpg" />');
  //                 // vader is now where chewy was
  //                 $('#hanMain').html('<img src="assets/images/darth_vader_card.jpg" />');
  //                 $('#subheading').html("Select Another Defender to Battle!");
  //                 $('#defender').html('<img src="assets/images/han_solo_card.jpg" />' + "<p>DEFEATED!</p>").animate({opacity: '0.5'});
  //                 $('#attackPower').html("<strong>" + defender[0] + "'s attack power is " + (bobbaAttackPower - compoundedBobbaAttackPower + 10) + "!</strong><p></p>");
  //                 $('#counterAttack').html("<strong>With his dying blow, " + defender[1] + " did another " + hanCounterAttackDamage + " points of damage to " + defender[0] + "!</strong><p></p>");
  //                 $('#button').html('');
  //                 $('#defenderHP').html("");
  //                 if (hanHP <= 0) {
  //                   handefeated = true;
  //                 }
  //               }
  //
  //               // When Han Solo is defeated and Chewbacca is selected
  //               if (hanHP === 0  && handefeated === true || vaderDefeated === true ) {
  //                 $('#bobbaMain').on
  //                   ("click", function() {
  //                     // sets defender slot as Chewbacca
  //                     clearCounterAttack();
  //                     $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />').animate({opacity: '1'});
  //                     $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
  //                     $('#defenderHP').html("<strong>" + defender[2] + "'s HP is " + chewyHP + "!</strong><p></p>");
  //                     $('#characterHP').html("<strong>" + defender[0] + "'s HP is " + bobbaHP + ".</strong><p></p>");
  //
  //                   // Chewbacca Atack Button VS Bobba Fett
  //                   $('#button').on("click", function attack() {
  //                     // ATTACK SECTION
  //                     chewyHP = chewyHP - bobbaAttackPower;
  //                     $('#defenderLine').html("");
  //                     $('#defenderHP').html("<strong>" + defender[2] + "'s HP is " + chewyHP + "!</strong><p></p>");
  //                     $('#attackPower').html("<strong>With that hit " + defender[0] + "'s attack power grows to " + (bobbaAttackPower - compoundedBobbaAttackPower + bobbaOriginalAttackPower) + "!</strong><p></p>");
  //                     bobbaAttackPower += 10;
  //
  //                     // COUNTERATTACK SECTION
  //                     $('#counterAttack').html("<strong>" + defender[2] + " has counter-attacked with " + chewyCounterAttackPower + " damage to " + defender[0] + "!</strong><p></p>");
  //                     bobbaHP -= chewyCounterAttackPower;
  //                     $('#characterHP').html("<strong>" + defender[0] + "'s HP is " + bobbaHP + ".</strong><p></p>");
  //
  //                     // WHEN CHEWBACCA IS DEFEATED
  //                     if (chewyHP <= 0) {
  //                       // Chewbacca is now in Bobba Slot
  //                       $('#bobbaMain').html('<img src="assets/images/darth_vader_card.jpg" />');
  //                       // vader is now where chewy was
  //                       $('#hanMain').html('');
  //                       $('#subheading').html("Select Another Defender to Battle!");
  //                       $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />' + "<p>DEFEATED!</p>").animate({opacity: '0.5'});
  //                       $('#attackPower').html("<strong>" + defender[0] + "'s attack power is " + (bobbaAttackPower - compoundedBobbaAttackPower + 10) + "!</strong><p></p>");
  //                       $('#counterAttack').html("<strong>With his dying blow, " + defender[2] + " did another " + chewyCounterAttackPower + " points of damage to " + defender[0] + "!</strong><p></p>");
  //                       $('#button').html('');
  //                       $('#defenderHP').html("");
  //                         if (chewyHP <= 0) {
  //                           chewyDefeated = true;
  //                         }
  //                     }
  //
  //                     /*********************************
  //                     // When Han Solo is defeated and Chewbacca is defeated and Vader is Selected
  //                     *********************************/
  //
  //                     if ( chewyHP <= 0 || hanHP <= 0) {
  //                       $('#bobbaMain').on
  //                         ("click", function() {
  //                           // sets defender slot as Darth Vader
  //                           clearCounterAttack();
  //                           $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />').animate({opacity: '1'});
  //                           $('#defenderLine').html("<strong>" + defender[3] + " is ready to defend!</strong><p></p>");
  //                           $('#defenderHP').html("<strong>" + defender[3] + "'s HP is " + vaderHP + "!</strong><p></p>");
  //                           $('#characterHP').html("<strong>" + defender[0] + "'s HP is " + bobbaHP + ".</strong><p></p>");
  //
  //                         // Vader Atack Button VS Bobba Fett
  //                         $('#button').on("click", function attack() {
  //                           // ATTACK SECTION
  //                           vaderHP = vaderHP - bobbaAttackPower;
  //                           $('#defenderLine').html("");
  //                           $('#defenderHP').html("<strong>" + defender[3] + "'s HP is " + vaderHP + "!</strong><p></p>");
  //                           $('#attackPower').html("<strong>With that hit " + defender[0] + "'s attack power grows to " + (bobbaAttackPower - compoundedBobbaAttackPower + bobbaOriginalAttackPower) + "!</strong><p></p>");
  //                           bobbaAttackPower += 10;
  //
  //                           // VADER COUNTERATTACK SECTION
  //                           $('#counterAttack').html("<strong>" + defender[3] + " has counter-attacked with " + vaderCounterAttack + " damage to " + defender[0] + "!</strong><p></p>");
  //                           bobbaHP -= vaderCounterAttackPower;
  //                           $('#characterHP').html("<strong>" + defender[0] + "'s HP is " + bobbaHP + ".</strong><p></p>");
  //
  //                           // When VADER is defeated
  //                           if (vaderHP <= 0) {
  //                             clearAllSlots();
  //                             $('#subheading').html("YOU WIN!");
  //                             $('#defender').html('');
  //                             $('#attackPower').html("");
  //                             $('#counterAttack').html("");
  //                             $('#button').html('');
  //                             $('#defenderHP').html("");
  //                               if (chewHP === 0) {
  //                                 chewyDefeated = true;
  //                               }
  //                           }
  //                         // Closes Vader Attacked button VS Bobba Fett
  //                         });
  //                         // closes Vader Function VS Bobba Fett
  //                         });
  //                     // Closes the "Han Solo is defeated or Chewbacca is defeated and Vader is Selected"
  //                     }
  //
  //                   // Closes Chewy Attacked button VS Bobba Fett
  //                   });
  //
  //                   // closes Chewy Function VS Bobba Fett
  //                   });
  //
  //               // Closes the "When Han Solo is defeated and Chewbacca is selected"
  //               }
  //
  //             // Closes the attack button function for Han Solo vs Bobba Fett
  //             });
  //         }
  //       // Closes if BOBBA CLICKED
  //       }
  //     );
  //
  //   /*****************************
  //     CLICKING WHERE CHEWBACCA IS NOW AFTER BOBBA FETT HAS BEEN selected as character
  //   *****************************/
  //
  //     $('#hanMain').on
  //       ("click", function() {
  //         // Han is where Chewbacca is now
  //         hanClicked = true;
  //         if (yourCharacter === true && hanClicked === true ) {
  //         clearAllSlots();
  //         showBobbaFett();
  //         $('#subheading').html("Start the battle!");
  //         // moving chewbacca to defender
  //         $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
  //         $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
  //         showDefender();
  //         }
  //       }
  //     );
  //
  //     // CLICKING WHERE DARTH VADER IS NOW AFTER BOBBA FETT HAS BEEN selected as character
  //       $('#chewbaccaMain').on
  //         ("click", function() {
  //           // Han is where Darth Vader is now
  //           chewyClicked = true;
  //           if (yourCharacter === true && chewyClicked === true ) {
  //           clearAllSlots();
  //           showBobbaFett();
  //           $('#subheading').html("Start the battle!");
  //           // moving chewbacca to defender
  //           $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[3] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //
  // );
  //
  // // IF HAN SOLO IS CLICKED FIRST
  // $('#hanMain').on
  //   ("click", function() {
  //     // Bobba Fett
  //     $('#bobbaMain').html('<img src="assets/images/bobba_fett_card.jpg" />');
  //     // chewbacca is now where han solo was
  //     $('#hanMain').html('<img src="assets/images/chewbacca_card.jpg" />');
  //     // vader is now where chewy was
  //     $('#chewbaccaMain').html('<img src="assets/images/darth_vader_card.jpg" />');
  //     clearVaderSlot();
  //     $('#subheading').html("Choose the defender to attack!");
  //     // Setting your character card to bobba fett
  //     $('#yourCharacter').html('<img src="assets/images/han_solo_card.jpg" />');
  //     // printing bobba fett HP to document
  //     $('#characterHP').html("<strong>Your characters HP is " + hanHP + ".</strong><p></p>");
  //     showCharacter();
  //     yourCharacter = true;
  //
  //     // clicking bobba fett
  //       $('#bobbaMain').on
  //         ("click", function() {
  //           bobbaClicked = true;
  //           if (yourCharacter === true && bobbaClicked === true ) {
  //           clearAllSlots();
  //           showHanSolo();
  //           $('#subheading').html("Start the battle!");
  //           // sets defender slot as han solo
  //           $('#defender').html('<img src="assets/images/bobba_fett_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[1] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //
  //     // clicking where chewbacca is now after han solo is selected
  //       $('#hanMain').on
  //         ("click", function() {
  //           // Han Slot is where Chewbacca is now
  //           chewyClicked = true;
  //           if (yourCharacter === true && chewyClicked === true ) {
  //           clearAllSlots();
  //           showHanSolo();
  //           $('#subheading').html("Start the battle!");
  //           // moving chewbacca to defender
  //           $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //
  //     // CLICKING WHERE DARTH VADER IS NOW AFTER Han Solo HAS BEEN selected as character
  //       $('#chewbaccaMain').on
  //         ("click", function() {
  //           // Han is where Darth Vader is now
  //           chewyClicked = true;
  //           if (yourCharacter === true && chewyClicked === true ) {
  //           clearAllSlots();
  //           showHanSolo();
  //           $('#subheading').html("Start the battle!");
  //           // moving chewbacca to defender
  //           $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[3] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //     }
  //   );
  //
  // // IF CHEWBACCA IS CLICKED FIRST
  // $('#chewbaccaMain').on
  //   ("click", function() {
  //     // Bobba Fett
  //     $('#bobbaMain').html('<img src="assets/images/bobba_fett_card.jpg" />');
  //     // chewbacca is now where han solo was
  //     $('#hanMain').html('<img src="assets/images/han_solo_card.jpg" />');
  //     // vader is now where chewy was
  //     $('#chewbaccaMain').html('<img src="assets/images/darth_vader_card.jpg" />');
  //     clearVaderSlot();
  //     $('#subheading').html("Choose the defender to attack!");
  //     // Setting your character card to bobba fett
  //     $('#yourCharacter').html('<img src="assets/images/chewbacca_card.jpg" />');
  //     // printing bobba fett HP to document
  //     $('#characterHP').html("<strong>Your characters HP is " + chewyHP + ".</strong><p></p>");
  //     showCharacter();
  //     yourCharacter = true;
  //
  //     // clicking bobba fett
  //       $('#bobbaMain').on
  //         ("click", function() {
  //           bobbaClicked = true;
  //           if (yourCharacter === true && bobbaClicked === true ) {
  //           clearAllSlots();
  //           showChewbaccaAsSelected();
  //           $('#subheading').html("Start the battle!");
  //           // sets defender slot as bobba fett
  //           $('#defender').html('<img src="assets/images/bobba_fett_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[0] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //
  //     // clicking where chewbacca is now after han solo is selected
  //       $('#hanMain').on
  //         ("click", function() {
  //           // Han Slot is where Chewbacca is now
  //           chewyClicked = true;
  //           if (yourCharacter === true && chewyClicked === true ) {
  //           clearAllSlots();
  //           showChewbaccaAsSelected();
  //           $('#subheading').html("Start the battle!");
  //           // moving chewbacca to defender
  //           $('#defender').html('<img src="assets/images/han_solo_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[1] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //
  //     // CLICKING WHERE DARTH VADER IS NOW AFTER Chewbacca HAS BEEN selected as character
  //       $('#chewbaccaMain').on
  //         ("click", function() {
  //           // Han is where Darth Vader is now
  //           chewyClicked = true;
  //           if (yourCharacter === true && chewyClicked === true ) {
  //           clearAllSlots();
  //           showChewbaccaAsSelected();
  //           $('#subheading').html("Start the battle!");
  //           // moving chewbacca to defender
  //           $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[3] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //     }
  //   );
  //
  // // IF DARTH VADER IS CLICKED FIRST
  // $('#vaderMain').on
  //   ("click", function() {
  //     clearVaderSlot();
  //     $('#subheading').html("Choose the defender to attack!");
  //     showVaderAsSelected();
  //     showCharacter();
  //     yourCharacter = true;
  //
  //     // clicking bobba fett
  //       $('#bobbaMain').on
  //         ("click", function() {
  //           bobbaClicked = true;
  //           if (yourCharacter === true && bobbaClicked === true ) {
  //           clearAllSlots();
  //           showVaderAsSelected();
  //           $('#subheading').html("Start the battle!");
  //           // sets defender slot as bobba fett
  //           $('#defender').html('<img src="assets/images/bobba_fett_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[0] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //
  //     // clicking han solo
  //       $('#hanMain').on
  //         ("click", function() {
  //           // Han Slot is where Chewbacca is now
  //           hanClicked = true;
  //           if (yourCharacter === true && hanClicked === true ) {
  //           clearAllSlots();
  //           showVaderAsSelected();
  //           $('#subheading').html("Start the battle!");
  //           // moving chewbacca to defender
  //           $('#defender').html('<img src="assets/images/han_solo_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[1] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
  //
  //     // CLICKING WHERE DARTH VADER IS NOW AFTER Chewbacca HAS BEEN selected as character
  //       $('#chewbaccaMain').on
  //         ("click", function() {
  //           // Han is where Darth Vader is now
  //           chewyClicked = true;
  //           if (yourCharacter === true && chewyClicked === true ) {
  //           clearAllSlots();
  //           showVaderAsSelected();
  //           $('#subheading').html("Start the battle!");
  //           // moving chewbacca to defender
  //           $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
  //           $('#defenderLine').html("<strong>" + defender[2] + " is ready to defend!</strong><p></p>");
  //           showDefender();
  //           }
  //         }
  //       );
