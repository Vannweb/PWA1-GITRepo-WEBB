/*Devante Webb
4/6/15
Goal1: assignment: Duel
*/
(function(){
  // console.log("FIGHT!!!!");

  // //player Name
  // var playerOneName = "Spiderman";
  // var player2info[0] = "Batman";
  //
  // //Player Damage
  // var player1info[1] = 20;
  // var player2info[1] = 20;
  //
  // //player Health
  // var player1info[2] = 100;
  // var player2info[2] = 100;

  var round = 0;

  var player1info = ["Spiderman",20,100];
  var player2info = ["Batman",20,100];

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

      var outcome = winnerChk();
      console.log(outcome);

      if (outcome === "No Winner"){
        round++;
        alert(player1info[0]+":"+player1info[2]+" *ROUND "+round+" IS OVER* " +player2info[0]+":"+player2info[2]);
      }else{
        alert(outcome);
        break;
      };
    };
  };

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

    return result;
  };

/************* Program Starts Here **************/
console.log("OtterLove1");
  fight();

})();
