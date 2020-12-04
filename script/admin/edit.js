import { baseUrl } from  "../utills/baseUrl.js";
import { articles } from  "../utills/settings.js";

const queryBarString = document.location.search;
const params = new URLSearchParams(queryBarString);
const id = params.get("id");

if(!id){
    document.location.href = '/';
};

const objectUrl = baseUrl + articles + '/' + id;

const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector("#author");
const summary = document.querySelector('#summary');
const idInput = document.querySelector('#id');
const messageOutput = document.querySelector("#message");
const loader = document.querySelector(".loader");

(async function () {

    try{
        const response = await fetch(objectUrl);
        const dataObject = await response.json();

        console.log(dataObject)
    }
     catch(error){
        console.log(error)
     }

     finally {
         loader.style.display = 'none';
         form.style.display = 'block';
     }

})();