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
    body += chunk;  
  });

  response.on("end", function(){
    var profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
    console.dir(profile);
  });

});


  request.on("error", function(error){
    console.error(error.message);
  });