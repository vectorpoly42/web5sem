function anchors() {

  document.write("<" + anchors.arguments[0] + "ol class =\"" + anchors.arguments[0] + "ol\">");

  for (i = 1; i < anchors.arguments.length; i += 2)
    document.write("<li><a href=\"#" + anchors.arguments[i] + "\">" + anchors.arguments[i + 1] + "</a></li>");
  document.write("</" + anchors.arguments[0] + "ol>");
}