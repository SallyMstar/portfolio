
// Start by declaring variables for reference

let bars = document.getElementById('takeOut');
let drawer = document.getElementById('menu');

bars.addEventListener('click', function() {
  drawer.classList.toggle('open');
  drawer.classList.toggle('closed');
  // e.stopPropagation();
});
