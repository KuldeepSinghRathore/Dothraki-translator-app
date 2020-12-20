var btnTranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverApiUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.js";

function getTranslation(text){
    return serverApiUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Server issue Please try after sometime")
}

function clickEventHandler(){
    var inputText = txtinput.value;


//fetch starts
fetch(getTranslation(inputText))
.then(function responseHandler(response){
    return response.json()
})
.then(function logJSON(json){
    // console.log(json);
    translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
})
.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler );