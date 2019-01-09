import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameManager } from './GameManager.js';
import { Player } from './Player.js';

$(document).ready(function () {
  let enemies = document.getElementsByClassName("enemies");
  console.log(enemies);
  let horde = document.getElementById("horde");
  console.log(horde);
  $("#horde").addClass("invisible");
  $(".characters").click(function (event) {
    // let game = new GameManager;
    let clickedId = this.getAttribute("id");
    let newPlayer = new Player(clickedId);
    newPlayer.setAttributes(clickedId);
    console.log(newPlayer);

    $(".characters").addClass("invisible");
   
    let playerImg = document.getElementById(clickedId);
    playerImg.classList.remove("invisible");

    let footer = document.getElementById("footer");
    let header = document.getElementById("header");
  

    header.innerHTML = "Your player is " + clickedId + "!";
    footer.innerHTML = "<h3>Your player's stats: </h3>" + " <p>Class: " + newPlayer.classType + "</p>  <p>Speed: " + newPlayer.speed + "</p><p> Health: " + newPlayer.health + " </p><p>Defense: " + newPlayer.defense + "</p><p> Attack: " + newPlayer.attack; +  "</p>";
 
  $("#horde").removeClass("invisible");
  enemies.innerHTML = "<h3>Choose enemies below.</h3>";
});
$(".enemies").click(function (event) {
  let clickedId = this.getAttribute("id");
  let newEnemy = new Player(clickedId);
  newEnemy.setAttributes(clickedId);
  console.log(newEnemy);
});



});

