/*Devante Webb
4/6/15
Goal1: assignment: Duel
*/
(function(){


  var round = 0;

  // var player1info = ["Spiderman",20,100];
  // var player2info = ["Batman",20,100];

  var players = [{name:'Spiderman', damage:'20', health:'100'},{name:'Batman', damage:'20', health:'100'}];
  document.querySelector("#kabal p").innerHTML = players[0].name+":"+players[0].health ;
  document.querySelector("#kratos p").innerHTML = players[1].name+":"+players[1].health ;
  function fight(){

    console.log("Otter Fight Function");
    alert(players[0].name+":"+players[0].health+" *START* "+players[1].name+":"+players[1].health);
    // document.querySelector("kabal").innerHTML = players[0].name+":"+players[0].health ;
    for(var i=0;i<10;i++){
      // math.floor(math.random();
      var minDamage1 = players[0].damage * .5;
      var minDamage2 = players[1].damage * .5;
      var f1 = Math.floor(Math.random()*(players[0].damage - minDamage1)+ minDamage1);
      var f2 = Math.floor(Math.random()*(players[1].damage - minDamage2)+ minDamage2);
      // console.log(f1);
      // console.log(f2);
      players[0].health -=f1;
      players[1].health -=f2;

      console.log(players[0].name+":"+players[0].health+" * * "+players[1].name+":"+players[1].health);
      var outcome = winnerChk();
      console.log(outcome);

      if (outcome === "No Winner"){
        round++;
        alert(players[0].name+":"+players[0].health+" *ROUND "+round+" IS OVER* " +players[1].name+":"+players[1].health);
        document.querySelector("#kabal p").innerHTML = players[0].name+": "+players[0].health ;
        document.querySelector("#kratos p").innerHTML = players[1].name+": "+players[1].health ;
        document.querySelector("#round_number input").innerHTML = round;
      }else{
        alert(outcome); //COME BACK AND DELETE
        document.querySelector("#scores").innerHTML = outcome;
        break;
      };
    };
  };

  function winnerChk(){

    console.log("Otter Winner Check")

    var result ="No Winner";
    if (players[0].health<0 && players[1].health<0){
      result = "You Both Die.";
    }else if (players[0].health<0){
      result = players[1].name + " WINS!!!";
    }else if (players[1].health<0){
      result = players[0].name + " WINS!!!";
    };

    return result;
  };
/************* Program Starts Here **************/
console.log("OtterLove1");
fight();

})();
