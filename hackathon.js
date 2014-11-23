// JavaScript source code

var apiKey = "31073e76-4d1f-4615-9375-694ebfad9db7";

var apiURL;

var setURL = function(url){

  var path = encodeURIComponent(url);
   
  apiURL = "https://api.idolondemand.com/1/api/sync/recognizebarcodes/v1?url=" + path + "&apikey=31073e76-4d1f-4615-9375-694ebfad9db7";
}

var sendRequest = function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiURL, false);
  xhr.send();
  var xhrDoc = xhr.response;
  console.log(xhrDoc);
}

var run = function()
{
	var inputBox = document.getElementById('url');
	var inputStr = inputBox.value;
	setURL(inputStr);
	sendRequest();
};

