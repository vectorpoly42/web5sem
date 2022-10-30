function checkcontact() {
<<<<<<< HEAD
  var fields = Array(document.getElementById('fio'),
                    document.getElementById('gen1'),
                    document.getElementById('gen2'),
                    document.getElementById('age'),
                    document.getElementById('message'),
                    document.getElementById('mail'));

var m - new String();

if(!fields[1].checked && !fields[2].checked) {
  m+=fields[2].name + ",";
  fields[1].focus();
}
for (i=3; i<6; i++)
  if (fields[i].value===""){
    m = m + fields[i].name + ",";
    fields[i].focus();
  }

  if (m!=0) return "Поля" + m + "не заполнены.";
  else return "\n";
=======
  var fields = [ document.getElementById('name'),
                 document.getElementById('gen1'),
                 document.getElementById('gen2'),
                 document.getElementById('age'),
                 document.getElementById('message'),
                 document.getElementById('email') ];

  fields.forEach((x) => x.parentNode.style.backgroundColor = null);

  var m = [];

  for (var i = 0; i < 6; i++) {
    if (i == 1) {
      i++;
      if (!fields[1].checked && !fields[2].checked) {
        if (!m.length) fields[1].focus();
        m.push(fields[1].name);
        fields[1].parentNode.style.backgroundColor = 'red';
      }
    }
    else if (!fields[i].value){
      if (!m.length) fields[i].focus();
      m.push(fields[i].id);
      fields[i].parentNode.style.backgroundColor = 'red';
    }
  }

  if (m.length) {
    alert("Поля " + m.join(', ') + " не заполнены.");
    return false;
  }
>>>>>>> 5f8de634c4522a86d22160e4d04f4ad3c68eb0b2
}
