//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_allimages_by_date.js

    MediaWiki Action API Code Samples
    List all images in the namespace, starting from January 1, 2010, at 18:05:46 UTC.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    list: "allimages",
    aisort: "timestamp",
    aistart: "2010-01-01T18:05:46Z"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});