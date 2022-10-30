function checkcontact() {
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
}
