//This file is autogenerated. See modules.json and autogenerator.py for details

const fetch = require('node-fetch');

/*
    get_usercontribs.js

    MediaWiki API Demos
    Demo of `Usercontribs` module: List user contributions.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    list: "usercontribs",
    ucuser: "Jimbo Wales"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var usercontrib = response.query.usercontribs;
        for (var uc in usercontrib) {
            console.log(usercontrib[uc].title);
        }
    })
    .catch(function(error){console.log(error);});
