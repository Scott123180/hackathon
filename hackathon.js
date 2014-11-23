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
  var result = JSON.parse(xhr.response); //magic!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return result['barcode'][0].text;
}

var run = function()
{
	var button = document.getElementById('runner');
	var inputBox = document.getElementById('url');
	var intro = document.getElementById('intro');
	var center = document.getElementById('area');
	var div = document.getElementById('area2');
	var body = document.getElementById('body');
	
	var inputStr = inputBox.value;
	setURL(inputStr);
	var code = sendRequest();
	var evenMoreMagic = parseInt(code);
	//console.log(evenMoreMagic);
	
	profile(evenMoreMagic,names,descriptions,links);
	center.removeChild(intro);
	center.removeChild(inputBox);
	center.removeChild(button);
	div.removeChild(center);
	body.removeChild(div);
	
	
};

var profile = function(buildingNum, name, description, link)
{
	var div = document.getElementById('profile')
	var center = document.createElement('center');
	
	center.setAttribute("id", "area");
	
	var buildingName = document.createElement('h2');
	buildingName.innerHTML = name[buildingNum];
	
	var mybr1 = document.createElement('br');
	//var mybr2 = document.createElement('br');
	
	var buildingDescription = document.createElement('p');
	buildingDescription.innerHTML = description[buildingNum];
	
	var mybr3 = document.createElement('br');
	
	var buildingLink = document.createElement('a');
	buildingLink.innerHTML = 'Click Here For More Information';
	buildingLink.href = link[buildingNum];
	
	center.appendChild(buildingName);
	center.appendChild(mybr1);
	//div.appendChild(mybr2);
	center.appendChild(buildingDescription);
	center.appendChild(mybr3);
	center.appendChild(buildingLink);
	
	div.appendChild(center);	
	
	var inputBox = document.createElement('input');
	inputBox.setAttribute("id", "url");
	
	var button = document.createElement('button');
	button.setAttribute("id", "runner");
	button.setAttribute("onclick", "run()");
	button.innerHTML = "Enter";
	
	var intro = document.createElement('p')
	intro.setAttribute("id", "intro");
	intro.innerHTML = "Upload Next Picture";
	
	var div = document.createElement('div');
	div.setAttribute("id", "area2");
	
	var body = document.getElementById('body');
	
	center.appendChild(intro);
	center.appendChild(inputBox);
	center.appendChild(button);
	
	div.appendChild(center);
	
	body.appendChild(div);
	
}


