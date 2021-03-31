//This file is autogenerated. See modules.json and autogenerator.py for details

const fetch = require("node-fetch")

/*
    langbacklinks.js

    MediaWiki API Demos
    Demo of `Langbacklinks` module: Get pages linking to a given language link

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "langbacklinks",
    lbltitle: "Test",
    lbllang: "fr",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});
