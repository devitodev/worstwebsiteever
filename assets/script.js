var penguinImage = document.querySelector('.penguin-pic')
var dontClickBtn = document.querySelector('.evilbutton')

dontClickBtn.addEventListener('click', byeByePenguin)

function byeByePenguin() {
  penguinImage.style.display = 'none';
}

$(document).ready(function(){
    if (jQuery) {  
      // jQuery is loaded  
      alert("Yeah!");
    } else {
      // jQuery is not loaded
      alert("Doesn't Work");
    }
  });