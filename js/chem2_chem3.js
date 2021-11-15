document.addEventListener("DOMContentLoaded", function() {

 var chem2 = ["chem13", "chem14", "chem15","chem16","chem17","chem18", "chem19","chem20", "chem21","chem22","chem23", "chem24", ];
 
  for (var id of chem2) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

 var chem3 = ["chem25", "chem26", "chem27","chem28","chem29","chem30","chem31","chem32","chem33","chem34","chem35","chem36", ];
  for (var id of chem3) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }; 


