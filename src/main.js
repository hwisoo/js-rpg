import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player } from './Player.js';

let newPlayer, newEnemy;

$(document).ready(function () {
  let enemies = document.getElementsByClassName("enemies");
  console.log(enemies);
  let horde = document.getElementById("horde");
  console.log(horde);
  $("#horde").addClass("invisible");

  // Choose player character
  $(".characters").click(function (event) {
    // let game = new GameManager;
    let clickedId = this.getAttribute("id");
    newPlayer = new Player(clickedId);
    newPlayer.setAttributes(clickedId);

    $(".characters").addClass("invisible");
   
    let playerImg = document.getElementById(clickedId);
    playerImg.classList.remove("invisible");
    playerImg.classList.add("pickedCharacter");

    let stats = document.getElementById("stats");
    let header = document.getElementById("header");
    let playerStats = document.getElementById("playerStats");

    header.innerHTML = "Your player is " + clickedId + "!";
    playerStats.innerHTML = "<h3>Your player's stats: </h3>" + " <p>Class: " + newPlayer.classType + "</p>  <p>Speed: " + newPlayer.speed + "</p><p> Health: " + newPlayer.health + " </p><p>Defense: " + newPlayer.defense + "</p><p> Attack: " + newPlayer.attack; +  "</p>";
 
  $("#horde").removeClass("invisible");
  enemies.innerHTML = "<h3>Choose enemies below.</h3>";
});

// Choose an enemy to fight
$(".enemies").click(function (event) {
  let clickedId = this.getAttribute("id");
  newEnemy = new Player(clickedId);
  newEnemy.setAttributes(clickedId);

  $(".enemies").addClass("invisible");
   
    let enemyImg = document.getElementById(clickedId);
    enemyImg.classList.remove("invisible");
    enemyImg.classList.add("pickedEnemy");

  let battle = document.getElementById("battle");
  battle.innerHTML = "<button id='battle'>Start Battle!</button>"
  
});

$("#battle").click(function(event){
  // let newChar = 
  let myId = $(".pickedCharacter")[0].getAttribute("id");
  let myCharacter = new Player(myId);
  myCharacter.setAttributes(myId);

  // let attack = document.getElementById("attack");

  let enemyId = $(".pickedEnemy")[0].getAttribute("id");
  let myEnemy = new Player(enemyId);
  myEnemy.setAttributes(enemyId);

  let battleScene = [myCharacter, myEnemy]
 
  console.table(battleScene);
  let battleField = document.getElementById("battleField");
  battleField.innerHTML = "<p>Enemy: " + battleScene[1].classType + "</p>" +
                            "<p>Enemy Health: " + battleScene[1].health + "</p>"+
                            "<p>Enemy Attack: " + battleScene[1].attack + "</p>"+
                            "<p>Enemy Defense: " + battleScene[1].defense + "</p>"+
                            "<p>Enemy Speed: " + battleScene[1].speed + "</p>" +
                            "<button id='attack'>Attack!</button>"

                            $("#attack").click(function(event){

                               let dmg = myCharacter.calculateDamage(myCharacter, myEnemy);
                              myEnemy.damage(dmg, myEnemy);
                              
                              let enemyDmg = myEnemy.calculateDamage(myEnemy, myCharacter);
                              myCharacter.damage(enemyDmg, myCharacter)
                              
                              newPlayer = myCharacter;
                              newEnemy = myEnemy;
                              
                              myCharacter.playerAlive(myCharacter);
                              let enemyIsAlive = true;
                              let counter=0;
                              while(enemyIsAlive){
                                myEnemy.damage(dmg, myEnemy);
                                counter++;
                                console.log("Player has attacked." + counter + " times");

                              battleField.innerHTML = "<p>Enemy: " + battleScene[1].classType + "</p>" +
                              "<p>Enemy Health: " + battleScene[1].health + "</p>"+
                              "<p>Enemy Attack: " + battleScene[1].attack + "</p>"+
                              "<p>Enemy Defense: " + battleScene[1].defense + "</p>"+
                              "<p>Enemy Speed: " + battleScene[1].speed + "</p>" 
                              
                              "<button id='attack'>Attack!</button>"
                              enemyIsAlive = myEnemy.enemyAlive(myEnemy)
                              }
                              // attack.innerHTML = "<p>Enemies health is: </p>" + myEnemy.health + "<br> Damage to me: " + myCharacter.damage;
                            
                            });
});


});
  

