document.addEventListener("DOMContentLoaded", function() {

 var gem2 = ["gem13", "gem14", "gem15","gem16","gem17","gem18", "gem19","gem20", "gem21","gem22","gem23", "gem24", ];
 
  for (var id of gem2) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

 var gem3 = ["gem25", "gem26", "gem27","gem28","gem29","gem30","gem31","gem32","gem33","gem34","gem35","gem36", ];
  for (var id of gem3) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }; 