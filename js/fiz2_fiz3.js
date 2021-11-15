document.addEventListener("DOMContentLoaded", function() {

 var fiz2 = ["fiz13", "fiz14", "fiz15","fiz6","fiz17","fiz18", "fiz19","fiz20", "fiz21","fiz22","fiz23", "fiz24", ];
 
  for (var id of fiz2) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

 var fiz3 = ["fiz25", "fiz26", "fiz27","fiz28","fiz29","fiz30","fiz31","fiz32","fiz33","fiz4","fiz35","fiz36", ];
  for (var id of fiz3) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }; 


