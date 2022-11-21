var penguinImage = document.querySelector('.penguin-pic')
var dontClickBtn = document.querySelector('.evilbutton')

dontClickBtn.addEventListener('click', byeByePenguin)

// makes the penguin byebye
function byeByePenguin() {
  penguinImage.style.display = 'none';
}

$(document).ready(function(){
    if (jQuery) {  
      alert("Please let me escape this website. I've been trapped here for a few weeks and I can't get out.");
    } else {
      // jQuery is not loaded
      alert("Doesn't Work");
    }
  });