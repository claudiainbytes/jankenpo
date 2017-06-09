/***
* Jan Ken Po!
* Rock, Paper or Scissors
* Created by: ClaudiaInBytes
* 2017
**/

function Player(name){

  this.name = name;
  this.weapon = null;
  this.score = 0;

  this.setWeapon = function(){
    this.weapon = game.getWeapon();
  }

}

function JanKenPo(){

    this.weapons = ["Rock","Paper","Scissors"];
    this.attempt = 1;
    this.max_attempts = 3;
    this.winner = null;

    this.showPlayers = function(playerA, playerB){
      console.log("** Our Players **");
      console.log("Player 1: " + playerA.name);
      console.log("Player 2: " + playerB.name);

    }

    this.getWeapon = function(){

      var i = Math.floor((Math.random() * 3) + 0);
      return this.weapons[i];

    }

    this.rules = function(playerA, playerB){

      var a = this.weapons.indexOf(playerA.weapon);
      var b = this.weapons.indexOf(playerB.weapon);

      var message = null;

      if( a == b ){

        message = "It's a tie! Play again!";

        if(this.attempt > 0){
          this.attempt -= 1;
        }

        this.winner = "Nobody";

      }else{

        if (( a == 0 ) && ( b == 1) ){
          //rock vs paper, beats paper
          message = this.weapons[b] + " beats " + this.weapons[a];
          this.whoIsWinning(playerB);
        }
        if (( a == 1 ) && ( b == 0) ){
          //paper vs rock, beats paper
          message = this.weapons[a] + " beats " + this.weapons[b];
          this.whoIsWinning(playerA);
        }
        if (( a == 0 ) && ( b == 2) ){
          //rock vs scissors, beats rock
          message = this.weapons[a] + " beats " + this.weapons[b];
          this.whoIsWinning(playerA);
        }
        if (( a == 2 ) && ( b == 0 ) ){
          //scissors vs rock, beats rock
          message = this.weapons[b] + " beats " + this.weapons[a];
          this.whoIsWinning(playerB);
        }
        if (( a == 1 ) && ( b == 2) ){
          //paper vs scissors, beats scissors
          message = this.weapons[b] + " beats " + this.weapons[a];
          this.whoIsWinning(playerB);
        }
        if (( a == 2 ) && ( b == 1 ) ){
          //scissors vs paper, beats scissors
          message = this.weapons[a] + " beats " + this.weapons[b];
          this.whoIsWinning(playerA);
        }
      }

      console.log("RESULT: " + message);

    };

    this.whoIsWinning = function(player){
        this.winner = player.name;
        this.setScore(player);
    };

    this.setScore = function(player){
        player.score += 1;
    }

    this.finalScore = function(playerA, playerB){

      if( playerA.score > playerB.score ){
        console.log("THE WINNER IS: " + playerA.name + " with " + playerA.score + " points.");
      }else{
        console.log("THE WINNER IS: " + playerB.name + " with " + playerB.score + " points.");
      }

    }

    this.play = function(playerA, playerB){

      while( this.attempt <= this.max_attempts ){

        console.log("** Round " + this.attempt + " **");

        playerA.setWeapon();
        playerB.setWeapon();

        console.log("Player 1: "+ playerA.name + " says " + playerA.weapon);
        console.log("Player 2: "+ playerB.name + " says " + playerB.weapon);

        this.rules(playerA, playerB);

        console.log("WINNER: " + this.winner);

        this.attempt++;

      }

      console.log("** FINAL SCORE **");
      this.finalScore(playerA, playerB);

    }

}

var game = new JanKenPo();

console.log("*** Welcome to Jan Ken Po! ***");

var player1 = new Player("Claudia");
var player2 = new Player("John");

game.showPlayers(player1,player2);
game.play(player1, player2);
