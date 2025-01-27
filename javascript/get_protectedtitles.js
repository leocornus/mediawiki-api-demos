//This file is autogenerated. See modules.json and autogenerator.py for details

const fetch = require('node-fetch');

/*
    get_protectedtitles.js

    MediaWiki API Demos
    Demo of `Protectedtitles` module: Get the first 2 titles which only sysops can create

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    list: "protectedtitles",
    ptlevel: "sysop",
    ptlimit: "2"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.protectedtitles;
        for (var p in pages) {
            console.log(pages[p].title);
        }
    })
    .catch(function(error){console.log(error);});
