
var input = document.getElementsByTagName('input');

var button = document.getElementsByTagName('button');

button[0].addEventListener("click",function(){
clear();
var searchItem = input[0].value.replace(" ","+");
//var url = "http://api.giphy.com/v1/gifs/search?q="+ searchItem +"&api_key=dc6zaTOxFJmzC";
var url = "https://api.tenor.com/v1/search?q="+ "peach+goma" +searchItem + "&key=U8ILC6NP5H7A&limit=20";
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
  var data = e.currentTarget.response;
  //console.log(data);
  putOnSite(data);
})
})




function putOnSite(obj){
  var body = document.getElementsByClassName('js-container')[0];
  var output = JSON.parse(obj);
  if (output.results.length === 0){
    body.innerHTML = "<h3 style=\"text-align:center\">Nothing Found :(</h3>"
  }
  else {
  output.results.forEach((img) => {
    var pic = img.media[0].tinygif.url;
    body.innerHTML += "<img src=" + pic + " img>";

  });
}
}

function clear(){
  var body = document.getElementsByClassName('js-container')[0];
  body.innerHTML = "";
}
