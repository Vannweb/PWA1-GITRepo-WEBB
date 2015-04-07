/*Devante Webb
4/6/15
Goal1: assignment: Duel
*/
(function(){
  // console.log("FIGHT!!!!");

  //player Name
  var playerOneName = "Spiderman";
  var playerTwoName = "Batman";

  //Player Damage
  var player1Damage = 20;
  var player2Damage = 20;

  //player Health
  var player1Health = 100;
  var player2Health = 100;

  var round = 0;

  function fight(){

    console.log("Otter Fight Function");
    alert(playerOneName+":"+player1Health+" *START* "+playerTwoName+":"+player2Health);
    for(var i=0;i<10;i++){
      // math.floor(math.random();
      var minDamage1 = player1Damage * .5;
      var minDamage2 = player2Damage * .5;
      var f1 = Math.floor(Math.random()*(player1Damage - minDamage1)+ minDamage1);
      var f2 = Math.floor(Math.random()*(player2Damage - minDamage2)+ minDamage2);
      // console.log(f1);
      // console.log(f2);
      player1Health -=f1;
      player2Health -=f2;

      console.log(playerOneName+":"+player1Health+" * * "+playerTwoName+":"+player2Health);

      var outcome = winnerChk();
      console.log(outcome);

      if (outcome === "No Winner"){
        round++;
        alert(playerOneName+":"+player1Health+" *ROUND "+round+" IS OVER* " +playerTwoName+":"+player2Health);
      }else{
        alert(outcome);
        break;
      };
    };
  };

  function winnerChk(){

    console.log("Otter Winner Check")

    var result ="No Winner";
    if (player1Health<0 && player2Health<0){
      result = "You Both Die.";
    }else if (player1Health<0){
      result = playerTwoName + " WINS!!!";
    }else if (player2Health<0){
      result = playerOneName + " WINS!!!";
    };

    return result;
  };

/************* Program Starts Here **************/
console.log("OtterLove1");
  fight();

})();
