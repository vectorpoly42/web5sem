function checkcontact() {
  var fieldsc = [document.getElementById('name'),
    document.getElementById('gen1'),
    document.getElementById('gen2'),
    document.getElementById('age'),
    document.getElementById('message'),
    document.getElementById('email'),
    document.getElementById('mobile')
  ];

  var m1 = [];

  for (var i = 0; i < fieldsc.length; i++) {
    if (i == 1) {
      i++;
      if (!fieldsc[1].checked && !fieldsc[2].checked) {
        if (!m1.length) fieldsc[1].focus();
        m1.push(fieldsc[1].name);
      }
    } else if (!fieldsc[i].value) {
      if (!m1.length) fieldsc[i].focus();
      m1.push(fieldsc[i].id);
    }
  }

  if (m1.length) {
    alert("Поля " + m1.join(', ') + " не заполнены.");
    return false;
  }

  return validateAll();
}

function checktest() {
  var fieldst = [document.getElementById('name'),
    document.getElementById('group'),
    document.getElementById('q1'),
    document.getElementById('ans21'),
    document.getElementById('ans22'),
    document.getElementById('ans23'),
    document.getElementById('q3')
  ];

  fieldst.forEach((x) => x.parentNode.style.backgroundColor = null);

  var m2 = [];

  for (var i = 0; i < fieldst.length; i++) {
    if (i == 3) {
      i += 2;
      if (!fieldst[3].checked && !fieldst[4].checked && !fieldst[5].checked) {
        if (!m2.length) fieldst[3].focus();
        m2.push(fieldst[3].name);
        fieldst[3].parentNode.style.backgroundColor = 'red';
      }
    } else if (!fieldst[i].value) {
      if (!m2.length) fieldst[i].focus();
      m2.push(fieldst[i].id);
      fieldst[i].parentNode.style.backgroundColor = 'red';
    }
  }

  if (m2.length) {
    alert("Поля " + m2.join(', ') + " не заполнены.");
    return false;
  }

  return checkName() && amountWords();
}


function checkName() {
  return document.getElementById('name').value.trim().split(' ').length > 2;
}

function checkPhone() {
  var t = document.getElementById('mobile');
  var flag = false;
  if (t.value.length === 10 || t.value.length === 12)
    if (t.value.indexOf("+", 0) === 0 && (t.value.indexOf("7", 0) === 1 || t.value.indexOf("3", 0) === 1)) flag = true;
  if (!flag) {
    return false;
  }
  return true;
}

function checkEmail() {
  return /\S+@\S+\.\S+/.test(document.getElementById('email').value);
}

function amountWords() {
  var el = document.getElementById("q1");

  el.parentNode.style.backgroundColor = null;

  if (el.value.split(' ').length < 31) {
    alert("Ответ должен быть не менее 30 слов!");
    el.parentNode.style.backgroundColor = 'red';
    return false;
  }

  return true;
}

function validate(elem, validateFunc) {
  if (validateFunc()) {
      elem.className = "yes";
      elem.nextSibling.style.display = "none";
    } else {
      elem.className = "no";
      elem.nextSibling.style.display = "inline";
    }
}

function validateAll() {
  return checkName() && checkPhone() && checkEmail();
}

function checkSubmit() {
  var sub = document.getElementById('submit');
  if (validateAll()) {
    sub.disabled = false;
    sub.style.backgroundColor = "#16a085"
  } else {
    sub.disabled = true;
  }
}
