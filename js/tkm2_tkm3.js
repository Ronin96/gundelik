document.addEventListener("DOMContentLoaded", function() {

 var tkm2 = ["tkm13", "tkm14", "tkm15","tkm16","tkm17","tkm18", "tkm19","tkm20", "tkm21","tkm22","tkm23", "tkm24", ];
 
  for (var id of tkm2) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

 var tkm3 = ["tkm25", "tkm26", "tkm27","tkm28","tkm29","tkm30","tkm31","tkm32","tkm33","tkm34","tkm35","tkm36", ];
  for (var id of tkm3) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }; 


