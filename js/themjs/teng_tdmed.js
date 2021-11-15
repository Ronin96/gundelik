document.addEventListener("DOMContentLoaded", function(){

  var teng = ["teng1", "teng2", "teng3", "teng4", "teng5", "teng6", "teng7", "teng8", "teng9", "teng10", "teng11", "teng12", "teng13", "teng14", "teng15", "teng16", "teng17", "teng18", "teng19", "teng20", "teng21", "teng22", "teng23", "teng24"  ];
 
  for (var id of teng) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea)
}
});

 var tdmed = ["tdmed1", "tdmed2", "tdmed3", "tdmed4", "tdmed5", "tdmed6",  ];
 
  for (var id of tdmed) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
};