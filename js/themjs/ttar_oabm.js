document.addEventListener("DOMContentLoaded", function(){

  var ttar = ["ttar1", "ttar2", "ttar3", "ttar4", "ttar5", "ttar6", "ttar7", "ttar8", "ttar9", "ttar10", "ttar11", "ttar12",  ];
 
  for (var id of ttar) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea)
}
});

 var toabm = ["toabm1", "toabm2", "toabm3", "toabm4", "toabm5", "toabm6",  ];
 
  for (var id of toabm) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
};