document.addEventListener("DOMContentLoaded", function() {
 
  var talg = [ "talg1", "talg2", "talg3", "talg4", "talg5", "talg6", "talg7", "talg8", "talg9", "talg10", "talg11", "talg12", "talg13", "talg14", "talg15", "talg16", "talg17", "talg18", "talg19", "tbed1", "tbed2", "tbed3", "tbed4", "tbed5", "tbed6",  ];
 
  for (var id of talg) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
  } 
});

 var tbed = ["tbed1", "tbed2", "tbed3", "tbed4", "tbed5", "tbed6",  ];
 
  for (var id of tbed) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
};