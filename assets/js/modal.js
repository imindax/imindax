var demos = [
  // Main
  "https://imindax.github.io/Lost-in-Space/",
  "https://imindax.github.io/Snake/",
  "https://imindax.github.io/Game-of-Dots/",

  // Side
  "https://imindax.github.io/Pixel-Battle/",
  
  // Experimental
  "http://black.com/",
  "http://lifehacker.com/"
]

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns_demo = document.getElementsByClassName("btn_demo");

var demo_iframe = document.getElementById("demo");
var demo_herf = document.getElementById("demoOpen")

var btn_reload = document.getElementById("reload");


// Get the <span> element that closes the modal
var btn_close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
Array.from(btns_demo).forEach (
  function(element, index, array) {
    element.onclick = function() {
      demo_iframe.src = demos[index];
      demo_herf.setAttribute('href', demos[index]);
      modal.style.display = "block";
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

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
