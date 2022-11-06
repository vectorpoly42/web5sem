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
      document.write("<td> <img src=" + fotos[i] + " alt=" + titles[i] + " title=" + titles[i] + "><figcaption>" + titles[i] + "</figcaption> </td>");
    document.write("</tr>");
  }
}