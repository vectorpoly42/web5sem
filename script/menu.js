function printMenu() {
  document.write("<li onclick=\"submenu(this)\"><a href=\"#\">Мои интересы</a>");
  document.write("<ul id=\"submenu\" style =\"display: none\"><li><a href=\"hobbies.html#first\">Мои увлечения</a></li> ");
  document.write("<li><a href=\"hobbies.html#second\">Моя любимая музыка</a></li>");
  document.write("<li><a href=\"hobbies.html#third\">Любимые произведения</a></li></ul>");
}