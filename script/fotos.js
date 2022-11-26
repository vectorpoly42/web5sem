var path = "img/";
fotos = new Array(
  path + "Ann.jpg", path + "fly.jpg", path + "sky1.jpg",
  path + "fog.jpg", path + "randomkit.jpg", path + "sky2.jpg",
  path + "ija.jpg", path + "randomkitagain.jpg", path + "sky3.jpg",
  path + "mendKarine.jpg", path + "rinat.jpg", path + "rafulik.jpg"
);

titles = new Array("Аня", "Флай", "Небо", "Туман", "Кошечка", "Небо №2", "Еда", "Кошечка №2", "Небо №3", "Моя лучшая подруга", "Рука", "Раф");

function fotoTable(n, m) { //i-номер элемента, с которого начнется отображение; n-количество элементов для отображения
  i = 0;
  for (j = 0; j < n; j++) {
    document.write("<tr>");
    for (k = 0; k < m; k++, i++)
      document.write("<td> <img class=\"inTable\" src=" + fotos[i] + " alt=" + titles[i] + " title=" + titles[i] + " onClick=\"maxImg(this)\"><figcaption>" + titles[i] + "</figcaption> </td>");
    document.write("</tr>");
  }
}

function maxImg(obj) {
  // window.open(obj.src, obj.title);
  var newDiv = document.createElement('div');
  var closingDiv = document.createElement('div');
  var picture = document.createElement('img');

  function close() {
    newDiv.style.display = "none";
    picture.parentElement.remove(picture);
    closingDiv.parentElement.remove(closingDiv);
  }

  newDiv.style.display = "block";
  newDiv.id = "fotoDiv";
  newDiv.className = "fotoMax";

  picture.src = obj.src;
  picture.title = obj.title;
  picture.alt = obj.alt;
  console.log("picture width = " + picture.width);
  console.log("screen width = " + screen.width);

  var width = screen.width,
    height = screen.height;
  var proportion =
    (picture.width * 100 / width < picture.height * 100 / height) ?
    picture.height * 100 / height : picture.height * 100 / height; //коэффициент размера относительно окна
  console.log("proportion = " + proportion);
  proportion -= 1;
  picture.width = (picture.width * 70) / proportion; // уменьшаем изображение до 70% от размера экрана
  picture.height = (picture.height * 70) / proportion;
  console.log("new picture width = " + picture.width);

  closingDiv.className = "closingDiv";
  closingDiv.style.right = picture.width - 20;
  closingDiv.onclick = close;


  newDiv.appendChild(picture);
  newDiv.appendChild(closingDiv);
  document.getElementById("body").appendChild(newDiv);
}