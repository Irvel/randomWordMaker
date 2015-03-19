/*
  Random Word Maker
  ==============
  Irvel Nduva
  irvel.com
  Marzo 2015
*/

var tresP;

function cambiarP() {
  var requestStr = "http://randomword.setgetgo.com/get.php";
  //Future word lenght selector
  var wordLength = 6;
  for (var i = 0; i < wordLength; i++) {
    $.ajax({
      type: "GET",
      url: requestStr,
      dataType: "jsonp",
      jsonpCallback: 'RandomWordComplete'
    });
  };
  hacerSilabas(wordLength);
}


function RandomWordComplete(data) {
  document.getElementById("palabraInventada").innerHTML = data.Word;
  tresP[tresP.length] = data.Word;
}


function isConsonant(leter){
  switch (leter){
    case "B": return true; break;
    case "C": return true; break;
    case "D": return true; break;
    case "F": return true; break;
    case "G": return true; break;
    case "H": return true; break;
    case "J": return true; break;
    case "K": return true; break;
    case "L": return true; break;
    case "M": return true; break;
    case "N": return true; break;
    case "P": return true; break;
    case "O": return true; break;
    case "P": return true; break;
    case "Q": return true; break;
    case "R": return true; break;
    case "S": return true; break;
    case "T": return true; break;
    case "V": return true; break;
    case "W": return true; break;
    case "X": return true; break;
    case "Y": return true; break;
    case "Z": return true; break;
  }
}


function hacerSilabas(palabra) {
  var silabas;
  for (var i = 0; i < palabra.length; i++) {
    //Unfinished
    if( isConsonant(palabra[i]) )
  };
}


function juntarSilabas() {
  var silabas;
  for (var i = 0; i < tresP.length; i++) {
    silabas[silabas.length] = hacerSilabas(tresP[i]);
  };
}
