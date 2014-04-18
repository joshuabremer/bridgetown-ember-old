var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

getPerformerJSON('http://bridgetown.festivalthing.com/export/performers/json');
//getPerformerJSON('http://127.0.0.1:8000/fixtures/ajax-performer.json');

function getPerformerJSON(url, callback) {
  //var file = fs.createWriteStream("assets/performers.json");

  fs.writeFileSync("assets/raw_performers.json",'','utf8');
  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      fs.appendFileSync("assets/raw_performers.json",chunk);
    });
    response.on('end', function (data) {
      stringifyPerformerJSON("assets/raw_performers.json",function() {
          sanitizeData("assets/raw_performers.json",function() {
            console.log('Done replacing Apostrophes');
              addEventIds("assets/raw_performers.json",function() {
                console.log('Done adding Event IDs');
                fs.writeFileSync("scripts/fixtures_performer.js","/*jshint -W100 */\nApp.Performer.FIXTURES = ",'utf8');
                fs.appendFileSync("scripts/fixtures_performer.js",getPerformerData(),{encoding:'utf8'});
                fs.appendFileSync("scripts/fixtures_performer.js",";");
                console.log("Created: " + "scripts/fixtures_performer.js");
              });
        });
      });
      
      
      
    });
  });
  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

function getEventObject() {
  return eval(JSON.parse(getEventData()));
}

function getEventData() {
  return fs.readFileSync('assets/raw_events.json', 'utf8');
}


function getPerformerObject() {
  return eval(JSON.parse(getPerformerData()));
}

function getPerformerData() {
  return fs.readFileSync('assets/raw_performers.json', 'utf8');
}

function getScheduleObject() {
  return eval(getScheduleData());
}

function getScheduleData() {
  return fs.readFileSync('assets/raw_schedules.json', 'utf8');
}

function stringifyPerformerJSON(filepath,callback) {
  var rawPerformerData = fs.readFileSync('assets/raw_performers.json', 'utf8');
  fs.writeFile(filepath, JSON.stringify(rawPerformerData), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function addEventIds(filepath,callback) {
  var performerObj = getPerformerObject();
  var scheduleObj = getScheduleData();

  for (var key in performerObj) {
    performerObj[key].events = getEventsForPerformer(performerObj[key].id)
  }
  fs.writeFile(filepath, JSON.stringify(performerObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function getEventsForPerformer(id) {
  var scheduleObj = getScheduleObject();
  var returnArray = [];
  for (var key in scheduleObj) {
    var idCheck = parseInt(scheduleObj[key].PerformerId,10);
    if (idCheck === parseInt(id,10) && doesEventExistForId(scheduleObj[key].EventId)) {
      returnArray.push(scheduleObj[key].EventId);
    }
  }
  return returnArray;
}

function sanitizeData(filepath, callback) {
  var performerObj = getPerformerObject();
  for (var key in performerObj) {
    performerObj[key].id = performerObj[key].PerformerId;

    // Create page URLs
    performerObj[key].pageUrl = performerObj[key].id + '-' + convertToSlug(performerObj[key].Name);

    performerObj[key].Bio = performerObj[key].Bio || "";
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2018/g, "&#x2018;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2019/g, "&#x2019;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201c/g, "&#x201c;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2033/g, "&#x2033;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201d/g, "&#x201d;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00a0/g, " ");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2026/g, "&#x2026;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2013/g, "&#x2013;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2014/g, "&#x2014;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e9/g, "&#x00e9;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e1/g, "&#x00e1;");

    performerObj[key].SortOrder = parseInt(performerObj[key].SortOrder,10);

  }

  performerObj = sortArray(performerObj,"SortOrder");

  fs.writeFile(filepath, JSON.stringify(performerObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}


function doesEventExistForId(id) {
  var eventObj = getEventObject();
  id = parseInt(id,10);
  for (var key in eventObj) {
    var eventId = parseInt(eventObj[key].id,10);

    if (eventId === id) {
      return true;
    }
  }
  return
}

function cleanStr(string) {
  return string.replace(/\W/g, '').toLowerCase();
}


function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

function sortArray(arr,key) {
  arr.sort(function(a, b){
    var keyA = a[key],
    keyB = b[key];
    // Compare the 2 dates
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
  });
  return arr;
}


