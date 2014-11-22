// JavaScript source code

var apiKey = "27f7d998-e81b-464a-904f-b565c3a33f41"

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.idolondemand.com/1/api/sync/recognizeimages/v1", false);
xhr.send();


console.log(xhr.status);
console.log(xhr.statusText);