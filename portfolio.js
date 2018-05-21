
// Start by declaring variables for reference

// Menu slide action variables
let bars = document.getElementById('takeOut');
let drawer = document.getElementById('menu');

// Menu slide action
bars.addEventListener('click', function() {
  drawer.classList.toggle('open');
  drawer.classList.toggle('closed');
  // e.stopPropagation();
});

// Menu option variables
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let option5 = document.getElementById('option5');

// Rollover effects for menu
$(document).ready(function() {
     // Rollover effect for menu option 1
     $(option1).hover(function(option){
          $(option1).css('background-color','mediumblue');
     })
     $(option1).mouseout(function(option) {
          $(option1).css('background-color','navy');
     })
     // Rollover effect for menu option 2
     $(option2).hover(function(option){
          $(option2).css('background-color','mediumblue');
     })
     $(option2).mouseout(function(option) {
          $(option2).css('background-color','navy');
     })
     // Rollover effect for menu option 3
     $(option3).hover(function(option){
          $(option3).css('background-color','mediumblue');
     })
     $(option3).mouseout(function(option) {
          $(option3).css('background-color','navy');
     })
     // Rollover effect for menu option 4
     $(option4).hover(function(option){
          $(option4).css('background-color','mediumblue');
     })
     $(option4).mouseout(function(option) {
          $(option4).css('background-color','navy');
     })
     // Rollover effect for menu option 5
     $(option5).hover(function(option){
          $(option5).css('background-color','mediumblue');
     })
     $(option5).mouseout(function(option) {
          $(option5).css('background-color','navy');
     })
     // Rollover effect for menu option 6
     $(option6).hover(function(option){
          $(option6).css('background-color','mediumblue');
     })
     $(option6).mouseout(function(option) {
          $(option6).css('background-color','navy');
     })
     // Menu selection action
     $(option2).click(function() {
          $('#sites').show("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
     $(option1).click(function() {
          $('#sites').hide("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
})
