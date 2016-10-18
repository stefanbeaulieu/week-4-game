/*******************************
Begin Clear Functions
*******************************/

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
    $('#defenderSelect1').html("");
    $('#defenderSelect2').html("");
    $('#defenderSelect3').html("");
    $('#defenderSelect4').html("");
  }

  function clearCounterAttack() {
    $('#counterAttack').html("");
  }

/*******************************
End Clear Functions
*******************************/



/*******************************
Begin Show Functions
*******************************/

  function showBobbaFett() {
    // Setting your character card to bobba fett
    $('#yourCharacter').html('<img src="assets/images/bobba_fett_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");
    $('#bobbaMain').empty();
    $('#hanMain').empty();
    $('#chewbaccaMain').empty();
    $('#vaderMain').empty();
    $('#subheading').empty();
    $('#subheading2').html("Select the Defender!");
    $('#defenderSelect1').empty();
    $('#defenderSelect2').html('<img src="assets/images/han_solo_card.jpg" />');
    $('#defenderSelect3').html('<img src="assets/images/chewbacca_card.jpg" />');
    $('#defenderSelect4').html('<img src="assets/images/darth_vader_card.jpg" />');
  }

  function showHanSolo() {
    // Setting your character card to bobba fett
    $('#yourCharacter').html('<img src="assets/images/han_solo_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");
    $('#bobbaMain').empty();
    $('#hanMain').empty();
    $('#chewbaccaMain').empty();
    $('#vaderMain').empty();
    $('#subheading').empty();
    $('#subheading2').html("Select the Defender!");
    $('#defenderSelect1').html('<img src="assets/images/bobba_fett_card.jpg" />');
    $('#defenderSelect2').html('');
    $('#defenderSelect3').html('<img src="assets/images/chewbacca_card.jpg" />');
    $('#defenderSelect4').html('<img src="assets/images/darth_vader_card.jpg" />');
  }

  function showChewbaccaAsSelected() {
    // Setting your character card to chewbacca
    $('#yourCharacter').html('<img src="assets/images/chewbacca_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");
    $('#bobbaMain').empty();
    $('#hanMain').empty();
    $('#chewbaccaMain').empty();
    $('#vaderMain').empty();
    $('#subheading').empty();
    $('#subheading2').html("Select the Defender!");
    $('#defenderSelect1').html('<img src="assets/images/bobba_fett_card.jpg" />');
    $('#defenderSelect2').html('<img src="assets/images/han_solo_card.jpg" />');
    $('#defenderSelect3').html('');
    $('#defenderSelect4').html('<img src="assets/images/darth_vader_card.jpg" />');
  }

  function showVaderAsSelected() {
    // Setting your character card to chewbacca
    $('#yourCharacter').html('<img src="assets/images/darth_vader_card.jpg" />');
    // printing bobba fett HP to document
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");
    $('#bobbaMain').empty();
    $('#hanMain').empty();
    $('#chewbaccaMain').empty();
    $('#vaderMain').empty();
    $('#subheading').empty();
    $('#subheading2').html("Select the Defender!");
    $('#defenderSelect1').html('<img src="assets/images/bobba_fett_card.jpg" />');
    $('#defenderSelect2').html('<img src="assets/images/han_solo_card.jpg" />');
    $('#defenderSelect3').html('<img src="assets/images/chewbacca_card.jpg" />');
    $('#defenderSelect4').html('');
  }

/*******************************
END Show Functions
*******************************/


function begin() {

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



/*******************************
Begin Card Stats
*******************************/

  // Bobba Fett stats
    var bobba = {
      name: "Bobba Fett",
      hp: 115,
      attackPower: 8,
      originalAttackPower: 8,
      counterAttackDamage: 10,
    };

  // Han Solo Stats
    var han = {
      name: "Han Solo",
      hp: 150,
      attackPower: 9,
      originalAttackPower: 9,
      counterAttackDamage: 11,
      clicked: false,
      defeated: false,
    };

  // Chewbacca Stats
    var chewbacca = {
      name: "Chewbacca",
      hp: 160,
      attackPower: 10,
      originalAttackPower: 10,
      counterAttackDamage: 10,
      clicked: false,
      defeated: false,
    };


  // Darth Vader Stats
    var darthVader = {
      name: "Darth Vader",
      hp: 180,
      attackPower: 9,
      originalAttackPower: 9,
      counterAttackDamage: 12,
      clicked: false,
      defeated: false,
    };

  var currentPlayerCard;

  var currentDefender;


/*******************************
End Card Stats
*******************************/



/*******************************
Begin Click Events
*******************************/

// click bobba
function handleBobbaClicked() {
  var $bobbaFett = $(this);
  currentPlayerCard = bobba;
  showBobbaFett();
  showCharacter();
  showBattleGround();

// closes handleBobbaClicked function
}

// click han solo
function handleHanClicked() {
  var $hanSolo = $(this);

  currentPlayerCard = han;
  showHanSolo();
  showCharacter();
  showBattleGround();

// closes handleHanClicked function
}

// click bobba
function handleChewbaccaClicked() {
  var $chewbacca = $(this);

  currentPlayerCard = chewbacca;
  showChewbaccaAsSelected();
  showCharacter();
  showBattleGround();

// closes handleChewbaccaClicked function
}

// click bobba
function handleVaderClicked() {
  var $vader = $(this);

  currentPlayerCard = darthVader;
  showVaderAsSelected();
  showCharacter();
  showBattleGround();

// closes handleVaderClicked function
}

/*******************************
End Click Events
*******************************/

/*******************************
DEFENDER Click Events
*******************************/

// click bobba
function handleBobbaDefendClicked() {
  var $bobbaFett = $(this);

  currentDefender = bobba;
  $('#defender').html('<img src="assets/images/bobba_fett_card.jpg" />');
  $('#defenderLine').html("<strong>" + currentDefender.name + " is ready to defend!</strong><p></p>");
  $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
  showDefender();
  $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
  $('#subheading').html("Start the battle!");
  $('#subheading2').html("");
  clearAllSlots();
  //////// HAN SOLO Atack Button  //////////////
  $('#button').on("click", function attack() {

    // ATTACK SECTION
    currentDefender.hp = currentDefender.hp - currentPlayerCard.originalAttackPower;
    currentPlayerCard.originalAttackPower += currentPlayerCard.attackPower;
    $('#defenderLine').html("");
    $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
    $('#attackPower').html("<strong>With that hit " + currentPlayerCard.name + "'s attack power grows to " + currentPlayerCard.originalAttackPower + "!</strong><p></p>");

    // COUNTERATTACK SECTION for Han Solo VS Bobba Fett
    $('#counterAttack').html("<strong>" + currentDefender.name + " has counter-attacked with " + currentDefender.counterAttackDamage + " damage to " + currentPlayerCard.name + "!</strong><p></p>");
    currentPlayerCard.hp -= currentDefender.counterAttackDamage;
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");
    });

    if (currentDefender.hp <= 0) {
      $('#defender').empty();
      if (bobba.hp > 0 && bobba.name !== currentPlayerCard.name) {
        $('#defenderSelect1').html('<img src="assets/images/bobba_fett_card.jpg" />');
      }
      if (han.hp > 0 && han.name !== currentPlayerCard.name) {
        $('#defenderSelect2').html('<img src="assets/images/han_solo_card.jpg" />');
      }
      if (chewbacca.hp > 0 && chewbacca.name !== currentPlayerCard.name) {
        $('#defenderSelect3').html('<img src="assets/images/chewbacca_card.jpg" />');
      }
      if (darthVader.hp > 0 && darthVader.name !== currentPlayerCard.name) {
        $('#defenderSelect4').html('<img src="assets/images/darth_vader_card.jpg" />');
      }
      $('#counterAttack').html("");
      $('#defender').html('');
      $('#defenderLine').html("<strong>" + currentDefender.name + " is defeated!</strong><p></p>");
      $('#defenderHP').html('');

      $('#button').html('');
      $('#subheading').html("");
      $('#subheading2').html("Select another defender!");
    }

// closes handleBobbaClicked function
}



/***************
click han solo
****************/
function handleHanDefendClicked() {
  var $hanSolo = $(this);

  currentDefender = han;
  $('#defender').html('<img src="assets/images/han_solo_card.jpg" />');
  $('#defenderLine').html("<strong>" + currentDefender.name + " is ready to defend!</strong><p></p>");
  $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
  showDefender();
  $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
  $('#subheading').html("Start the battle!");
  $('#subheading2').html("");
  clearAllSlots();
  //////// HAN SOLO Atack Button  //////////////
  $('#button').on("click", function attack() {

    // ATTACK SECTION
    currentDefender.hp = currentDefender.hp - currentPlayerCard.originalAttackPower;
    currentPlayerCard.originalAttackPower += currentPlayerCard.attackPower;
    $('#defenderLine').html("");
    $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
    $('#attackPower').html("<strong>With that hit " + currentPlayerCard.name + "'s attack power grows to " + currentPlayerCard.originalAttackPower + "!</strong><p></p>");

    // COUNTERATTACK SECTION for Han Solo VS Bobba Fett
    $('#counterAttack').html("<strong>" + currentDefender.name + " has counter-attacked with " + currentDefender.counterAttackDamage + " damage to " + currentPlayerCard.name + "!</strong><p></p>");
    currentPlayerCard.hp -= currentDefender.counterAttackDamage;
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");
    });

    if (currentDefender.hp <= 0) {
      $('#defender').empty();
      if (bobba.hp > 0 && bobba.name !== currentPlayerCard.name) {
        $('#defenderSelect1').html('<img src="assets/images/bobba_fett_card.jpg" />');
      }
      if (han.hp > 0 && han.name !== currentPlayerCard.name) {
        $('#defenderSelect2').html('<img src="assets/images/han_solo_card.jpg" />');
      }
      if (chewbacca.hp > 0 && chewbacca.name !== currentPlayerCard.name) {
        $('#defenderSelect3').html('<img src="assets/images/chewbacca_card.jpg" />');
      }
      if (darthVader.hp > 0 && darthVader.name !== currentPlayerCard.name) {
        $('#defenderSelect4').html('<img src="assets/images/darth_vader_card.jpg" />');
      }
      $('#counterAttack').html("");
      $('#defender').html('');
      $('#defenderLine').html("<strong>" + currentDefender.name + " is defeated!</strong><p></p>");
      $('#defenderHP').html('');

      $('#button').html('');
      $('#subheading').html("");
      $('#subheading2').html("Select another defender!");
    }

// closes handleHanDefendClicked function
}

// click chewbacca defend
function handleChewbaccaDefendClicked() {
  var $chewbacca = $(this);

  currentDefender = chewbacca;
  $('#defender').html('<img src="assets/images/chewbacca_card.jpg" />');
  $('#defenderLine').html("<strong>" + currentDefender.name + " is ready to defend!</strong><p></p>");
  $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
  showDefender();
  $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
  $('#subheading').html("Start the battle!");
  $('#subheading2').html("");
  clearAllSlots();
  //////// Chewbacca Atack Button  //////////////
  $('#button').on("click", function attack() {

    // ATTACK SECTION
    currentDefender.hp = currentDefender.hp - currentPlayerCard.originalAttackPower;
    currentPlayerCard.originalAttackPower += currentPlayerCard.attackPower;
    $('#defenderLine').html("");
    $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
    $('#attackPower').html("<strong>With that hit " + currentPlayerCard.name + "'s attack power grows to " + currentPlayerCard.originalAttackPower + "!</strong><p></p>");

    // COUNTERATTACK SECTION for Han Solo VS Bobba Fett
    $('#counterAttack').html("<strong>" + currentDefender.name + " has counter-attacked with " + currentDefender.counterAttackDamage + " damage to " + currentPlayerCard.name + "!</strong><p></p>");
    currentPlayerCard.hp -= currentDefender.counterAttackDamage;
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");
    });

    if (currentDefender.hp <= 0) {
      $('#defender').empty();
      if (bobba.hp > 0 && bobba.name !== currentPlayerCard.name) {
        $('#defenderSelect1').html('<img src="assets/images/bobba_fett_card.jpg" />');
      }
      if (han.hp > 0 && han.name !== currentPlayerCard.name) {
        $('#defenderSelect2').html('<img src="assets/images/han_solo_card.jpg" />');
      }
      if (chewbacca.hp > 0 && chewbacca.name !== currentPlayerCard.name) {
        $('#defenderSelect3').html('<img src="assets/images/chewbacca_card.jpg" />');
      }
      if (darthVader.hp > 0 && darthVader.name !== currentPlayerCard.name) {
        $('#defenderSelect4').html('<img src="assets/images/darth_vader_card.jpg" />');
      }
      $('#counterAttack').html("");
      $('#defender').html('');
      $('#defenderLine').html("<strong>" + currentDefender.name + " is defeated!</strong><p></p>");
      $('#defenderHP').html('');
      $('#button').html('');
      $('#subheading').html("");
      $('#subheading2').html("Select another defender!");
    }
// closes handleChewbaccaDefendClicked function
}

// click Vader
function handleVaderDefendClicked() {
  var $vader = $(this);

  currentDefender = darthVader;
  $('#defender').html('<img src="assets/images/darth_vader_card.jpg" />');
  $('#defenderLine').html("<strong>" + currentDefender.name + " is ready to defend!</strong><p></p>");
  $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
  showDefender();
  $('#button').html('<button type="button" class="btn btn-primary btn-lg btn-block btn-danger" id="attackButton">Attack!</button>');
  $('#subheading').html("Start the battle!");
  $('#subheading2').html("");
  clearAllSlots();
  //////// Vader Atack Button  //////////////
  $('#button').on("click", function attack() {

    // ATTACK SECTION
    currentDefender.hp = currentDefender.hp - currentPlayerCard.originalAttackPower;
    currentPlayerCard.originalAttackPower += currentPlayerCard.attackPower;
    $('#defenderLine').html("");
    $('#defenderHP').html("<strong>" + currentDefender.name + "'s HP is " + currentDefender.hp + "!</strong><p></p>");
    $('#attackPower').html("<strong>With that hit " + currentPlayerCard.name + "'s attack power grows to " + currentPlayerCard.originalAttackPower + "!</strong><p></p>");

    // COUNTERATTACK SECTION for Han Solo VS Bobba Fett
    $('#counterAttack').html("<strong>" + currentDefender.name + " has counter-attacked with " + currentDefender.counterAttackDamage + " damage to " + currentPlayerCard.name + "!</strong><p></p>");
    currentPlayerCard.hp -= currentDefender.counterAttackDamage;
    $('#characterHP').html("<strong>" + currentPlayerCard.name + "'s HP is " + currentPlayerCard.hp + ".</strong><p></p>");

    if (currentDefender.hp <= 0) {
      $('#defender').empty();
      if (bobba.hp > 0 && bobba.name !== currentPlayerCard.name) {
        $('#defenderSelect1').html('<img src="assets/images/bobba_fett_card.jpg" />');
      }
      if (han.hp > 0 && han.name !== currentPlayerCard.name) {
        $('#defenderSelect2').html('<img src="assets/images/han_solo_card.jpg" />');
      }
      if (chewbacca.hp > 0 && chewbacca.name !== currentPlayerCard.name) {
        $('#defenderSelect3').html('<img src="assets/images/chewbacca_card.jpg" />');
      }
      if (darthVader.hp > 0 && darthVader.name !== currentPlayerCard.name) {
        $('#defenderSelect4').html('<img src="assets/images/darth_vader_card.jpg" />');
      }
      $('#counterAttack').html("");
      $('#defender').html('');
      $('#defenderLine').html("<strong>" + currentDefender.name + " is defeated!</strong><p></p>");
      $('#defenderHP').html('');

      $('#button').html('');
      $('#subheading').html("");
      $('#subheading2').html("Select another defender!");
    }

  });


// closes handleVaderDefendClicked function
}

/*******************************
End Click Events
*******************************/


function setupEventHandlers(){
  $("#bobbaMain").on("click", handleBobbaClicked);
  $("#hanMain").on("click", handleHanClicked);
  $("#chewbaccaMain").on("click", handleChewbaccaClicked);
  $("#vaderMain").on("click", handleVaderClicked);
  $("#defenderSelect1").on("click", handleBobbaDefendClicked);
  $("#defenderSelect2").on("click", handleHanDefendClicked);
  $("#defenderSelect3").on("click", handleChewbaccaDefendClicked);
  $("#defenderSelect4").on("click", handleVaderDefendClicked);
}


$(document).ready(function(){
    setupEventHandlers();
    $('#selectedCharacter').html("");
    $('#selectedDefender').html("");
    if (currentPlayerCard.hp <= 0) {
      alert('GAME OVER!');
    }
});
