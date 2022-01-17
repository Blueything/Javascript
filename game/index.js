// Initialising win count
var win_1 = document.getElementById("won1").innerHTML;
win_1 = parseInt(win_1);
var win_2 = document.getElementById("won2").innerHTML;
win_2 = parseInt(win_2);

// Initialising health
//LOGIC ERROR:- health cannot be zero in 5 rounds
var phealth1 = 100;
var phealth2 = 100;

var i = 0;
function game() {
  var id = setInterval(function () {
    if (i == 5) {
      //stop before 6th round
      clearInterval(id);
    } else {
      var attack1 = Math.random() * 5; //[0,5) range
      var attack2 = Math.random() * 5;
      phealth1 = phealth1 - attack2; //health reduced in each interval
      phealth2 = phealth2 - attack1;
      if (attack1 > attack2) {
        win_1 = win_1 + 1;
        document.getElementById("won1").innerHTML = win_1;
        //win at 3 or health of player2 =0 or less
        if (win_1 == 3 || phealth2 <= 0) {
          document.getElementById("result").innerHTML =
            "Player1 won the match!";
          clearInterval(id);
        }
      } else {
        win_2 = win_2 + 1;
        document.getElementById("won2").innerHTML = win_2;
        if (win_2 == 3) {
          document.getElementById("result").innerHTML =
            "Player2 won the match!";
          clearInterval(id);
        }
      }
      i++;
      //document.getElementById("result").innerHTML = i;
    }
  }, 1000);
}
