var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName);
console.log(playerHealth, playerAttack, playerMoney)
console.log("You can put regular sentences in these.");

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}



// fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
    
    // ask players if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }
        // remove enemy's health by subtracting the amount set in the playerAttack variable.
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            
            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
             enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
          }
        }
    };
        // if no (false), ask question again by running fight() again
       // else {
           // fight();
       // }
        // if player did not chose 1 or 2 in prompt
    // else {
       // window.alert("You need to choose a valid option. Try again!");
   // }

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    if (playerHealth > 0) {
        // let player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
        //reset enemyHealth before starting a new fight
        enemyHealth = 50;
    
        debugger;
    
        // pass the pickedEnemyName variable's value into the fight function
        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}

//run fight function to start game
//fight();

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less