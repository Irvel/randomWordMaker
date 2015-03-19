/*
  Random Word Maker
  ==============
  Irvel Nduva
  irvel.com
  Marzo 2015
*/

function cambiardP(){
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "http://randomword.setgetgo.com/get.php", true );
  xmlHttp.send();
  document.getElementById("palabraInventada").innerHTML = xmlHttp.responseText;
};

 function cambiarP() {
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
