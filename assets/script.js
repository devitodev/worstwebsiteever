var penguinImage = document.querySelector('.penguin-pic')



console.log(penguinImage)   

$(document).ready(function(){
    if (jQuery) {  
      // jQuery is loaded  
      alert("Yeah!");
    } else {
      // jQuery is not loaded
      alert("Doesn't Work");
    }
  });