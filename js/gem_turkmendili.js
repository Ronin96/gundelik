

document.addEventListener("DOMContentLoaded", function() {

 var gem = [ "gem1", "gem2", "gem3", "gem4", "gem5", "gem6", "gem7", "gem8", "gem9", "gem10", "gem11", "gem12", "gem13", "gem14", "gem15", "gem16", "gem17", "gem18", "gem19", "gem20", "gem21", "gem22", "gem23", "gem24", "gem25", "gem26", "gem27", "gem28", "gem29", "gem30", "gem31", "gem32", "gem33", "gem34", "gem35", "gem36", "gem37", "gem38", "gem39", "gem40", "gem41", "gem42", "gem43", "gem44", "gem45", "gem46", "gem47", "gem48", "gem49", "gem50", "gem51", "gem52", "gem53", "gem54", "gem55", "gem56", "gem57", "gem58", "gem59", "gem60", "gem61", "gem62", "gem63", "gem64", "gem65", "gem66", "gem67", "gem68", "gem69", "gem70", "gem71", "gem72", "gem73", "gem74", "gem75", "gem76", "gem77", "gem78", "gem79", "gem80", "gem81", "gem82", "gem83", "gem84", "gem85", "gem86", "gem87", "gem88", "gem89", "gem90", "gem91", "gem92", "gem93", "gem94", "gem95", "gem96", "gem97", "gem98", "gem99", "gem100", "gem101", "gem102", "gem103", "gem104", "gem105", "gem106", "gem107", "gem108", "gem109", "gem110", "gem111", "gem112", "gem113", "gem114", "gem115", "gem116", "gem117", "gem118", "gem119", "gem120", "gem121", "gem122", "gem123", "gem124", "gem125", "gem126", "gem127", "gem128", "gem129", "gem130", "gem131", "gem132", "gem133", "gem134", "gem135", "gem136", "gem137", "gem138", "gem139", "gem140", "gem141", "gem142", "gem143", "gem144", "gem145", "gem146", "gem147", "gem148", "gem149", "gem150", "gem151", "gem152", "gem153", "gem154", "gem155", "gem156", "gem157", "gem158", "gem159", "gem160", "gem161", "gem162", "gem163", "gem164", "gem165", "gem166", "gem167", "gem168", "gem169", "gem170", "gem171", "gem172", "gem173", "gem174", "gem175", "gem176", "gem177", "gem178", "gem179", "gem180", "gem181", "gem182", "gem183", "gem184", "gem185", "gem186", "gem187", "gem188", "gem189", "gem190", "gem191",  "gem192", "gem193", "gem194", "gem195", "gem196", "gem197", "gem198", "gem199", "gem200", "gem201", "gem202", "gem203", "gem204", "gem205", "gem206", "gem207", "gem208", "gem209", "gem210", "gem211", "gem212", "gem213", "gem214", "gem215", "gem216", "gem217", "gem218", "gem219", "gem220", "gem221", "gem222", "gem223", "gem224", "gem225", "gem226", "gem227", "gem228", "gem229", "gem230", "gem231", "gem232", "gem233", "gem234", "gem235", "gem236", "gem237", "gem238", "gem239", "gem240", "gem241", "gem242", "gem243", "gem244", "gem245", "gem246", "gem247", "gem248", "gem249", "gem250", "gem251", "gem252", "gem253", "gem254", "gem255", "gem256", "gem257", "gem258", "gem259", "gem260", "gem261", "gem262", "gem263", "gem264" ,  ];

 
  for (var id of gem) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

var tkm = ["tkm1", "tkm2", "tkm3","tkm4","tkm5","tkm6","tkm7","tkm8","tkm9","tkm10","tkm11","tkm12", ];

 
  for (var id of tkm) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 



  function connectInp(input1,input2){////// Функция получает на вход селекторы
  const elemInp1 = document.querySelector(input1);
  const elemInp2 = document.querySelector(input2);/////// получаем элементы по этим селекторам
  const changeData = function(){ ///// функция обмена данными между ними
    if(this === elemInp1){
      elemInp2.value = elemInp1.value
    }else{
      elemInp1.value = elemInp2.value
    }
  }
  elemInp1.addEventListener('input',changeData);
  elemInp2.addEventListener('input',changeData);///// прикручиваем событие input к функции обмена данными
}

connectInp('#inp1','#inp2')/// вызываем функцию синхронизации

 
