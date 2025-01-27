//This file is autogenerated. See modules.json and autogenerator.py for details

const fetch = require('node-fetch');

/*
    get_allredirects.js

    MediaWiki API Demos
    Demo of `Allredirects` module: Get the first three unique pages containing redirects to the main namespace.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    list: "allredirects",
    arunique: "1",
    arnamespace: "0",
    arlimit: "3"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var redirects = response.query.allredirects;
        for (var r in redirects) {
            console.log(redirects[r].title);
        }
    })
    .catch(function(error){console.log(error);});
