function checkcontact() {
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
}
