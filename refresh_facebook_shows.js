var http = require("http");
var https = require('https');
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

// getShowJSON('http://bridgetown.festivalthing.com/export/submitted-shows/json');




curlFacebookLinter();


function curlFacebookLinter() {
  
  var shows = getShowObject();
  
  shows.forEach(function(showObj) {
    var pageUrl = showObj.SubmittedId + '-' + convertToSlug(showObj.Name);
    var url = "https://developers.facebook.com/tools/debug/og/object?q=http%3A%2F%2Fwww.bridgetowncomedy.com%2Fshow%2F" + pageUrl;
    console.log(url);
    // var userAgent = "Opera/9.80 (X11; Linux x86_64; U; en) Presto/2.10.229 Version/11.60";
    // var options = {
    //   hostname: 'developers.facebook.com',
    //   port: 443,
    //   path: url,
    //   method: 'GET',
    //   headers: {
    //     'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13'
    //   }
    // };
    // var request = https.get(options, function(response) {
    //   console.log("statusCode: ", response.statusCode);
    //   console.log("headers: ", response.headers);
    // });
  });
  
}

function getShowObject() {
  return eval(fs.readFileSync('fixtures/ajax-shows.json', 'utf8'));
}

function getShowData() {
  return fs.readFileSync('fixtures/ajax-shows.json', 'utf8');
}





function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}


