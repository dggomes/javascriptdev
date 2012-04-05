function showPic(whichpic){
var source = whichpic.getAttribute("href");
var placeholder = document.getElementById("placeholder");
var text = whichpic.getAttribute("title");
var description = document.getElementById("description");
placeholder.setAttribute("src",source);
description.firstChild.nodeValue = text;
}



