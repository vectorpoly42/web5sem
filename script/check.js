function checkcontact() {
  var fieldsc = [ document.getElementById('name'),
                 document.getElementById('gen1'),
                 document.getElementById('gen2'),
                 document.getElementById('age'),
                 document.getElementById('message'),
                 document.getElementById('email') ];

  fieldsc.forEach((x) => x.parentNode.style.backgroundColor = null);

  var m1 = [];

  for (var i = 0; i < 6; i++) {
    if (i == 1) {
      i++;
      if (!fieldsc[1].checked && !fieldsc[2].checked) {
        if (!m1.length) fieldsc[1].focus();
        m1.push(fieldsc[1].name);
        fieldsc[1].parentNode.style.backgroundColor = 'red';
      }
    }
    else if (!fieldsc[i].value){
      if (!m1.length) fieldsc[i].focus();
      m1.push(fieldsc[i].id);
      fieldsc[i].parentNode.style.backgroundColor = 'red';
    }
  }

  if (m1.length) {
    alert("Поля " + m1.join(', ') + " не заполнены.");
    return false;
  }
}

function checktest() {

  var fieldst = [ document.getElementById('namet'),
  document.getElementById('group'),
  document.getElementById('q1'),
  document.getElementById('ans21'),
  document.getElementById('ans22'),
  document.getElementById('ans23'),
  document.getElementById('q3') ];

  fieldst.forEach((x) => x.parentNode.style.backgroundColor = null);

  var m2 = [];

  for (var i = 0; i < 7; i++) {
    if (i == 1) {
      i++;
      if (!fieldst[1].checked && !fieldst[2].checked) {
        if (!m2.length) fieldst[1].focus();
        m2.push(fieldst[1].name);
        fieldst[1].parentNode.style.backgroundColor = 'red';
      }
    }
    else if (!fieldst[i].value){
      if (!m2.length) fieldst[i].focus();
      m2.push(fieldst[i].id);
      fieldst[i].parentNode.style.backgroundColor = 'red';
    }
  }

  if (m2.length) {
    alert("Поля " + m2.join(', ') + " не заполнены.");
    return false;
  }
}


function checkName(){
    var t = document.getElementById('name');
    var n=0;
    var position=0;
    while(true){
        position = t.value.indexOf(" ",position);
        if (position < 0){
            break;
        }
        else {
            ++position;
            n++;
        }
    }
    if (n!==2) return "\nНекорректное ФИО.\n";
    else return "\n";
}

function checkPhone(){
    var t = document.getElementById('mobile');
    var flag = false;
    if (t.value.length===10 || t.value.length===12)
        if ( t.value.indexOf("+", 0) === 0 && (t.value.indexOf("7", 0)===1 || t.value.indexOf("3", 0)===1 )) flag = true;
    if (!flag) return "Некорректный номер телефона.\n";
    else return "";
}

function amountWords() {

var el = document.getElementById("q1");

el.forEach((x) => x.parentNode.style.backgroundColor = null);

  if (el.value.split(' ').length < 31) {
    return "Ответ должен быть не менее 30 слов! \n";
    el.parentNode.style.backgroundColor = 'red';  }
  else return "";
  }
