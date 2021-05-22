'use strict';
const txtInput= document.querySelector('#txt-area');

const translateButton = document.querySelector('button');

const txtOutput = document.querySelector('.output-box');

const serverUrl= "https://api.funtranslations.com/translate/minion.json";

const generateUrl= function(text){
    return serverUrl+ "?" +"text=" + text;
}


const catchError = function(error){
    console.log('The error is '+ error);
    alert("Error to retrieve information from the server")
}
const clickHandler= function(){
    const inputValue= txtInput.value;
    fetch(generateUrl(inputValue)).then(response=> response.json()).then(json=> {
        var translatedText = json.contents.translated;
        txtOutput.innerText= translatedText;
    }).catch(catchError)

}

translateButton.addEventListener('click', clickHandler)
