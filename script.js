/*
  Random Word Maker
  ==============
  Irvel Nduva
  irvel.com
  Marzo 2015
*/

function cambiarP() {
  var word1;
  var word2;
  var word3;
  var requestStr = "http://randomword.setgetgo.com/get.php";
    $.ajax({
      type: "GET",
      url: requestStr,
      dataType: "jsonp",
      jsonpCallback: 'RandomWordComplete'
  });
};


function RandomWordComplete(data) {
  document.getElementById("palabraInventada").innerHTML = data.Word;
};
