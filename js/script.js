
// Синхронизация input
/*var inputs = document.querySelectorAll('input')

for (let input of inputs) {
  input.oninput = function(e) {
    var event = new CustomEvent('sync', {
      detail: input.value
    })
    for (let mInput of inputs) {
      mInput.dispatchEvent(event)
    }
  }

  input.addEventListener('sync', function(e) {
    input.value = e.detail
  })
    if (localStorage.getItem('input') !== null) {
      document.getElementById('1').value = localStorage.getItem('input');
    }
    document.addEventListener('keyup', function(e) {
      localStorage.setItem('input', document.getElementById('1').value);
    });
  }
    if (localStorage.getItem('input') !== null) {
      document.getElementById('alo').value = localStorage.getItem('input');
    }
    document.addEventListener('keyup', function(e) {
      localStorage.setItem('input', document.getElementById('alo').value);
    });

*/
//Это скрипт для просмотра оценок в дневнике
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var acc = document.getElementsByClassName("week-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var weekpanel = this.nextElementSibling;
        if (weekpanel.style.display === "block") {
            weekpanel.style.display = "none";
        } else {
            weekpanel.style.display = "block";
        }
    });
}









document.addEventListener("DOMContentLoaded", function() {

  var ids = [ "alg1", "alg2", "alg3", "alg4", "alg5", "alg6", "alg7", "alg8", "alg9", "alg10", "alg11", "alg12", "alg13", "alg14", "alg15", "alg16", "alg17", "alg18", "alg19", "alg20", "alg21", "alg22", "alg23", "alg24", "alg25", "alg26", "alg27", "alg28", "alg29", "alg30", "alg31", "alg32", "alg33", "alg34", "alg35", "alg36", "alg37", "alg38", "alg39","alg40", "alg41", "alg42", "alg43", "alg44", "alg45","alg46","alg47","alg48", "alg49", "alg50", "alg51","alg52","alg53","alg54","alg55","alg56", "alg57", "alg58", "alg59", "alg60", "alg61", "alg62", "alg63", "alg64", "alg65", "alg66", "alg67", "alg68","alg69", "alg70", "alg71", "alg72", "alg73", "alg74", "alg75", "alg76", "alg77", "alg78", "alg79", "alg80", "alg81", "alg82", "alg83", "alg84", "alg85", "alg86", "alg87", "alg88", "alg89", "alg90", "alg91", "alg92", "alg93", "alg94", "alg95", "alg96", "alg97", "alg98", "alg99", "alg100", "alg101", "alg102", "alg103", "alg104", "alg105", "alg106", "alg107", "alg108", "alg109", "alg110", "alg111", "alg112", "alg113", "alg114", "alg115", "alg116", "alg117", "alg118", "alg119", "alg120", "alg121", "alg122", "alg123", "alg124", "alg125", "alg126", "alg127", "alg128", "alg129", "alg130", "alg131", "alg132", "alg133", "alg134", "alg135", "alg136", "alg137", "alg138", "alg139", "alg140", "alg141", "alg142", "alg143", "alg144", "alg145", "alg146", "alg147", "alg148", "alg149", "alg150", "alg151", "alg152", "alg153", "alg154", "alg155", "alg156", "alg157", "alg158", "alg159", "alg160", "alg161", "alg162", "alg163", "alg164", "alg165", "alg166", "alg167", "alg168", "alg169", "alg170", "alg171", "alg172", "alg173", "alg174", "alg175", "alg176", "alg177", "alg178", "alg179", "alg180", "alg181", "alg182", "alg183", "alg184", "alg185", "alg186", "alg187", "alg188", "alg189", "alg190", "alg191",  "alg192", "alg193", "alg194", "alg195", "alg196", "alg197", "alg198", "alg199", "alg200", "alg201", "alg202", "alg203", "alg204", "alg205", "alg206", "alg207", "alg208", "alg209", "alg210", "alg211", "alg212", "alg213", "alg214", "alg215", "alg216", "alg217", "alg218", "alg219", "alg220", "alg221", "alg222", "alg223", "alg224", "alg225", "alg226", "alg227", "alg228", "alg229", "alg230", "alg231", "alg232", "alg233", "alg234", "alg235", "alg236", "alg237", "alg238", "alg239", "alg240", "alg241", "alg242", "alg243", "alg244", "alg245", "alg246", "alg247", "alg248", "alg249", "alg250", "alg251", "alg252", "alg253", "alg254", "alg255", "alg256", "alg257", "alg258", "alg259", "alg260", "alg261", "alg262", "alg263", "alg264" ];
 
  for (var id of ids) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

 var chem = ["chem1", "chem2", "chem3", "chem4", "chem5", "chem6", "chem7", "chem8", "chem9", "chem10", "chem11", "chem12", "chem13", "chem14", "chem15", "chem16", "chem17", "chem18", "chem19", "chem20", "chem21", "chem22", "chem23", "chem24", "chem25", "chem26", "chem27", "chem28", "chem29", "chem30", "chem31", "chem32", "chem33", "chem34", "chem35", "chem36", "chem37", "chem38", "chem39", "chem40", "chem41", "chem42", "chem43", "fiz44", "fiz45", "fiz46", "fiz47", "fiz48", "fiz49", "fiz50", "fiz51", "fiz52", "fiz53", "fiz54", "fiz55", "fiz56", "fiz57", "fiz58", "fiz59", "fiz60", "fiz61", "fiz62", "fiz63", "fiz64", "fiz65", "fiz66", "fiz67", "fiz68", "fiz69", "fiz70", "fiz71", "fiz72", "fiz73", "fiz74", "fiz75", "fiz76", "fiz77", "fiz78", "fiz79", "fiz80", "fiz81", "fiz82", "fiz83", "fiz84", "fiz85", "fiz86", "fiz87", "fiz88", "fiz89", "fiz90", "fiz91", "fiz92", "fiz93", "fiz94", "fiz95", "fiz96", "fiz97", "fiz98", "fiz99", "fiz100", "fiz101", "fiz102", "fiz103", "fiz104", "fiz105", "fiz106", "fiz107", "fiz108", "fiz109", "fiz110", "fiz111", "fiz112", "fiz113", "fiz114", "fiz115", "fiz116", "fiz117", "fiz118", "fiz119", "fiz120", "fiz121", "fiz122", "fiz123", "fiz124", "fiz125", "fiz126", "fiz127", "fiz128", "fiz129", "fiz130", "fiz131", "fiz132", "fiz133", "fiz134", "fiz135", "fiz136", "fiz137", "fiz138", "fiz139", "fiz140", "fiz141", "fiz142", "fiz143", "fiz144", "fiz145", "fiz146", "fiz147", "fiz148", "fiz149", "fiz150", "fiz151", "fiz152", "fiz153", "fiz154", "fiz155", "fiz156", "fiz157", "fiz158", "fiz159", "fiz160", "fiz161", "fiz162", "fiz163", "fiz164", "fiz165", "fiz166", "fiz167", "fiz168", "fiz169", "fiz170", "fiz171", "fiz172", "fiz173", "fiz174", "fiz175", "fiz176", "fiz177", "fiz178", "fiz179", "fiz180", "fiz181", "fiz182", "fiz183", "fiz184", "fiz185", "fiz186", "fiz187", "fiz188", "fiz189", "fiz190", "fiz191",  "fiz192", "fiz193", "fiz194", "fiz195", "fiz196", "fiz197", "fiz198", "fiz199", "fiz200", "fiz201", "fiz202", "fiz203", "fiz204", "fiz205", "fiz206", "fiz207", "fiz208", "fiz209", "fiz210", "fiz211", "fiz212", "fiz213", "fiz214", "fiz215", "fiz216", "fiz217", "fiz218", "fiz219", "fiz220", "fiz221", "fiz222", "fiz223", "fiz224", "fiz225", "fiz226", "fiz227", "fiz228", "fiz229", "fiz230", "fiz231", "fiz232", "fiz233", "fiz234", "fiz235", "fiz236", "fiz237", "fiz238", "fiz239", "fiz240", "fiz241", "fiz242", "fiz243", "fiz244", "fiz245", "fiz246", "fiz247", "fiz248", "fiz249", "fiz250", "fiz251", "fiz252", "fiz253", "fiz254", "fiz255", "fiz256", "fiz257", "fiz258", "fiz259", "fiz260", "fiz261", "fiz262", "fiz263", "fiz264" , ];
  for (var id of chem)
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);































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


