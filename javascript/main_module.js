//This file is autogenerated. See modules.json and autogenerator.py for details

const fetch = require("node-fetch")

/*
    main_module.js

    MediaWiki API Demos
    Demo of `Main module` module: Get help for the main module.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "help",
    wrap: "",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});
