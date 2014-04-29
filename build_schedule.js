var http = require("http");
var fs = require("fs");

getScheduleJSON('http://bridgetown.festivalthing.com/export/schedule/json');

function getScheduleJSON(url, callback) {
  var file = fs.createWriteStream("fixtures/festivalthing-schedule.json");


  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      fs.appendFileSync("fixtures/festivalthing-schedule.json",chunk);
    });
    response.on('end', function (data) {
      //stringifyScheduleJSON("fixtures/festivalthing-schedule.json");
    });
  });
  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

function stringifyScheduleJSON(filepath) {
  var rawEventData = fs.readFileSync('fixtures/festivalthing-schedule.json', 'utf8');
  fs.writeFile(filepath, JSON.stringify(rawEventData, null, " "), 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
