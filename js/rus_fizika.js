




document.addEventListener("DOMContentLoaded", function() {


    var fiz = [ "fiz1", "fiz2", "fiz3", "fiz4", "fiz5", "fiz6", "fiz7", "fiz8", "fiz9", "fiz10", "fiz11", "fiz12", "fiz13", "fiz14", "fiz15", "fiz16", "fiz17", "fiz18", "fiz19", "fiz20", "fiz21", "fiz22", "fiz23", "fiz24", "fiz25", "fiz26", "fiz27", "fiz28", "fiz29", "fiz30", "fiz31", "fiz32", "fiz33", "fiz34", "fiz35", "fiz36", "fiz37", "fiz38", "fiz39", "fiz40", "fiz41", "fiz42", "fiz43", "fiz44", "fiz45", "fiz46", "fiz47", "fiz48", "fiz49", "fiz50", "fiz51", "fiz52", "fiz53", "fiz54", "fiz55", "fiz56", "fiz57", "fiz58", "fiz59", "fiz60", "fiz61", "fiz62", "fiz63", "fiz64", "fiz65", "fiz66", "fiz67", "fiz68", "fiz69", "fiz70", "fiz71", "fiz72", "fiz73", "fiz74", "fiz75", "fiz76", "fiz77", "fiz78", "fiz79", "fiz80", "fiz81", "fiz82", "fiz83", "fiz84", "fiz85", "fiz86", "fiz87", "fiz88", "fiz89", "fiz90", "fiz91", "fiz92", "fiz93", "fiz94", "fiz95", "fiz96", "fiz97", "fiz98", "fiz99", "fiz100", "fiz101", "fiz102", "fiz103", "fiz104", "fiz105", "fiz106", "fiz107", "fiz108", "fiz109", "fiz110", "fiz111", "fiz112", "fiz113", "fiz114", "fiz115", "fiz116", "fiz117", "fiz118", "fiz119", "fiz120", "fiz121", "fiz122", "fiz123", "fiz124", "fiz125", "fiz126", "fiz127", "fiz128", "fiz129", "fiz130", "fiz131", "fiz132", "fiz133", "fiz134", "fiz135", "fiz136", "fiz137", "fiz138", "fiz139", "fiz140", "fiz141", "fiz142", "fiz143", "fiz144", "fiz145", "fiz146", "fiz147", "fiz148", "fiz149", "fiz150", "fiz151", "fiz152", "fiz153", "fiz154", "fiz155", "fiz156", "fiz157", "fiz158", "fiz159", "fiz160", "fiz161", "fiz162", "fiz163", "fiz164", "fiz165", "fiz166", "fiz167", "fiz168", "fiz169", "fiz170", "fiz171", "fiz172", "fiz173", "fiz174", "fiz175", "fiz176", "fiz177", "fiz178", "fiz179", "fiz180", "fiz181", "fiz182", "fiz183", "fiz184", "fiz185", "fiz186", "fiz187", "fiz188", "fiz189", "fiz190", "fiz191",  "fiz192", "fiz193", "fiz194", "fiz195", "fiz196", "fiz197", "fiz198", "fiz199", "fiz200", "fiz201", "fiz202", "fiz203", "fiz204", "fiz205", "fiz206", "fiz207", "fiz208", "fiz209", "fiz210", "fiz211", "fiz212", "fiz213", "fiz214", "fiz215", "fiz216", "fiz217", "fiz218", "fiz219", "fiz220", "fiz221", "fiz222", "fiz223", "fiz224", "fiz225", "fiz226", "fiz227", "fiz228", "fiz229", "fiz230", "fiz231", "fiz232", "fiz233", "fiz234", "fiz235", "fiz236", "fiz237", "fiz238", "fiz239", "fiz240", "fiz241", "fiz242", "fiz243", "fiz244", "fiz245", "fiz246", "fiz247", "fiz248", "fiz249", "fiz250", "fiz251", "fiz252", "fiz253", "fiz254", "fiz255", "fiz256", "fiz257", "fiz258", "fiz259", "fiz260", "fiz261", "fiz262", "fiz263", "fiz264" , ];

  for (var id of fiz) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

 var rus = ["rus1", "rus2", "rus3","rus4","rus5","rus6","rus7","rus8","rus9","rus10","rus11","rus12", ];
  for (var id of rus) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  }; 









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





