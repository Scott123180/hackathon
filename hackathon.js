// JavaScript source code

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.idolondemand.com/1/api/sync/recognizeimages/v1", false);
xhr.send();

console.log(xhr.status);

