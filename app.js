var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var mockServerURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something wrong from server side... please try again after sometime...");
}

function clickHandler() {

    var url = getTranslationURL(txtInput.value);
    fetch(url)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}



btnTranslate.addEventListener("click", clickHandler);