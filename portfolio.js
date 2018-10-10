
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
let aboutMe = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let option5 = document.getElementById('option5');
let option6 = document.getElementById('option6');
let option7 = document.getElementById('option7');

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
     // Rollover effect for menu option 7
     $(option7).hover(function(option){
          $(option7).css('background-color','mediumblue');
     })
     $(option7).mouseout(function(option) {
          $(option7).css('background-color','navy');
     })
// Menu selection action
     $(option1).click(function() {
     // When home is clicked, show all
     $('#bio').show("slow");
     $('#projects').show("slow");
     $('#sites').show("slow");
     $('#skills').show("slow");
     $('#contact').show("slow");
     // Hide the menu upon selection
     drawer.classList.toggle('closed');
     })
     $(option2).click(function() {
          // show the selected
          $('#bio').show("slow");
          // Hide all others
          $('#projects').hide("slow");
          $('#sites').hide("slow");
          $('#skills').hide("slow");
          $('#contact').hide("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
     $(option3).click(function() {
          // show the selected
          $('#projects').show("slow");
          // Hide all others
          $('#bio').hide("slow");
          $('#sites').hide("slow");
          $('#skills').hide("slow");
          $('#contact').hide("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
     $(option4).click(function() {
          // show the selected
          $('#sites').show("slow");
          // Hide all others
          $('#bio').hide("slow");
          $('#projects').hide("slow");
          $('#skills').hide("slow");
          $('#contact').hide("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
     $(option5).click(function() {
          // show the selected
          $('#skills').show("slow");
          // Hide all others
          $('#bio').hide("slow");
          $('#projects').hide("slow");
          $('#sites').hide("slow");
          $('#contact').hide("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
     $(option6).click(function() {
          // show the selected
          $('#contact').show("slow");
          // Hide all others
          $('#bio').hide("slow");
          $('#projects').hide("slow");
          $('#sites').hide("slow");
          $('#skills').hide("slow");
          $('#home').hide("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
     $(option7).click(function() {
          // show the selected
          // links to registry rocket
          // Hide all others
          $('#contact').hide("slow");
          $('#bio').hide("slow");
          $('#projects').hide("slow");
          $('#sites').hide("slow");
          $('#skills').hide("slow");
          $('#home').hide("slow");
          // Hide the menu upon selection
          drawer.classList.toggle('closed');
     })
})
