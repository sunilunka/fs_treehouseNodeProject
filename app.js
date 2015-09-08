var http = require("http");


var username = "sunilunka";

function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript";
  console.log(message);

}

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
  console.dir(response.statusCode);
  var body = "";
  response.on("data", function(chunk){
    JSON.parse(chunk);
  });

  response.on("end", function(){
    console.log(body);
  });

});


  request.on("error", function(error){
    console.error(error.message);
  });