var btnTranslate = document.querySelector("#btn");

var txtinput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverApiUrl = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslation(text) {
  return serverApiUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Server issue Please try after sometime");
}

function clickEventHandler() {
  var inputText = txtinput.value;

  //fetch starts
  fetch(getTranslation(inputText))
    .then(function responseHandler(response) {
      return response.json();
    })
    .then(function logJSON(json) {
      console.log(json);
      translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", clickEventHandler);
