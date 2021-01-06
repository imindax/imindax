var demos = [
  // Main
  "https://imindax.github.io/Lost-in-Space/",
  "https://imindax.github.io/Snake/",
  "https://imindax.github.io/Game-of-Dots/",

  // Side
  "https://imindax.github.io/Pixel-Battle/",
  "https://imindax.github.io/2D-Shooter/",
  "https://imindax.github.io/Game-of-DOTs-2/",
  "https://imindax.github.io/Slime-Pet/",
  "https://imindax.github.io/Castle-Defense/",
  
  // Experimental
  "https://imindax.github.io/Perlin-Noise-Terrain/",
  "http://black.com/",
  "http://lifehacker.com/"
]

var descriptions = [
  // Main
  "Mouse",
  "Mouse, WASD, Arrow Keys",
  "Mouse, Left-Shift, Z, X, C",
  
  // Side
  "Mouse",
  "Mouse, WASD, R, E, G",
  "Mouse, QWER",
  "Mouse",
  "Mouse",

  // Experimental
  "Mouse, WASD, Space",
  "(WIP)",
  "(WIP)"
]

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns_demo = document.getElementsByClassName("btn_demo");

var demo_iframe = document.getElementById("demo");
var demo_herf = document.getElementById("demoOpen")

var btn_reload = document.getElementById("reload");
var ctrl_description = document.getElementById("control-description")

// Get the <span> element that closes the modal
var btn_close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
Array.from(btns_demo).forEach (
  function(element, index, array) {
    element.onclick = function() {
      demo_iframe.src = demos[index];
      demo_herf.setAttribute('href', demos[index]);
      modal.style.display = "block";
      change_description(descriptions[index]);
    }
  }
);

// When the user clicks on <span> (x), close the modal
btn_close.onclick = function() {
  modal.style.display = "none";
  demo_iframe.src = "";
  demo_herf.setAttribute('href', "");
}

btn_reload.onclick = function() {
  demo_iframe.src = demo_iframe.src;
}

change_description = function(description) {
  ctrl_description.innerHTML = description;
}
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
