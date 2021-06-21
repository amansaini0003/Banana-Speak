var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    console.log("Clicked on translate");
    console.log("input : ", txtInput.value);
    outputDiv.innerText = "Translation will come here...";
}



btnTranslate.addEventListener("click", clickHandler);




