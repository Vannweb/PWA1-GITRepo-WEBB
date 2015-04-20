/*Devante Webb
4/6/15
Goal1: assignment: Duel
*/
(function(){
  // console.log("FIGHT!!!!");
/*This is the previous code, I used Command Find and Replace to ensure accuracy
and effeciency when replacing the original played variables*/
  //player Name
  // var playerOneName = "Spiderman";
  // var player2info[0] = "Batman";
  //
  //Player Damage
  // var player1info[1] = 20;
  // var player2info[1] = 20;
  //
  //player Health
  // var player1info[2] = 100;
  // var player2info[2] = 100;

/* The variable for the round number, to be incremented with each round*/
  var round = 0;
//These are the two arrasy I used to store the two players info
  var player1info = ["Spiderman",20,100];
  var player2info = ["Batman",20,100];
//The function used to intiate the fighting algorithm
  function fight(){

    console.log("Otter Fight Function");
    alert(player1info[0]+":"+player1info[2]+" *START* "+player2info[0]+":"+player2info[2]);
    for(var i=0;i<10;i++){
      // math.floor(math.random();
      var minDamage1 = player1info[1] * .5;
      var minDamage2 = player2info[1] * .5;
      var f1 = Math.floor(Math.random()*(player1info[1] - minDamage1)+ minDamage1);
      var f2 = Math.floor(Math.random()*(player2info[1] - minDamage2)+ minDamage2);
      // console.log(f1);
      // console.log(f2);
      player1info[2] -=f1;
      player2info[2] -=f2;

      console.log(player1info[0]+":"+player1info[2]+" * * "+player2info[0]+":"+player2info[2]);
//This runs a check for the winner.
      var outcome = winnerChk();
      console.log(outcome);
// if the winner function produces the "No Winner" String, the round is incremented and the progrem loops
//else a winer or both characters are dead and the program breaks
      if (outcome === "No Winner"){
        round++;
        alert(player1info[0]+":"+player1info[2]+" *ROUND "+round+" IS OVER* " +player2info[0]+":"+player2info[2]);
      }else{
        alert(outcome);
        break;
      };
    };
  };
// the function checks  for the winner
  function winnerChk(){

    console.log("Otter Winner Check")

    var result ="No Winner";
    if (player1info[2]<0 && player2info[2]<0){
      result = "You Both Die.";
    }else if (player1info[2]<0){
      result = player2info[0] + " WINS!!!";
    }else if (player2info[2]<0){
      result = player1info[0] + " WINS!!!";
    };
.. we then return the result
    return result;
  };

/************* Program Starts Here **************/
console.log("OtterLove1");
  fight();

})();
