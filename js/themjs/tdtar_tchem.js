document.addEventListener("DOMContentLoaded", function(){

  var tdtar = ["tdt1", "tdt2", "tdt3", "tdt4", "tdt5", "tdt6",  ];
 
  for (var id of tdtar) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
}
});

 var thim = ["thim1", "thim2", "thim3", "thim4", "thim5", "thim6",  ];
 
  for (var id of thim) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
};