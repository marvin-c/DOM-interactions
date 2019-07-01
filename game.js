// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}
var totals = {
  blue: 0,
  green: 0,
  invisible: 0
}
function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen);
    dots[i].addEventListener('click', makeBlue);
    dots[i].addEventListener('dblclick', hide);
  }
}


function makeGreen (evt) {
  evt.preventDefault();
  evt.target.classList.toggle('green');
  updateCounts(1);
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.preventDefault();
  evt.target.classList.toggle('blue');
  updateCounts(2);

}
// CREATE FUNCTION hide HERE
function hide(evt) {
  evt.target.classList.toggle('invisible');
  updateCounts(3);
}

function updateCounts (num) {


  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

if (num == 1) { totals.green++;}
else if (num == 2) { totals.blue++;}
else {totals.invisible++; totals.blue = totals.blue = 2;}


  // Once you've done the counting, this function will update the display
 displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
