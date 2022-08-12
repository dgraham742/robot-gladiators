//Games States
//"WIN"-Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
//"LOSE"-Player robot's health is zero or less

window.alert("This is an alert! JavaScript is running!");
// this creates a function name "fight"
function fight() {
    window.alert("The fight has begun!");
}
fight();
var playerName=window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;
//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
var enemyNames= ["Roborto","Amy Android", "Robo Trumble"]; 
var enemyHealth= randomNumber(40,60);
var enemyAttack=12;
for(var i=0; i < enemyNames.length; i++ ){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + "is at" + i + "index");
}
//create function
var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //subtract the value of 'playerAttack' from value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth=enemyHealth-playerAttack;
    //log a resulting message to the console so we know it worked
    console.log(playerName+" attacked "+ enemyNames +". "+ enemyNames +" now has "+ enemyHealth +" health remaining ");
    //check enemy's health
if(enemyHealth <=0){
    window.alert(enemyNames + " has died! ");
}
else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left. ");
}
   
if (playerHealth >0) {
    console.log("Your player is still alive!")
}
var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP to choose");
//if player choses to fight, then fight
if (promptFight === "fight"|| promptFight ==="fight"){
    //remove enemy's health by subtracting the amount set in the playerAttack
    enemyHealth = math.max(0, enemyHealth - playerAttack);
    console.log(playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaining.");
}
    //check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyNames + "has died!");
        break;
    }else {
        window.alert( enemyNames + "still has" + enemyHealth + "health left.");
    }
    //remove player's health by subtractingthe amount set in the enemyAttack varible
    playerHealth = math.max(0, playerHealth-enemyAttack);
    console.log(
        enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + " health remaining"
    );
    //check player's health
    if (playerHealth <=0) {
        window. alert(playerName + " has died!");
        break;
        
    } else {
        window.alert (playerName + " still has " + playerHealth + " health left. ");
    }

    //if player chooses to skip
}  if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert (playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
//confirm player wants to skip
    var confirmSkip= window.confirm("Are you sure you'd like to quit?");
//if yes (true), leave fight
if (confirmSkip) {
    window.alert(playerName + " has secided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = math.max(0, playerMoney -10);
    console.log("playerMoney", playerMoney);
    break;
}
//if no (false),ask question again by running fight() again
else {
    
}

//function to generate a random numeric value
var randomNumber = function(min,max) {
    var value = math.floor(math.random () * (max - min +1) =min);
    return value;
};
//execute function 
//repeat and execute as long as the enemy-robot is alive
var fight=function(enemyName){
  
   while(enemyHealth >0){
} 
   while(playerHealth > 0 && enemyHealth >0){

   }
   
//fight function statements
// function to start a new game
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0 && i <enemyNames.length -1) {
        var storeConfirm=window.confirm("The fight is over, visit the store before the next round?");
        //if yes, take them to the store() function
        if(storeConfirm) {
            shop();
        }
        }
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);
        if (i < enemyNames.length - 1) {
            shop();
        }
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    var shop = function(){
    //ask player what thyey'd like to do
    var shopOptionPrompt = window.prompt("Would you like to Refill your health, Upgrade your attack, or Leave the store? Please enter one: 'REFILL, 'UPGRADE, or 'LEAVE' to make a choice. ");
    //use switch to carry out action
    switch(shopOptionPrompt){
        case 'refill'://new case
        case 'REFILL':

            if (playerMoney >=7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            
            //increase attack and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney -7;
        }
        else {
            window.alert("you don't have enough money!");
        }
            break;
        case "upgrade":
        case 'UPGRADE':    
            if (playerMoney >=7){
            window.alert ("upgrading player's attack by 6 for 7 dollars.");
            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("you don't have enough money!");
        }
            break;
        case 'leave':
        case 'LEAVE':    
            window.alert("leaving the store")
            //do nothing,so function will end
            break;
        default:
                window.alert ("You did not pick a valid option. Try again.")
                //call shop()again to force player to pick a valid option
                shop();
                break

    }

  };
    endGame();
    var endGame = function() {
    if (playerHealth >0){
        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
    }
    else {
         Window.alert("You've lost your robot in battle.");
    }
    
    window.alert("The game has now ended. Let's see how you did!");
  };
  var playagainConfirm=window.confirm("Would you like to play again");

  if(playagainConfirm) {
    startGame();
  }
  else{
    window.alert("Thank you for playing Robot Gladiators!Come back soon!");
  }
  
  
  startGame();
  };