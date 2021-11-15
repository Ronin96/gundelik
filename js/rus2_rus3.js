document.addEventListener("DOMContentLoaded", function() {

 var rus2 = ["rus13", "rus14", "rus15","rus16","rus17","rus18", "rus19","rus20", "rus21","rus22","rus23", "rus24", ];
 
  for (var id of rus2) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

 var rus3 = ["rus25", "rus26", "rus27","rus28","rus29","rus30","rus31","rus32","rus33","rus34","rus35","rus36", ];
  for (var id of rus3) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }; 


