document.addEventListener("DOMContentLoaded", function(){

  var ttkm = ["ttkm1", "ttkm2", "ttkm3", "ttkm4", "ttkm5", "ttkm6", "ttkm7", "ttkm8", "ttkm9", "ttkm10", "ttkm11", "ttkm12", "ttkm13", "ttkm14", "ttkm15", "ttkm16", "ttkm17", "ttkm18",   ];
 
  for (var id of ttkm) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
}
});

 var teko = ["teko1", "teko2", "teko3", "teko4", "teko5", "teko6",  ];
 
  for (var id of teko) {
    var textarea = document.getElementById(id);
    textarea.value = localStorage.getItem(id);
    (function(id, textarea) {
      textarea.addEventListener("change", function() {
        localStorage.setItem(id, textarea.value);
      });
    })(id, textarea);
};