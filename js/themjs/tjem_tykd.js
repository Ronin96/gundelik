document.addEventListener("DOMContentLoaded", function(){

  var tjem = ["tjem1", "tjem2", "tjem3", "tjem4", "tjem5", "tjem6",  ];
 
  for (var id of tjem) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
}
});

 var tykd = ["tykd1", "tykd2", "tykd3", "tykd4", "tykd5", "tykd6",  ];
 
  for (var id of tykd) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
};