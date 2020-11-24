import { baseUrl } from './baseUrl.js';
import { articles } from './settings.js';
import { createElement, createFilterList } from './createElement.js';
import { displayMessage, errorMessage } from './error.js';

export default getApi;
async function getApi(){
    try{
        const fetchApi = await fetch(baseUrl + articles);
        const data = await fetchApi.json();
        const searchBox = document.querySelector("#search");
        
        data.forEach(item => createElement(item));

        searchBox.addEventListener("keyup", function(){
            createFilterList(data, searchBox.value)
        })

    } catch (error){
        displayMessage(error, errorMessage)
    };
};