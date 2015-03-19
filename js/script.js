/*
  Random Word Maker
  ==============
  Irvel Nduva
  irvel.com
  Marzo 2015
*/

var tresP = ["Banana"];


function cambiarP() {
  var arreglo = new Array;
  var requestStr = "http://randomword.setgetgo.com/get.php";
  //Planned variable to modify the generated word length
  var wordLength = 6;
  for (var i = 0; i < wordLength; i++) {
    //Ugly jQuery because I couldn't make it work with pure Javascript :(
    $.ajax({
      type: "GET",
      async: false,
      url: requestStr,
      dataType: "jsonp",
      jsonpCallback: 'RandomWordComplete',
      success: function(data) {
        tresP.push(data.Word);
      }
    });
  };
  juntarSilabas();
}


function RandomWordComplete(data) {
  document.getElementById("palabraInventada").innerHTML = data.Word;
  //tresP.push(data.Word);
}


function isConsonant(leter){
  switch (leter.toUpperCase()){
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
    default: return false; break;
  }
}


function hacerSilabas(palabra) {
  console.log("Holaasdfasdf");
  console.log(palabra);
  var listaSilab = new Array();
  var silabActual = "";
  for (var i = 0; i < palabra.length; i++) {
    console.log(silabActual);
    //Unfinished
    if( isConsonant(palabra[i]) ){
      silabActual = silabActual + palabra[i];
      i++;
      while( !isConsonant(palabra[i]) && i < palabra.length){
        //Hacer nueva silaba
        silabActual = silabActual + palabra[i];
        i++;
      }
    }
    else{
      silabActual = palabra[i];
    }
    listaSilab.push(silabActual);
    silabActual = "";
  };
  return listaSilab;
}


function juntarSilabas() {
  var silabas = new Array();
  for (var i = 0; i < tresP.length; i++) {
    silabas = silabas.concat(hacerSilabas(tresP[i]));
  };
  for (var i = 0; i < silabas.length; i++) {
    console.log(silabas[i]);
  };
  console.log("Hola");
}
