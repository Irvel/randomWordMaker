/*
  Random Word Maker
  ==============
  Irvel Nduva
  irvel.com
  Marzo 2015
*/

function cambiarP(){
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "http://randomword.setgetgo.com/get.php", false );
  xmlHttp.send( null );
  var casilla = document.getElementById("palabraInventada").innerHTML = xmlHttp.responseText;
};