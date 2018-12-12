// Get the modal
var triviaModal = document.getElementById('myTriviaModal');

// Get the button that opens the modal
var btn = document.getElementById("myTriviaBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  triviaModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  triviaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == triviaModal) {
    triviaModal.style.display = "none";
  }
}

// crystal game modal
// Get the modal
var crystalModal = document.getElementById('myCrystalModal');

// Get the button that opens the modal
var btn = document.getElementById("myCrystalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  crystalModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  crystalModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == crystalModal) {
    crystalModal.style.display = "none";
  }
}

// word guess game modal
// Get the modal
var wordModal = document.getElementById('myWordModal');

// Get the button that opens the modal
var btn = document.getElementById("myWordBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  wordModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  wordModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == wordModal) {
    wordModal.style.display = "none";
  }
}

// Disaster modal
// Get the modal
var disasterModal = document.getElementById('myDisasterModal');

// Get the button that opens the modal
var btn = document.getElementById("myDisasterBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  disasterModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  disasterModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == disasterModal) {
    disasterModal.style.display = "none";
  }
}

// FindaSpot modal
// Get the modal
var findaSpotModal = document.getElementById('myFindaSpotModal');

// Get the button that opens the modal
var btn = document.getElementById("myFindaSpotBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  findaSpotModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  findaSpotModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == findaSpotModal) {
    findaSpotModal.style.display = "none";
  }
}